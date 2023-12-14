import { api } from "~/utils/api";
import Image from "next/image";
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'

import FixedWidthContainer from "../common/FixedWidthContainer";
import question_mark from "public/question_mark.png"
import Link from "next/link";

export default function TrendingBlog() {

    const { data } = api.post.getTrending.useQuery();

    return (
        <FixedWidthContainer>

            {/* title section */}

            <div className="flex items-center pb-4">
                <ArrowTrendingUpIcon className="w-6 h-6 mr-3" />
                <h1 className="font-semibold">Trending on Founder&apos;s Blog</h1>
            </div>

            {/* data section */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {data?.map((post, counter = 0) => (
                    <div key={post.id}>
                        <Link href={`/blog/${encodeURIComponent(post.title)}`}>
                            <div className="flex flex-row">
                                <h1 className="mr-5 font-bold text-brand-50 text-3xl">0{counter + 1}</h1>
                                <div className="flex flex-col">
                                    <div className="flex items-center pt-1.5">
                                        <div className="avatar">
                                            <div className="w-5 rounded mr-2">
                                                <Image
                                                    src={post.authorimage ?? question_mark}
                                                    alt={post.author}
                                                    width={300}
                                                    height={300}
                                                />
                                            </div>
                                        </div>
                                        <h3>{post.author}</h3>
                                    </div>
                                    <h2 className="font-extrabold capitalize line-clamp-2 my-2 text-base">{post.title}</h2>
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
                                </div>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </div>
        </FixedWidthContainer>
    )
}