import Image from 'next/image';

export default function Modern() {
    return (
        <div className="relative flex gap-[109px] bg-[#6D8C54]">
            <div className='relative'>
                <Image src="/images/modern_argriculture/1.svg" alt="" width={695} height={559} />
                <Image src="/images/modern_argriculture/logo.svg" alt="" width={100} height={100} className='absolute top-[39px] -right-[36px]'/>
            </div>
            <Image src="/images/modern_argriculture/style.svg" alt="" width={604} height={343} className='absolute bottom-0 right-0'/>
            <div className='absolute top-0 right-0'>
                <div className='relative w-[205px] h-[208px]'>
                    <div className='absolute top-0 right-0 w-[176px] h-[176px] bg-[#678551] rounded-bl-[10px]'></div>
                    <div className='absolute bottom-0 left-0 w-[80px] h-[80px] bg-[#DDDDDD]/15 rounded-[10px]'></div>
                </div>
            </div>
        </div>
    )
}