import { api } from "~/utils/api";
import FixedWidthContainer from "../common/FixedWidthContainer";

export default function BlogPage() {

    const { data } = api.post.getAll.useQuery();

    return (
        <FixedWidthContainer>
            {data?.map((post) => (
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    {/* <Image>

                    </Image> */}
                    <p>{post.content}</p>
                </div>
            )
            )}
        </FixedWidthContainer>

    )
}