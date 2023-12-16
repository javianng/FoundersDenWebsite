import FixedWidthContainer from "./FixedWidthContainer";
import telegram from "public/telegram.svg"
import Image from "next/image"
import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export default function NoAppYet() {
    return (
        <FixedWidthContainer>
            <div className="hero min-h-fit">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">We are still building
                            <span className=" flex-wrap">
                                &nbsp;the platform!
                            </span>
                        </h1>
                        <p className="py-6">Do subscribe to our telegram channel to be updated with entrepreneur tips and tricks! We are building a community of like-minded individual keen to challenge the status quo and come up with innovative solutions to everyday problems!</p>
                        <div className="flex flex-col gap-2 w-full items-center lg:items-start">
                            <Link href={"https://t.me/+uhknn2UMrL5lYTQ9"} className="btn w-fit bg-neutral-300 hover:bg-neutral-400">
                                <div className="flex flex-row items-center">
                                    <Image src={telegram as string} alt={""} className="h-5 w-5 mr-2" />
                                    Join the Channel!
                                </div>
                            </Link>
                            <Link href={"/blog"} className="btn w-fit bg-neutral-300 hover:bg-neutral-400">
                                <div className="flex flex-row items-center">
                                    <BookOpenIcon className="h-5 w-5 mr-2 fill-neutral-950" />
                                    Check out the Blogs!
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm p-4 neutral">
                        <div className="mockup-phone">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1">
                                    <span className="loading loading-ring loading-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FixedWidthContainer >
    )
}