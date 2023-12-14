import PageLayout from "~/components/common/PageLayout";
import Hero from "~/components/aboutus/Hero";
import OurStory from "~/components/aboutus/OurStory";
import AboutTheFounder from "~/components/aboutus/AboutTheFounder";

export default function aboutus() {
    return (
        <PageLayout>
            <main>
                <Hero />
                <OurStory />
                <AboutTheFounder />
            </main>
        </PageLayout>
    );
};