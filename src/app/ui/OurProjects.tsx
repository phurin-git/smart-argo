import Image from 'next/image';

const getCard = (image: string, title: string, subTitle: string) => (
    <button className="relative flex flex-col items-center group">
        <Image src={`/images/recently_completed_work/${image}.svg`} alt="" width={318} height={350} />
        <hgroup className='absolute bottom-0 group-hover:block hidden'>
            <span>{subTitle}</span>
            <h3>{title}</h3>
        </hgroup>
    </button>
);

export default function OurProjects() {
    return (
        <div className="flex flex-col items-center px-[94px] bg-[url(/images/recently_completed_work/bg.svg)]">
            <hgroup className='flex flex-col items-center'>
                <span>RECENTLY COMPLETED WORK</span>
                <h2>Explore Our Projects</h2>
            </hgroup>
            <div className="flex justify-between">
                {getCard('1', 'Farming', 'Agriculture')}
                {getCard('2', 'Natural way of agriculture', 'Vegetables')}
                {getCard('3', 'Farming', 'Agriculture')}
                {getCard('4', 'Fruits', 'Vegetables')}
            </div>
        </div>
    )
}