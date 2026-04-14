import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import Transportation from "@/components/Transportation";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        <HeroSlider />
      </div>
      <Features />
      <Transportation />
      <WhyUs />
      <Footer />
    </main>
  );
}
