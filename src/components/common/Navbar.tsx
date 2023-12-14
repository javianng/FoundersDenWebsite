import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full flex bg-base-100 flex-row justify-center">
            <div className="navbar max-w-7xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutus">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/joinus">Join Us</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Founder&apos;s Den</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/aboutus">About Us</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/joinus">Join Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}