import Link from "next/link";
import FixedWidthContainer from "../common/FixedWidthContainer";
import Image from "next/image"
import logoBackground from "public/logo/logobackground.svg"

export default function Hero() {
    return (
        <FixedWidthContainer outerclassname="bg-neutral-950">
            <div className="flex flex-row justify-between items-center font-medium">
                <h1 className="text-neutral-100">
                    Opportunities at Founder&apos;s Den
                </h1>
                <div className="w-fit flex">
                    <Link className="hover:bg-neutral-900 transition duration-150 py-2 px-4 rounded-lg" href={"/aboutus"}>
                        <h2 className="text-neutral-100 font-light text-base">
                            About Us
                        </h2>
                    </Link>
                    <Link className="hover:bg-neutral-900 transition duration-150 py-2 px-4 rounded-lg" href={"#rolesavailable"}>
                        <h2 className="text-neutral-100 font-light text-base">
                            Roles Available
                        </h2>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-28 gap-4">
                <Image src={logoBackground as string} alt={""} className="max-w-sm aspect-square -mb-12" />
                <Link className="hover:bg-neutral-900 transition duration-150 py-5 px-9 rounded-lg" href={"#rolesavailable"}>
                    <h1 className="font-bold text-7xl text-center capitalize text-neutral-50">
                        Join us
                    </h1>
                </Link>
                <h2 className="font-extralight text text-center capitalize mt-2 text-neutral-100 hover:underline underline-offset-2 cursor-default">
                    Let&apos;s Bring visionaries together
                </h2>
            </div>
        </FixedWidthContainer>
    )
}