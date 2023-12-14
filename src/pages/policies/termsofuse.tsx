import FixedWidthContainer from "~/components/common/FixedWidthContainer";
import PageLayout from "~/components/common/PageLayout";

export default function termsofuse() {
    return (
        <PageLayout>
            <main>
                <FixedWidthContainer>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-5xl pb-3">Terms of Use</h1>
                        <p>
                            Welcome to Founder's Den! These terms of use ("Terms") govern your use of our website, services, and related content. By accessing or using our services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                        </p>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms, and any future modifications. If at any point you do not agree to any part of these Terms, you must immediately stop using the website.
                        </p>
                        <h2>2. Use of Services</h2>
                        <p>
                            You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from engaging in any activity that disrupts or interferes with the functionality of the website.
                        </p>
                        <h2>3. User Accounts</h2>
                        <p>
                            To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities that occur under your account.
                        </p>
                        <h2>4. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, images, and software, is the property of Founder's Den and is protected by intellectual property laws. You may not use, reproduce, distribute, or create derivative works based on this content without explicit permission.
                        </p>
                        <h2>5. Privacy</h2>
                        <p>
                            Your use of our services is also governed by our Privacy Policy, which can be found [link to your privacy policy].
                        </p>
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            Founder's Den and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our services.
                        </p>
                        <h2>7. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                        </p>
                        <h2>8. Changes to Terms</h2>
                        <p>
                            Founder's Den reserves the right to modify or replace these Terms at any time. Any changes will be effective immediately upon posting on the website. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
                        </p>
                        <h2>9. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at [Your Contact Information].
                        </p>
                    </div>
                </FixedWidthContainer>
            </main>
        </PageLayout >
    );
};