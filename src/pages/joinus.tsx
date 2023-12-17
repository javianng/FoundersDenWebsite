import NoAppYet from "~/components/common/NoAppYet";
import PageLayout from "~/components/common/PageLayout";
import Roles from "~/components/joinus/Roles";
import Hero from "~/components/joinus/Hero";

export default function joinus() {
    return (
        <PageLayout>
            <main>
                <Hero />
                <Roles />
                <NoAppYet />
            </main>
        </PageLayout >
    );
};