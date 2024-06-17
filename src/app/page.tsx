'use client';
import defaultImage from '../../public/default.jpg'
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ color: 'blue' }}>
      <h1 className="text-4xl font-bold">Welcome to the default subdomain</h1>
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          src={defaultImage}
          alt="Customization"
          layout="fill"
          objectFit="cover" 
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default IndexPage;
