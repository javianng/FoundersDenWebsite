import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";
import Rationale from "~/components/index/Rationale";
import Hero from "~/components/index/Hero";
import WhyUs from "~/components/index/WhyUs";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <Hero />
                <Rationale />
                <WhyUs />
            </main>
        </PageLayout>
    );
};

export default Home;