import type { NextConfig } from 'next'                                                                                                                                    
                                                        
  const repo = 'china'                                                                                                                                                      
  const nextConfig: NextConfig = {
    output: 'export',                                                                                                                                                       
    images: { unoptimized: true },                      
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,                                                                                                                                                    
  }
                                                                                                                                                                            
  export default nextConfig   