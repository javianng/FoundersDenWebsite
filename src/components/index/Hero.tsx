import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex justify-center">
            <div className="w-screen max-w-7xl mx-12">
                <div className="max-w-7xl">
                    <div className="grid grid-rows-2 gird-cols-1 lg:grid-rows-1 lg:grid-cols-2 h-screen max-h-[42rem]">
                        <div className="hero group" style={{ backgroundImage: 'url(/indexHeroFounder.jpeg)' }}>
                            <div className="hero-overlay bg-opacity-70 group-hover:bg-opacity-90 transition duration-300"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <Link href={""}>
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold text-neutral-100">Want to be part of the <span className="text-brand-500">next big thing</span>?</h1>
                                        <p className="mb-5 text-neutral-100">Join Forces with Visionaries: Connect with Tech Talent to Ignite Your Startup Success!</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="hero group" style={{ backgroundImage: 'url(/indexHeroProjectFinder.jpeg)' }}>
                            <div className="hero-overlay bg-opacity-70 group-hover:bg-opacity-90 transition duration-300"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <Link href={""}>

                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold text-neutral-100"><span className="text-brand-500">Searching</span> for <span className="text-brand-500">skilled</span> partners?</h1>
                                        <p className="mb-5 text-neutral-100">Empower Your Vision: Find the Perfect Tech Collaborator for Your Startup Journey</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}