import { SocialIcon } from "react-social-icons";
import FixedWidthContainer from "../common/FixedWidthContainer";
import { Bars3Icon, AdjustmentsHorizontalIcon, CheckBadgeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import javian from "public/javian.jpg"
import Image from "next/image"

export default function AboutTheFounder() {
    return (
        <FixedWidthContainer>
            <div className="flex flex-row justify-center items-center underline underline-offset-4">
                <UserCircleIcon className="w-10 h-10 mr-2" />
                <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold capitalize">
                    About the founder
                </h1>
            </div>
            <FixedWidthContainer>
                <div className="flex flex-col lg:flex-row pt-4 gap-10 items-center">
                    <div className="mockup-phone min-w-fit">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard phone-1 bg-neutral-50 pt-7 px-3">
                                <div className="h-fit flex flex-row items-center justify-between pb-2">
                                    <Bars3Icon className="h-7" />
                                    <h1 className="lowercase text-sm font-thin">
                                        Founder&apos;s Den
                                    </h1>
                                    <AdjustmentsHorizontalIcon className="h-7" />
                                </div>
                                <div className="flex flex-col h-full pb-20 overflow-scroll">
                                    <div role="alert" className="alert alert-warning mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <span className="text-sm font-light">This is a concept and not the actual solution!</span>
                                    </div>
                                    <div className="avatar h-full">
                                        <div className="rounded-xl shadow h-full">
                                            <Image src={javian} alt={"me"} placeholder='blur' className="h-full" />
                                            <div className="absolute top-3 left-3">
                                                <div>
                                                    <CheckBadgeIcon className="h-7 fill-neutral-600" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 left-3">
                                                <div>
                                                    <h2 className="text-neutral-50 font-semibold">
                                                        Javian Ng
                                                    </h2>
                                                </div>
                                                <p className="text-neutral-50 text-xs">
                                                    Founder / Software Engineer
                                                </p>
                                                <p className="text-neutral-50 text-xs">
                                                    Singapore
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row h-fit items-center pt-3">
                                        <h2 className="font-light text-sm pr-2 whitespace-nowrap">Looking for:</h2>
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            <div className="badge border-black bg-neutral-100 font-light text-xs whitespace-nowrap">Co-Founder</div>
                                            <div className="badge border-black bg-neutral-100 font-light text-xs whitespace-nowrap">Game Developer</div>
                                            <div className="badge border-black bg-neutral-100 font-light text-xs whitespace-nowrap">Graphics Designer</div>
                                        </div>
                                    </div>
                                    <hr className="mt-3" />
                                    <div className="flex flex-row h-fit items-center pt-3">
                                        <h2 className="font-light text-sm pr-2 whitespace-nowrap">My Interests:</h2>
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            <div className="badge border-black bg-neutral-100 font-light text-xs">Golf</div>
                                            <div className="badge border-black bg-neutral-100 font-light text-xs">Fintech</div>
                                            <div className="badge border-black bg-neutral-100 font-light text-xs">Enterpreneurship</div>
                                        </div>
                                    </div>
                                    <hr className="mt-3" />
                                    <div className="h-fit">
                                        <h3 className="font-normal text-sm pt-3">
                                            Introduction:
                                        </h3>
                                        <p className="font-light text-sm pt-1">
                                            I am also working on a gamified solution that seeks to combat doom scrolling. As I do not have the technical expertise to build the game, I am looking for a game developer to join me as a co-founder. Knowledge in graphics designing would be an added advantage otherwise we would welcome a graphics designer on board.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-normal">
                            Hello! I am Javian, the founder behind Founder&apos;s Den. I founded Founder&apos;s Den with a mission to empower entrepreneurs by connecting them with the technical expertise vital for startup success. Over the years, I&apos;ve gained valuable experience in the business analytics and technology field, earning recognition for my dynamic approach and unwavering commitment to innovation. My passion for coding and entrepreneurship fuels my dedication to fostering a collaborative ecosystem for startup growth. I firmly believe in the power of meaningful connections, and I&apos;m excited to lead Founder&apos;s Den in becoming the go-to platform for visionary founders seeking the perfect technical match for their startups.
                        </p>
                        <div className="pl-4 border-l-2 border-neutral-400">
                            <h2 className="capitalize">
                                Connect with me
                            </h2>
                            <div className="grid grid-flow-row justify-start gap-2 pt-4">
                                <div className="flex flex-row gap-1 items-center group">
                                    <SocialIcon url="https://www.linkedin.com/in/javianngzh/" style={{ height: 35, width: 35 }} />
                                    <h3 className="font-light group-hover:bg-neutral-200 p-2 rounded duration-150">
                                        LinkedIn
                                    </h3>
                                </div>
                                <div className="flex flex-row gap-1 items-center group">
                                    <SocialIcon url="https://x.com/j_avianzz" style={{ height: 35, width: 35 }} />
                                    <h3 className="font-light group-hover:bg-neutral-200 p-2 rounded duration-150">
                                        X
                                    </h3>
                                </div>
                                <div className="flex flex-row gap-1 items-center group">
                                    <SocialIcon url="https://github.com/javianng" style={{ height: 35, width: 35 }} />
                                    <h3 className="font-light group-hover:bg-neutral-200 p-2 rounded duration-150">
                                        GitHub
                                    </h3>
                                </div>
                                <div className="flex flex-row gap-1 items-center group">
                                    <SocialIcon url="mailto:javian.ng.z.h@gmail.com" style={{ height: 35, width: 35 }} />
                                    <h3 className="font-light group-hover:bg-neutral-200 p-2 rounded duration-150">
                                        Mail
                                    </h3>
                                </div>
                                <div className="flex flex-row gap-1 items-center group">
                                    <SocialIcon url="https://rebrand.ly/javianngportfolio" style={{ height: 35, width: 35 }} />
                                    <h3 className="font-light group-hover:bg-neutral-200 p-2 rounded duration-150">
                                        My Website
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FixedWidthContainer>
        </FixedWidthContainer >
    )
}