import { StaticImageData } from 'next/image';
interface SubdomainConfig {
  color: string;
  text: string;
  image: StaticImageData;
}

export const subdomainConfig: Record<string, SubdomainConfig> = {
  subdomain1: {
    color: 'red',
    text: 'Welcome to subdomain1!',
    image: require('../../public/subdomain1.jpg') as StaticImageData,
  },
  subdomain2: {
    color: 'green',
    text: 'Welcome to subdomain2!',
    image: require('../../public/subdomain2.jpg') as StaticImageData,
  },
  default: {
    color: 'blue',
    text: 'Welcome to the default page!',
    image: require('../../public/default.jpg') as StaticImageData,
  },
};
