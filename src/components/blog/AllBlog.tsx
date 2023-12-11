import { api } from "~/utils/api";
import Image from "next/image";

import FixedWidthContainer from "../common/FixedWidthContainer";
import question_mark from "public/question_mark.png"

export default function AllBlog() {

    const { data } = api.post.getAll.useQuery();

    return (
        <FixedWidthContainer>
            {data?.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <Image src={post.image ?? question_mark} alt={""} width={300} height={300} />
                    <p>{post.content}</p>
                </div>
            )
            )}
        </FixedWidthContainer>
    )
}