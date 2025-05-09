import { api } from "~/utils/api";
import Image from "next/image";

import FixedWidthContainer from "../common/FixedWidthContainer";
import question_mark from "public/question_mark.svg"
import logo from "public/logo/defaultHighResolution.png"
import Link from "next/link";

export default function AllBlog() {

    const { data } = api.post.getAll.useQuery();

    return (
        <FixedWidthContainer>
            <div className="grid grid-cols-1 gap-8">
                {data?.map((post) => (
                    <div className="flex h-56 hover:bg-neutral-200 p-2 rounded transition duration-300" key={post.id}>
                        <div className="w-[55vw] ">
                            <div className="flex flex-row items-center pt-1.5">
                                <div className="avatar">
                                    <div className="w-5 rounded mr-2">
                                        <Image
                                            src={post.authorimage ?? logo}
                                            alt={post.author}
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                </div>
                                <h3>{post.author}</h3>
                            </div>
                            <Link href={`/blog/${encodeURIComponent(post.title)}`}>
                                <h2 className="font-extrabold capitalize line-clamp-2 my-2 text-xl sm:text-2xl">{post.title}</h2>
                                <p className="line-clamp-3 mb-2">{post.summary}</p>
                                <div className="flex flex-col">
                                    <h4 className="font-extralight">
                                        {post.updatedAt.toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                        }).toString()}
                                        <span className="px-2">
                                            {"·"}
                                        </span>
                                        {post.readingtime}
                                        <span>
                                            {" min read"}
                                        </span>
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <Image
                            src={post.image ?? question_mark as string}
                            alt={post.title}
                            width={1600} height={1600}
                            className="object-cover w-[45vw] ml-0 lg:ml-8 card"
                        />
                    </div>
                )
                )}
            </div>
        </FixedWidthContainer>
    )
}