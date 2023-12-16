import FixedWidthContainer from "../common/FixedWidthContainer";

export default function WhyUs() {
    return (
        <FixedWidthContainer>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Why Founder&apos;s Den?</h1>
                        <p className="py-6">Founder&apos;s Den revolutionizes the entrepreneurial landscape. We empower visionaries to connect with technical experts, flipping traditional startup norms. By prioritizing collaboration, kindness, and respect, we create a secure online haven for founders to forge partnerships, turning dreams into thriving ventures.</p>
                        <button className="btn bg-neutral-300 hover:bg-neutral-400">
                            Learn More
                        </button>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                        <form className="card-body">
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-neutral-800 shadow-md">Hi! 👋 Passionate about sustainable energy innovation. Interested in collaborating?</div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-bubble bg-neutral-300 text-neutral-950 shadow-md">Hello! 🚀 Intriguing! Tell me more about your project goals.</div>
                            </div>
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-neutral-800 shadow-md">Eco-friendly tech solutions. Up for the challenge?</div>
                            </div>
                            <div className="chat chat-end">
                                <div className="chat-bubble bg-neutral-300 text-neutral-950 shadow-md">Impressive! Let&apos;s chat tomorrow at 2 PM to explore specifics.</div>
                            </div>
                            <div className="chat chat-start">
                                <div className="chat-bubble bg-neutral-800 shadow-md">Fantastic! 📞 Excited for our collaboration!</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </FixedWidthContainer>
    )
}