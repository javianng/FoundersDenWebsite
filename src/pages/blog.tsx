import PageLayout from "~/components/common/PageLayout";
import AllBlog from "~/components/blog/AllBlog";
import TrendingBlog from "~/components/blog/TrendingBlog";
import FixedWidthContainer from "~/components/common/FixedWidthContainer";

export default function blog() {
    return (
        <PageLayout>
            <FixedWidthContainer>
                <h1 className="text-4xl font-bold text-center text-brand-500">
                    Blog
                </h1>
                <TrendingBlog />
                <AllBlog />
            </FixedWidthContainer>
        </PageLayout >
    );
};