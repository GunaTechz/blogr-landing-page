import Link from 'next/link';
import { footerData } from '../../utils/Footer';

const FooterLinks = ({ title, links }:any) => (
  <div className='py-10 md:pb-10 md:pt-0 flex flex-col md:grid items-center justify-center'>
    <h1 className='text-xl font-bold text-white pb-4'>{title}</h1>
    {links.map((item:any, index:any) => (
      <Link href={item.link} key={index}>
        <h1 className='text-md font-bold text-white text-start py-1 hover:underline'>{item.name}</h1>
      </Link>
    ))}
  </div>
);

export default function Footer() {
  return (
        <div className="bg-body-gradient-start rounded-tr-[200px]">
          <div className="pt-10 max-w-6xl mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-4 pb-10'>
              <div className="flex items-center justify-center">
                <img src="/images/logo.svg" alt="" width={100} height={100} />
              </div>
              {footerData.map((section, index) => (
               <FooterLinks key={index} title={section?.title} links={section?.links} />
              ))}
            </div>
          </div>
      </div>
  );
}