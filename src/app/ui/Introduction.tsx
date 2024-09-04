import Image from 'next/image';

export default function Introduction() {
    return (
        <div className="relative w-full flex gap-20 pt-[100px] pb-[159px]">
            <div className="absolute top-0 left-0 w-[512px] h-[497px] bg-[#263C28] -z-50"></div>
            <div className='relative h-fit'>
                <Image src="/images/our_introduction/1.svg" alt="" width={564} height={651}/>
                <div className='absolute -left-5 bottom-0 w-5 h-[258px] bg-[#F7C35F] rounded-l-[5px]'></div>
                <div className='absolute -bottom-[59px] translate-x-1/2 right-1/2 w-[428px] h-[140px] rounded-[10px] flex justify-evenly items-center bg-[#6D8C54]'>
                    <Image src="/images/our_introduction/icon1.svg" alt="" width={76} height={70}/>
                    <div className='w-px h-[77px] bg-white/20'></div>
                    <div className="flex flex-col gap-[7px]">
                        <span className='font-mistral text-[40px]'>86,700</span>
                        <p className='text-[16px]'>Successfully Project Completed</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[55px] pt-[19px]">
                <div className="flex flex-col gap-5">
                    <span>OUR INTRODUCTION</span>
                    <h2 className="w-[524px]">Pure Agriculture and
                    Organic Form</h2>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className='text-[#F7C35F] font-medium'>We’re Leader in Agriculture Market</h3>
                    <p className="w-[796px]">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humou or randomised words even slightly believable.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <ul className='flex flex-col gap-5'>
                        <li className='flex gap-5'><Image src={'/images/our_introduction/icon2.svg'} alt="" width={20} height={21}/>Organic food contains more vitamins</li>
                        <li className='flex gap-5'><Image src={'/images/our_introduction/icon2.svg'} alt="" width={20} height={21}/>Eat organic because supply meets demand</li>
                        <li className='flex gap-5'><Image src={'/images/our_introduction/icon2.svg'} alt="" width={20} height={21}/>Organic food is never irradiated</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}