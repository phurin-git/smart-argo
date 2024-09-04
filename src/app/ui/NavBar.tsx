import Link from 'next/link';
import Image from 'next/image';

const  getNavButton = (href:string, label: string, className:string='') =>(
    <li className={`${className} flex flex-col items-center hover:font-bold group`}>
        <Link href={href}>{label}</Link>
        <span className='block w-full h-[2px] group-hover:bg-[#F7C35F]'></span>
    </li>
)

export default function NavBar() {
  return (
    <nav className='w-full h-[110px] bg-[#334B35] flex justify-between items-center sticky top-0 px-[94px] z-50'>
        <Link href="/">
          <Image src='/images/logo.svg' alt="" width={198} height={31} />
        </Link>
        <ul className='flex gap-[50px]'>
            {getNavButton('/', 'Home', 'w-[55px]')}
            {getNavButton('/about', 'About Us', 'w-[80px]')}
            {getNavButton('/products', 'Our Products', 'w-[114px]')}
            {getNavButton('/projects', 'Projects', 'w-[71px]')}
            {getNavButton('/services', 'Services', 'w-[74px]')}
            {getNavButton('/news', 'News', 'w-[50px]')}
            {getNavButton('/contact', 'Contact Us', 'w-[98px]')}
        </ul>
    </nav>
  );
}