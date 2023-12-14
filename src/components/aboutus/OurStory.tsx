import FixedWidthContainer from "../common/FixedWidthContainer";
import Image from "next/image"
import missionImage from "public/aboutUsMission.jpeg"
import visionImage from "public/aboutUsVision.jpeg"

export default function OurStory() {
    return (
        <FixedWidthContainer>
            <div className="card bg-neutral-100">
                <FixedWidthContainer>
                    <div className="flex flex-col gap-3 w-full chat-start chat">
                        <div className="chat-bubble bg-brand-500 flex flex-col gap-4 p-8 shadow-lg">
                            <h2 className="text-3xl font-bold capitalize text-neutral-50 underline underline-offset-4">
                                About founder&apos;s den
                            </h2>
                        </div>
                        <div className="chat-bubble bg-brand-500 flex flex-col gap-4 p-8 shadow-lg">
                            <p className="text-neutral-50">
                                Our platform is dedicated to enhancing the entrepreneurial journey by connecting startup founders with the technical expertise they need. We believe that meaningful collaborations are at the heart of innovation and growth. We&apos;re here to empower founders, whether you&apos;re seeking a technical co-founder, a skilled developer, or a technology-savvy partner. Your first connection on our platform could be the catalyst for transforming your startup aspirations into reality.
                            </p>
                        </div>
                    </div>
                </FixedWidthContainer>
                <FixedWidthContainer>
                    <div className="flex flex-row gap-7 items-center">
                        <div className="flex flex-col gap-3 w-full lg:w-[66%] chat-start chat">
                            <div className="chat-bubble bg-brand-500 flex flex-col gap-4 p-8 shadow-lg">
                                <h2 className="text-3xl font-bold capitalize text-neutral-50 underline underline-offset-4">
                                    Our vision
                                </h2>
                            </div>
                            <div className="chat-bubble bg-brand-500 flex flex-col gap-4 p-8 shadow-lg">
                                <p className="text-neutral-50">
                                    We envision Founder&apos;s Den as the heartbeat of entrepreneurial synergy, where every startup founder finds the perfect match in technical brilliance. Our vision is to be the catalyst for a global community of thriving startups, each empowered by the right partnerships, enabling them to redefine industries and leave an indelible mark on the world.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:w-[33%]">
                            <Image src={visionImage} alt={""} className="card" placeholder='blur' />
                        </div>
                    </div>
                </FixedWidthContainer>
                <FixedWidthContainer>
                    <div className="flex flex-row gap-7 items-center">
                        <div className="hidden lg:flex lg:w-[33%]">
                            <Image src={missionImage} alt={""} className="card" placeholder='blur' />
                        </div>
                        <div className="flex flex-col gap-3 w-full lg:w-[66%] chat-end chat">
                            <div className="chat-bubble bg-brand-600 flex flex-col gap-4 p-8 shadow-lg">
                                <h2 className="text-3xl font-bold capitalize text-neutral-50 underline underline-offset-4">
                                    Our mission
                                </h2>
                            </div>
                            <div className="chat-bubble bg-brand-600 flex flex-col gap-4 p-8 shadow-lg">
                                <p className="text-neutral-50">
                                    At Founder&apos;s Den, our mission is to empower visionary entrepreneurs by providing a dynamic platform that seamlessly connects startup founders with the technical expertise crucial for success. We strive to foster a collaborative ecosystem where innovative ideas thrive, fueling the next wave of groundbreaking ventures.
                                </p>
                            </div>
                        </div>
                    </div>
                </FixedWidthContainer>
            </div>
        </FixedWidthContainer>
    )
}