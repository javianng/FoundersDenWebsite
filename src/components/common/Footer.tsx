import Link from "next/link";
import FixedWidthContainer from "./FixedWidthContainer";

export default function Footer() {
    return (
        <FixedWidthContainer outerclassname="bg-neutral-300">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <footer className="footer pt-10 pb-8 text-base-content">
                        <nav>
                            <header className="footer-title">Company</header>
                            <Link className="link link-hover" href="/aboutus">About Us</Link>
                            {/* <Link className="link link-hover" href={""}>Contact</Link> */}
                            <Link className="link link-hover" href={"/joinus"}>Jobs</Link>
                        </nav>
                        <nav>
                            <header className="footer-title">Legal</header>
                            <Link className="link link-hover" href={"/policies/termsofuse"}>Terms of use</Link>
                            <Link className="link link-hover" href={"/policies/privacypolicy"}>Privacy policy</Link>
                            <Link className="link link-hover" href={"/policies/cookiepolicy"}>Cookie policy</Link>
                        </nav>
                        <form>
                            <header className="footer-title">Newsletter</header>
                            <fieldset className="form-control min-w-80">
                                <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                    <button className="btn bg-neutral-700 hover:bg-neutral-800 join-item text-neutral-50">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </footer>
                </div>
                <h1 className="text-sm text-center py-6">
                    © 2023 Founder&apos;s Den | All Rights Reserved
                </h1>
            </div>
        </FixedWidthContainer>
    )
}