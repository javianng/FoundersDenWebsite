import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full flex bg-neutral-700 flex-row justify-center">
            <div className="navbar max-w-7xl ">
                <div className="navbar-start">
                    <div className="dropdown opacity-90 z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="#f5f5f5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-neutral-800">
                            <li className="text-neutral-50 font-light"><Link href="/">Home</Link></li>
                            <li className="text-neutral-50 font-light"><Link href="/aboutus">About Us</Link></li>
                            <li className="text-neutral-50 font-light"><Link href="/blog">Blog</Link></li>
                            <li className="text-neutral-50 font-light"><Link href="/joinus">Join Us</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl text-neutral-50">Founder&apos;s Den </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-neutral-50 font-light"><Link href="/">Home</Link></li>
                        <li className="text-neutral-50 font-light"><Link href="/aboutus">About Us</Link></li>
                        <li className="text-neutral-50 font-light"><Link href="/blog">Blog</Link></li>
                        <li className="text-neutral-50 font-light"><Link href="/joinus">Join Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}