import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";
import Features from "~/components/index/Features";
import Hero from "~/components/index/Hero";
import WhyUs from "~/components/index/WhyUs";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <Hero />
                <Features />
                <WhyUs />
            </main>
        </PageLayout>
    );
};

export default Home;