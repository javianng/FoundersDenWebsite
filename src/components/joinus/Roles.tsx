import { SocialIcon } from "react-social-icons";
import FixedWidthContainer from "../common/FixedWidthContainer";

export default function Roles() {
    return (
        <FixedWidthContainer outerclassname="py-8">
            <div className="flex flex-col gap-3">
                <h1 id="rolesavailable" className="text-3xl">
                    Roles Available
                </h1>
                <p>
                    Currently, we are seeking co-founders, people who believe in our vision and wants to be a part of it. We welcome people of all background and expertise. Do reach out to the founder if you are interested!
                </p>
                <div className="grid grid-flow-row justify-start gap-2 pt-4">
                    <div className="flex flex-row gap-1 items-center group">
                        <SocialIcon url="https://www.linkedin.com/in/javianngzh/" style={{ height: 35, width: 35 }} />
                        <h3 className="font-light group-hover:bg-neutral-200 p-2 rounded duration-150">
                            LinkedIn
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
        </FixedWidthContainer>
    )
}