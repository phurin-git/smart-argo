import Image from "next/image";

export default function AgricultureMatters() {
    return (
        <div className="w-full h-[694px] px-[94px] flex justify-between items-center bg-[url(/images/argriculture_matters/video.svg)]">
            <h2>Agriculture Matters to<br />
            the Future of Bangladesh</h2>
            <div className="relative mr-[278px]">
                <button className="w-[130px] h-[130px] flex justify-center items-center rounded-full bg-transparent hover:border border-white/30">
                    <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-white ">
                        <Image src="/images/argriculture_matters/play.svg" width={13} height={16} alt="" />
                    </div>
                </button>
                <Image src="/images/argriculture_matters/watch_the_video.svg" width={169} height={48} alt="" className="absolute top-[129px] left-[86px]"/>
            </div>
        </div>
    );
}