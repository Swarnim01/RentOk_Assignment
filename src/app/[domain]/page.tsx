'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image';
import subDomain1Image from '../../../public/subdomain1.jpg'
import { subdomainConfig } from '@/utils/subDomainConfig';
export default function SubDomainPage({params : {domain}} : {params: {domain: string}}) {
  const [config, setConfig] = useState(subdomainConfig.default);
  useEffect(() => {
    const currentConfig = subdomainConfig[domain] || subdomainConfig.default;
    setConfig(currentConfig);
  }, [domain]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ color: config.color }}>
    <h1 className="text-4xl font-bold">{config.text}</h1>
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <Image
        src={config.image}
        alt="Customization"
        layout="fill"
        objectFit="cover"
        className="mt-4"
      />
    </div>
  </div>
  )
}