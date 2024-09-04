export default function ContactUs() {
    return (
        <div className="flex gap-[133px] justify-center py-[100px]">
            <div className="flex flex-col gap-[50px]">
                <hgroup>
                    <span className="uppercase">CONTACT NOW</span>
                    <h2 className="uppercase">GET IN TOUCH NOW</h2>
                    <p className="w-[643px]">Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta,quam ut finibus ultrices.</p>
                </hgroup>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-[7px]">
                        <span className="uppercase text-sm">phone</span>
                        <div className="flex flex-col gap-[10px] font-medium text-xl">
                            <small>+880123456789</small>
                            <small>+880987654321</small>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[7px]">
                        <span className="uppercase text-sm">email</span>
                        <div className="flex flex-col gap-[10px] font-medium text-xl">
                            <small>needhelp@company.com</small>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[7px]">
                        <span className="uppercase text-sm">address</span>
                        <div className="flex flex-col gap-[10px] font-medium text-xl">
                            <small>Road No. 8, Niketan, Dhaka, Bangladesh</small>
                        </div>
                    </div>
                </div>
            </div>
            <form action="" className="flex flex-col gap-[30px] w-[494px] text-[16px]">
                <input type="text" name="name" id="name" placeholder="Your Name" className="max-w-[664px] rounded-[10px] px-[22px] py-[25px] bg-[#263C28]"/>
                <input type="tel" name="tel" id="tel" placeholder="Phone Number" className="max-w-[664px] rounded-[10px] px-[22px] py-[25px] bg-[#263C28]"/>
                <input type="email" name="email" id="email" placeholder="Your Email" className="max-w-[664px] rounded-[10px] px-[22px] py-[25px] bg-[#263C28]"/>
                <textarea name="msg" id="msg" placeholder="Your Message" className="max-w-[664px] rounded-[10px] px-[22px] py-[25px] bg-[#263C28] resize-none"></textarea>
                <button type="submit" className="w-fit uppercase rounded-[20px] px-[50px] py-[25px] text-black bg-[#F7C35F]">Send message</button>
            </form>
        </div>
    )
}