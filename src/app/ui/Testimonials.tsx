'use client'
import Image from 'next/image'
import { DotButton, useDotButton } from '../ui/carousel/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
  
export default function Testimonials() {
    const options = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  
    return (
        <section className='flex flex-col gap-[50px] py-[100px]'>
            <hgroup className='w-fit m-auto flex flex-col gap-5 text-center'>
                <span>Our Testimonials</span>
                <h2>WHAT THEY’RE TAKING ABOUT</h2>
            </hgroup>
            <div className="w-[1083px] m-auto select-none">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-[1rem]">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className='flex flex-shrink-0 gap-[85px] items-center pl-[1rem] transform-gpu'>
                                <div className='relative'>
                                    <Image src='/images/testimonials/1.svg' width={350} height={350} alt='' />
                                    <Image src='/images/testimonials/qoute.svg' width={70} height={70} alt='' className='absolute top-[4px] right-[33px]'/>
                                </div>
                                <div className='flex flex-col gap-[40px]'>
                                    <p className='w-[648px]'>“Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi commodo volutpat quis neque. Scelerisque at in in id donec ornare velit. Posuere amet lobortis volutpat purus mauris. Tortor magna non turpis ultricies iaculis rhoncus. Volutpat lectus proin pellentesque platea.”</p>
                                    <div className='flex flex-col'>
                                        <small className='text-[20px] font-medium leading-[20px]'>Tyrese Gibson</small>
                                        <small className='text-[#ACACAC] text-base leading-5'>Customer</small>
                                    </div>
                                </div>
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
        </section>
    )
}