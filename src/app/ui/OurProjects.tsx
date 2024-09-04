'use client'
import Image from 'next/image';
import { DotButton, useDotButton } from '../ui/carousel/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'

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
    const options = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  
    return (
        <div className="relative flex flex-col items-center pt-[130px] pb-[100px] gap-[100px]">
            <hgroup className='flex flex-col items-center'>
                <span>RECENTLY COMPLETED WORK</span>
                <h2>Explore Our Projects</h2>
            </hgroup>
            <div className='flex flex-col gap-[50px]'>
                <div className="w-[1447px] -mt-[20px] select-none">
                    <div className="pt-[20px] overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y -ml-[56px]">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="flex flex-shrink-0 gap-[56px] pl-[56px] transform-gpu">
                                    {getCard('1', 'Natural way of agriculture', 'Agriculture')}
                                    {getCard('2', 'Natural way of agriculture', 'Agriculture')}
                                    {getCard('3', 'Natural way of agriculture', 'Agriculture')}
                                    {getCard('4', 'Natural way of agriculture', 'Agriculture')}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex gap-[7px] m-auto'>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'h-[10px] rounded-full'.concat(
                            index === selectedIndex ? ' w-[20px] bg-[#F7C35F]' : ' w-[10px] bg-white'
                        )}
                        />
                    ))}
                </div>
            </div>
            <Image src='/images/recently_completed_work/bg.svg' alt="" width={1920} height={439} className='absolute bottom-0 -z-50'/>
        </div>
    )
}