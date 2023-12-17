import PageLayout from "~/components/common/PageLayout";
import FixedWidthContainer from "~/components/common/FixedWidthContainer";
import AllBlog from "~/components/blog/AllBlog";
import TrendingBlog from "~/components/blog/TrendingBlog";
import Hero from "~/components/blog/Hero";

export default function blog() {
    return (
        <PageLayout>
            <Hero />
            <FixedWidthContainer>
                <TrendingBlog />
                <hr className="border-neutral-800" />
                <AllBlog />
            </FixedWidthContainer>
        </PageLayout >
    );
};