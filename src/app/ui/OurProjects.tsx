import Image from 'next/image';

const getCard = (image: string, title: string, subTitle: string) => (
    <button className="relative rounded-[10px] flex flex-col group hover:translate-y-[-20px] border border-[#F7C35F] border-opacity-0 hover:border-opacity-100 transition-all duration-300 overflow-hidden">
        <Image src={`/images/recently_completed_work/${image}.svg`} alt="" width={318} height={350} />
        <div className='absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent'></div>
        <div className='absolute bottom-[20px] left-1/2 -translate-x-1/2 w-full flex justify-between items-center px-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <hgroup className='w-1/2 flex flex-col gap-[5px] text-left'>
                <span className='font-bold text-[12px] text-[#F7C35F]'>{subTitle}</span>
                <h3 className='font-semibold text-[18px]'>{title}</h3>
            </hgroup>
            <Image src='/images/recently_completed_work/arrow.svg' alt="" width={20} height={14} />
        </div>
    </button>
);

export default function OurProjects() {
    return (
        <div className="flex flex-col items-center px-[94px] pt-[130px] pb-[100px] bg-[url(/images/recently_completed_work/bg.svg)] gap-[100px]">
            <hgroup className='flex flex-col items-center'>
                <span>RECENTLY COMPLETED WORK</span>
                <h2>Explore Our Projects</h2>
            </hgroup>
            <div className="flex gap-[56px]">
                {getCard('1', 'Natural way of agriculture', 'Agriculture')}
                {getCard('2', 'Natural way of agriculture', 'Agriculture')}
                {getCard('3', 'Natural way of agriculture', 'Agriculture')}
                {getCard('4', 'Natural way of agriculture', 'Agriculture')}
            </div>
        </div>
    )
}