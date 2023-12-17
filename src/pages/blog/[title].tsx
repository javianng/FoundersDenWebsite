// Import necessary modules from Next.js
import { useRouter } from 'next/router';
import { api } from '~/utils/api';

import Image from "next/image"

import ReadingWidthContainer from '~/components/common/ReadingWidthContainer';
import PageLayout from '~/components/common/PageLayout';

import question_mark from "public/question_mark.svg"
import logo from "public/logo/defaultHighResolution.png"

import { EyeIcon } from '@heroicons/react/24/solid';
import { Interweave } from 'interweave';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share';
import { useState, useEffect } from 'react';

export default function BlogPost() {
    const router = useRouter();
    const { title } = router.query;

    const { data } = api.post.readByTitleWithIncrement.useQuery({
        title: title as string,
    });

    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    return (
        <PageLayout>
            <ReadingWidthContainer>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
                    {data?.title}
                </h1>
                <div className="w-full flex items-center py-7 justify-between">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-12 rounded mr-4">
                                <Image
                                    src={data?.authorimage ?? logo}
                                    alt={data?.author ?? ""}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <h3 className='text-base'>{data?.author}</h3>
                    </div>
                    <div className='flex'>
                        <h3 className='text-base'>
                            {data?.readingtime}
                            <span>{" min read"}</span>
                            <span className="px-2">{"·"}</span>
                            {data?.updatedAt.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                            }).toString()}
                        </h3>
                    </div>
                </div>
                <div className='gap-2 flex'>
                    {data?.tags?.map((tag) => (
                        <div key={tag.id} className='badge badge-neutral bg-neutral-700 text-neutral-100'>
                            {tag.tag}
                        </div>
                    ))}
                </div>
                <hr className='my-4 border-neutral-500' />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <EyeIcon className='w-6 h-6 text-neutral-950 ml-4 mr-2' />
                        <h4>
                            {data?.views}
                        </h4>
                    </div>
                    <div className='flex gap-2'>
                        <div className="tooltip" data-tip="Share to LinkedIn">
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>
                        <div className="tooltip" data-tip="Share to Facebook">
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                        </div>
                        <div className="tooltip" data-tip="Share to Reddit">
                            <RedditShareButton url={shareUrl} title={data?.title ?? ""} windowWidth={660} windowHeight={460}>
                                <RedditIcon size={32} round />
                            </RedditShareButton>
                        </div>
                        <div className="tooltip" data-tip="Share to X">
                            <TwitterShareButton url={shareUrl} title={data?.title ?? ""}>
                                <XIcon size={32} round />
                            </TwitterShareButton>
                        </div>
                        <div className="tooltip" data-tip="Share to WhatsApp">
                            <WhatsappShareButton url={shareUrl} title={data?.title ?? ""}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                        </div>
                        <div className="tooltip" data-tip="Share to Telegram">
                            <TelegramShareButton url={shareUrl} title={data?.title ?? ""}>
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>
                        </div>
                    </div>
                </div>
                <hr className='my-4 border-neutral-500' />
                <Image
                    src={data?.image ?? question_mark as string}
                    width={1600}
                    height={1600}
                    alt={data?.title ?? ""}
                />
                <div className='pt-6'>
                    <Interweave
                        content={data?.content ?? ""}
                    />
                </div>
            </ReadingWidthContainer>
        </PageLayout>
    )
}