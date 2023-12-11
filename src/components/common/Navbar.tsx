import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 justify-center">
                <div className="w-screen max-w-7xl">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Founder&apos;s Den</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/aboutus">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}