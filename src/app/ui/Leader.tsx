import Image from 'next/image';

export default function Leader() {
    return (
        <div className='relative h-[313px] bg-[url(/images/we_are_leader/style.svg)]'>
            <div className='absolute top-[112px] left-[94px] flex gap-[50px] items-center'>
                <div className='w-[90px] h-[90px] rounded-full flex justify-center items-center bg-[#344C31]'>
                    <Image src="/images/we_are_leader/icon1.svg" alt="" width={50} height={50}/>
                </div>
                <span className='font-johnstowndemo text-[50px] text-[#344C31]'>We are Leader in Agriculture Market</span>
            </div>
            <button className='absolute top-[122px] right-[94px] uppercase bg-[#F7C35F] text-black rounded-[20px] px-[25px] py-[25px]'>discover more</button>
        </div>
    )
}