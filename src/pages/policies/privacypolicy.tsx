import FixedWidthContainer from "~/components/common/FixedWidthContainer";
import PageLayout from "~/components/common/PageLayout";

export default function privacypolicy() {
    return (
        <PageLayout>
            <main>
                <FixedWidthContainer>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-3">Privacy Policy</h1>
                        <p>
                            This Privacy Policy describes how Founder&apos;s Den (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your personal information when you visit our website or use our services. By accessing or using our services, you agree to the terms of this Privacy Policy.
                        </p>
                        <h2>1. Information We Collect</h2>
                        <p>
                            We may collect personal information that you provide directly to us, such as your name, email address, and any other information you choose to provide when using our services.
                        </p>
                        <h2>2. How We Use Your Information</h2>
                        <p>
                            We may use the information we collect for various purposes, including but not limited to providing and improving our services, communicating with you, and personalizing your experience.
                        </p>
                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as set forth in this Privacy Policy or as required by law.
                        </p>
                        <h2>4. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience and analyze how our services are used. You can control cookies through your browser settings.
                        </p>
                        <h2>5. Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information; however, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
                        </p>
                        <h2>6. Your Choices</h2>
                        <p>
                            You have the right to access, correct, or delete your personal information. You may also opt-out of receiving certain communications from us. Please contact us at [Your Contact Information] for assistance.
                        </p>
                        <h2>7. Changes to this Privacy Policy</h2>
                        <p>
                            We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting. Your continued use of our services after any such changes constitutes your acceptance of the new Privacy Policy.
                        </p>
                        <h2>8. Contact Information</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
                        </p>
                    </div>
                </FixedWidthContainer>
            </main>
        </PageLayout>
    );
};