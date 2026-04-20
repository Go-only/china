<?php
declare(strict_types=1);

// ==== Настройки — заполнить при деплое на Бегет ====
const MAIL_TO     = 'owner@example.ru';        // кому приходят заявки
const MAIL_FROM   = 'no-reply@example.ru';     // домен должен быть на Бегете
const SITE_ORIGIN = 'https://example.ru';      // без слэша в конце
// ===================================================

const ALLOWED_METHODS = ['Море', 'Авто', 'Авиа', 'Ж/Д', 'Мультимодальный'];

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . SITE_ORIGIN);
header('Vary: Origin');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 20000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'payload_too_large']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

// Honeypot: заполнили — тихо делаем вид, что всё ок
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function clean(string $s, int $max): string {
    $s = trim($s);
    $s = strip_tags($s);
    $s = str_replace(["\r", "\0"], '', $s);
    if (mb_strlen($s) > $max) {
        $s = mb_substr($s, 0, $max);
    }
    return $s;
}

function pick(array $d, string $k, int $max = 500): string {
    return isset($d[$k]) && is_string($d[$k]) ? clean($d[$k], $max) : '';
}

$firstName    = pick($data, 'firstName', 100);
$lastName     = pick($data, 'lastName', 100);
$phone        = pick($data, 'phone', 32);
$email        = pick($data, 'email', 200);
$company      = pick($data, 'company', 200);
$organization = pick($data, 'organization', 200);
$inn          = pick($data, 'inn', 20);
$message      = pick($data, 'message', 2000);

$methods = [];
if (isset($data['deliveryMethods']) && is_array($data['deliveryMethods'])) {
    foreach ($data['deliveryMethods'] as $m) {
        if (is_string($m) && in_array($m, ALLOWED_METHODS, true)) {
            $methods[] = $m;
        }
    }
}

if ($firstName === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'first_name_required']);
    exit;
}
if ($phone === '' || !preg_match('/^[+\d\s()\-]{6,}$/u', $phone)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'phone_invalid']);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'email_invalid']);
    exit;
}

$lines = [];
$lines[] = 'Имя: ' . $firstName;
if ($lastName !== '')     $lines[] = 'Фамилия: ' . $lastName;
$lines[]                  = 'Телефон: ' . $phone;
if ($email !== '')        $lines[] = 'E-mail: ' . $email;
if ($company !== '')      $lines[] = 'Компания: ' . $company;
if ($organization !== '') $lines[] = 'Организация: ' . $organization;
if ($inn !== '')          $lines[] = 'ИНН: ' . $inn;
if (!empty($methods))     $lines[] = 'Способ доставки: ' . implode(', ', $methods);
if ($message !== '') {
    $lines[] = '';
    $lines[] = 'Сообщение:';
    $lines[] = $message;
}
$lines[] = '';
$lines[] = '---';
$lines[] = 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '-');
$lines[] = 'UA: ' . clean($_SERVER['HTTP_USER_AGENT'] ?? '-', 300);

$body = implode("\n", $lines);

$subject = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта — ' . $firstName) . '?=';

$headers = [];
$headers[] = 'From: ' . MAIL_FROM;
$headers[] = 'Content-Type: text/plain; charset=utf-8';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'X-Mailer: site-form';
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$sent = @mail(MAIL_TO, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
