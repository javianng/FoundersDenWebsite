import Image from "next/image"
import aboutUs from "public/aboutUs.jpeg"
import FixedWidthContainer from "../common/FixedWidthContainer"

export default function Hero() {
    return (
        <FixedWidthContainer>
            <div className="py-2 lg:py-10 flex flex-col lg:flex-row items-center gap-4">
                <h1 className=" text-5xl font-semibold w-full lg:w-[66%] text-brand-400">
                    We&apos;re your launchpad for startup success – where <span className="text-brand-500"> connections spark innovation </span>, and your game-changing move is just <span className=" text-brand-500">a swipe away</span>!
                </h1>
                <div className="w-full lg:w-[33%]">
                    <Image src={aboutUs} alt={""} className="card" placeholder='blur' />
                </div>
            </div>
        </FixedWidthContainer>
    )
}