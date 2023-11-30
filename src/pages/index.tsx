import { type NextPage } from "next";

import PageLayout from "~/components/common/PageLayout";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <main>
                <h1 className="text-4xl font-bold text-center text-brand-500 h-screen">
                    Welcome to Project Geek
                </h1>
            </main>
        </PageLayout>
    );
};

export default Home;