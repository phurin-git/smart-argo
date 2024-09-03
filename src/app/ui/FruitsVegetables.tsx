import Image from 'next/image';

const getCard = (item:string) => (
    <button className='w-[183px] h-[177px] rounded-[15px] flex flex-col gap-5 px-[57px] py-[33px] bg-[#D9D9D9]/10 hover:bg-[#F7C35F]'>
        <Image src={`/images/fruits&vegtables/${item}.svg`} alt="Fruit" width={300} height={300} />
            <span className='capitalize'>{item}</span>
    </button>
)

export default function FruitsVegetables() {
    return (
        <div className='flex flex-col items-center gap-[100px] px-[94px] pt-[78px] pb-[188px]'>
            <hgroup className="flex flex-col gap-5 items-center">
                <span>Popular Foods And Vegetables</span>
                <h2>Quality Fruits & Vegetables</h2>
            </hgroup>
            <div className="w-full flex justify-evenly">
                {getCard('apple')}
                {getCard('blueberry')}
                {getCard('strawberry')}
                {getCard('eggplant')}
                {getCard('cabbage')}
                {getCard('carrot')}
            </div>
        </div>
    );
}