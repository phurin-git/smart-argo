import Link from 'next/link';
import Image from 'next/image';

const  getNavButton = (href:string, label: string) =>(
    <li className='hover:font-bold group'>
        <Link href={href}>{label}</Link>
        <span className='block w-full h-[2px] group-hover:bg-[#F7C35F]'></span>
    </li>
)

export default function NavBar() {
  return (
    <nav className='w-full h-[110px] bg-[#334B35] flex justify-between items-center sticky top-0 px-[94px] z-50'>
        <Image src='/images/logo.svg' alt="" width={198} height={31} />
        <ul className='flex gap-[50px]'>
            {getNavButton('/', 'Home')}
            {getNavButton('/about', 'About Us')}
            {getNavButton('/products', 'Our Products')}
            {getNavButton('/projects', 'Projects')}
            {getNavButton('/services', 'Services')}
            {getNavButton('/news', 'News')}
            {getNavButton('/contact', 'Contact Us')}
        </ul>
    </nav>
  );
}