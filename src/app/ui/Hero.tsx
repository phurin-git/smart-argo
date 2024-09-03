import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-hero h-[954px] px-[94px] pt-[290px] -mt-[110px]">
            <div className="w-[730px] h-[430px]">
                <div className="relative mb-[15px]">
                    <Image src="/images/hero/underline1.svg" alt="" width={215} height={30} className="absolute -bottom-1"/>
                    <span className="relative text-[25px] leading-[30px] font-bold z-20">Original & Natural</span>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[10px]">
                        <div>
                            <div className="relative w-[639px] h-[109px]">
                                <Image src="/images/hero/icon1.svg" alt="" width={75} height={62} className="absolute -top-[21px] right-[3px]"/>
                                <h1 className="text-[#F7C35F]">Agriculture Matter</h1>
                            </div>
                            <h1>Good production</h1>
                        </div>
                        <p className="w-[730px]">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he speedily.</p>
                    </div>
                    <Link href="" className="w-fit rounded-[20px] px-[50px] py-[25px] uppercase text-black bg-[#F7C35F]">Discover More</Link>
                </div>
            </div>
        </section>
    );
}