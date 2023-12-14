export default function Hero() {
    return (
        <div className="hero max-h-screen min-h-[40em] h-[60vh] shadow-lg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="bg-slate-100 px-32 py-6">
                    <h1 className="mb-5 text-5xl font-bold text-brand-500 uppercase">
                        Founder&apos;s Blog
                    </h1>
                    <p className="font-medium">Empowering Entrepreneurs: Where Visionaries Find Wisdom, Fueling Success One Insight at a Time.</p>
                </div>
            </div>
        </div >
    )
}