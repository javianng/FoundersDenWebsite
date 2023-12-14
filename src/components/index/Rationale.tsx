import FixedWidthContainer from "../common/FixedWidthContainer";
import Image from "next/image"
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import indexRationaleFounder from "public/indexRationaleFounder.jpeg";
import indexRationaleTechnicalExperts from "public/indexRationaleTechnicalExperts.jpeg";

export default function Rationale() {
    return (
        <FixedWidthContainer innerclassname="lg:py-4">
            <h1 className="text-center text-3xl">
                Built By <span className="text-brand-500 ">Entrepreneurs</span> For <span className="text-brand-500">Entrepreneurs</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-lg capitalize">
                        For founders
                    </h2>
                    <Image
                        src={indexRationaleFounder}
                        alt={""}
                        className="card w-1/2 min-h-fit"
                        placeholder='blur'
                    />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Easily find like minded co-founders out of your circle
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Easily find like people with skillsets that complement yours
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Start your startup journey with just a swipe
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <XMarkIcon className="fill-red-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Say no to endless coffee chats with people who are not a good fit
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <XMarkIcon className="fill-red-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Stop wasting time on LinkedIn and other platforms
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-lg capitalize">
                        For technical experts
                    </h2>
                    <Image
                        src={indexRationaleTechnicalExperts}
                        alt={""}
                        className="card w-1/2 min-h-fit"
                        placeholder='blur'
                    />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Work on a meaningful project that would land an impact
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Cannot land an internship? Co-found a company!
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Say goodbye to searching for projects to work on during your holidays that everyone else have done before
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckIcon className="fill-green-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Put your theoretical skills from school to good use
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <XMarkIcon className="fill-red-500 h-5 w-5 mr-1" />
                        <p className="w-full">
                            Say no to building websites and apps just to showcase your tech stack
                        </p>
                    </div>
                </div>
            </div>
        </FixedWidthContainer >
    )
}