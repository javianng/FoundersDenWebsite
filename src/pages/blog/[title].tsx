// Import necessary modules from Next.js
import { useRouter } from 'next/router';
import { api } from '~/utils/api';

import Image from "next/image"

import ReadingWidthContainer from '~/components/common/ReadingWidthContainer';
import PageLayout from '~/components/common/PageLayout';

import question_mark from "public/question_mark.png"

import { EyeIcon } from '@heroicons/react/24/solid';
import { ShareIcon } from '@heroicons/react/24/solid';
import { Interweave } from 'interweave';

export default function BlogPost() {
    const router = useRouter();
    const { title } = router.query;

    const { data } = api.post.readByTitle.useQuery({
        title: title as string,
    });

    return (
        <PageLayout>
            <ReadingWidthContainer>
                <h1 className='font-bold text-5xl text-brand-400'>
                    {data?.title}
                </h1>

                <div className="w-full flex items-center py-9 justify-between">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-12 rounded mr-4">
                                <Image src={data?.authorimage ?? question_mark} alt={data?.author ?? ""} width={300} height={300} />
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
                <hr className='my-4 border-brand-500' />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <EyeIcon className='w-6 h-6 text-brand-200 ml-4 mr-2' />
                        <h4>
                            {data?.views}
                        </h4>
                    </div>
                    <div>
                        <ShareIcon className='w-6 h-6 text-brand-200 ml-4 mr-2' />
                    </div>
                </div>
                <hr className='my-4 border-brand-500' />

                <Image
                    src={data?.authorimage ?? question_mark}
                    width={1600} height={1600}
                    alt={data?.title ?? ""}
                />
                <div>
                    <Interweave
                        content={data?.content ?? ""}
                    />
                </div>
            </ReadingWidthContainer>
        </PageLayout>
    );
}
