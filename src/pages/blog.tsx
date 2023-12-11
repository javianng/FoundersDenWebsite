import PageLayout from "~/components/common/PageLayout";
import BlogPage from "~/components/blog/blogPage";
import FixedWidthContainer from "~/components/common/FixedWidthContainer";

export default function blog() {
    return (
        <PageLayout>
            <FixedWidthContainer>
                <h1 className="text-4xl font-bold text-center text-brand-500">
                    Blog
                </h1>
                <BlogPage />
            </FixedWidthContainer>
        </PageLayout >
    );
};