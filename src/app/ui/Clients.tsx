import Image from 'next/image';
import Link from 'next/link';

export default function Clients() {
    return (
        <div className="client h-[295px] flex justify-center items-center gap-[25px] border-t border-white/20">
            <Link href="https://www.figma.com/">
                <Image src="/images/figma.svg" alt="" width={220} height={95}/>
            </Link>
            <Link href="https://www.figma.com/">
                <Image src="/images/figma.svg" alt="" width={220} height={95}/>
            </Link>
            <Link href="https://www.figma.com/">
                <Image src="/images/figma.svg" alt="" width={220} height={95}/>
            </Link>
            <Link href="https://www.figma.com/">
                <Image src="/images/figma.svg" alt="" width={220} height={95}/>
            </Link>
            <Link href="https://www.figma.com/">
                <Image src="/images/figma.svg" alt="" width={220} height={95}/>
            </Link>
            <Link href="https://www.figma.com/">
                <Image src="/images/figma.svg" alt="" width={220} height={95}/>
            </Link>
        </div>
    )
}