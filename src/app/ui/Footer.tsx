import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col divide-y divide-white/20">
            <div className="flex justify-between pt-[90px] pb-[130px] px-[94px] gap-[271px]">
                <div className="flex flex-col gap-[34px] divide-y divide-white/20">
                    <div className="flex flex-col gap-[25px] pb-[34px]">
                        <Image src="/images/logo.svg" width={198} height={31} alt="" />
                        <p className="w-[514px] text-[16px]">Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta,quam ut finibus ultrices.</p>
                    </div>
                    <div className="flex gap-[30px] pt-[34px]">
                        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/social_icons/facebook.svg" width={24} height={24} alt="" />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/social_icons/twitter.svg" width={24} height={24} alt="" />
                        </Link>
                        <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/social_icons/youtube.svg" width={24} height={24} alt="" />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/social_icons/instagram.svg" width={24} height={24} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-[100px]">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-[22px] font-semibold">Useful Links</h3>
                        <div className="flex flex-col gap-[20px] font-century-gothic">
                            <Link href="" target="_blank" rel="noopener noreferrer" className="text-[15px]">New Project</Link>
                            <Link href="" target="_blank" rel="noopener noreferrer" className="text-[15px]">Our Services</Link>
                            <Link href="" target="_blank" rel="noopener noreferrer" className="text-[15px]">Testimonials</Link>
                            <Link href="" target="_blank" rel="noopener noreferrer" className="text-[15px]">About Us</Link>
                            <Link href="" target="_blank" rel="noopener noreferrer" className="text-[15px]">Contact us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-[22px]">Newsletter</h3>
                            <p className="w-[315px] text-[16px]">Subscribe to our weekly Newsletter and receive updates via email.</p>
                        </div>
                        <form className="relative">
                            <input type="email" name="" id="" placeholder="Enter your mail here..." className="w-[315px] h-[55px] rounded-[50px] bg-[#263C28] pl-[20px] py-[19px] pr-[65px]"/>
                            <button type="submit" className="absolute top-[5px] right-[5px] w-[45px] h-[45px] rounded-full bg-[#F7C35F] text-black">GO</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-[50px] px-[94px]">
                <span className="text-[15px]">Copyright ©Smart Agro. All Right Reserved.</span>
                <div className="flex gap-[25px]">
                    <Link href="" className="font-century-gothic text-[15px]">Terms & Conditions</Link>
                    <Link href="" className="font-century-gothic text-[15px]">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}