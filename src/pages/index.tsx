import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";
import Rationale from "~/components/index/Rationale";
import Hero from "~/components/index/Hero";
import WhyUs from "~/components/index/WhyUs";
import NoAppYet from "~/components/common/NoAppYet";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <Hero />
                <NoAppYet />
                <Rationale />
                <WhyUs />
            </main>
        </PageLayout>
    );
};

export default Home;