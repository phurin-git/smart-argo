import Image from 'next/image';
import Link from 'next/link';

const getListItem = (topic:string, href:string, byUser:string, amountComments:number, date:string, imgName:string) => (
    <li className='w-[460px] h-[514px] bg-[#2D442F]'>
        <Link href={href}>
            <Image src={`/images/from_the_blog/${imgName}.svg`} alt="" width={460} height={364} />
            <div className='relative flex flex-col gap-5 p-5'>
                <div className='flex gap-5'>
                    <div className='flex gap-[7px]'>
                        <Image src={`/images/from_the_blog/user.svg`} alt="" width={20} height={10} />
                        <span className='text-[14px]'>by {byUser}</span>
                    </div>
                    <div className='flex gap-[7px]'>
                        <Image src={`/images/from_the_blog/comment.svg`} alt="" width={20} height={10} />
                        <span className='text-[14px]'>{amountComments} Comments</span>
                    </div>
                </div>
                <span className='font-bold text-[24px]'>{topic}</span>
                <span className='absolute bottom-full right-0 rounded-tl-[10px] bg-[#F7C35F] text-black px-5 py-[7px] text-[15] font-bold'>{date}</span>
            </div>
        </Link>
    </li>
)

export default function Blog() {
    return (
        <div className="relative flex flex-col gap-[100px] px-[94px] py-[100px]">
            <div className='h-[573px] absolute top-0 right-0 left-0 bg-[#263C28] -z-50'>
                <div className='h-full bg-[url(/images/from_the_blog/bg.svg)]'></div>
            </div>
            <hgroup className="flex flex-col items-center">
                <span>FROM THE BLOG</span>
                <h2>News & Articles</h2>
            </hgroup>
            <ul className="flex justify-between gap-[30px]">
              {getListItem('Taking seamless key indicators offline to', '/blog/1', 'Kevin Martin', 2, '3 Sep, 2023', "1")}
              {getListItem('Override the digital divide with additional', '/blog/2', 'Kevin Martin', 5, '3 Sep, 2023', "2")}
              {getListItem('Agriculture Matters to the Future of next', '/blog/1', 'Kevin Martin', 1, '3 Sep, 2023', "3")} 
            </ul>
        </div>
    )
}