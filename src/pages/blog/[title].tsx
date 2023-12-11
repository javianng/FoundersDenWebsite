// Import necessary modules from Next.js
import { useRouter } from 'next/router';
import { api } from '~/utils/api';

import Image from "next/image"

import ReadingWidthContainer from '~/components/common/ReadingWidthContainer';
import PageLayout from '~/components/common/PageLayout';

import question_mark from "public/question_mark.png"

import { EyeIcon } from '@heroicons/react/24/solid';
import { ShareIcon } from '@heroicons/react/24/solid';

export default function BlogPost() {
    const router = useRouter();
    const { title } = router.query;

    const { data } = api.post.readByTitle.useQuery({
        title: title as string,
    });

    const markdown = `
    # h1 Heading 8-)
    ## h2 Heading
    ### h3 Heading
    #### h4 Heading
    ##### h5 Heading
    ###### h6 Heading
    
    
    ## Horizontal Rules
    
    ___
    
    ---
    
    ***
    
    
    ## Typographic replacements
    
    Enable typographer option to see result.
    
    (c) (C) (r) (R) (tm) (TM) (p) (P) +-
    
    test.. test... test..... test?..... test!....
    
    !!!!!! ???? ,,  -- ---
    
    "Smartypants, double quotes" and 'single quotes'
    
    
    ## Emphasis
    
    **This is bold text**
    
    __This is bold text__
    
    *This is italic text*
    
`

    return (
        <PageLayout>
            <ReadingWidthContainer>
                <h1 className=' font-bold text-5xl text-brand-400'>
                    {data?.title}
                </h1>

                <div className="w-full flex items-center py-9 justify-between">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-12 rounded mr-4">
                                <Image src={data?.authorimage ?? question_mark} alt={data?.author ?? ""} width={300} height={300} />
                            </div>
                        </div>
                        <h3>{data?.author}</h3>
                    </div>
                    <div className='flex'>
                        <h3>
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
                {/* <Markdown className="mt-8 text-lg">
                    {markdown}
                </Markdown> */}
            </ReadingWidthContainer>
        </PageLayout>
    );
}
