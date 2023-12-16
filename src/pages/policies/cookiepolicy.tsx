import FixedWidthContainer from "~/components/common/FixedWidthContainer";
import PageLayout from "~/components/common/PageLayout";

export default function cookiepolicy() {
    return (
        <PageLayout>
            <main>
                <FixedWidthContainer>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-3">Cookie Policy</h1>
                        <p>
                            This Cookie Policy explains how Founder&apos;s Den (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies when you visit our website or use our services. By using our services, you consent to the use of cookies as described in this policy.
                        </p>
                        <h2>1. What are Cookies?</h2>
                        <p>
                            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owner.
                        </p>
                        <h2>2. Types of Cookies We Use</h2>
                        <p>
                            We use both session and persistent cookies to enhance your experience, analyze usage patterns, and improve our services. These cookies may be placed by us or by third-party services.
                        </p>
                        <h2>3. How We Use Cookies</h2>
                        <p>
                            We use cookies for various purposes, including but not limited to:
                        </p>
                        <ul>
                            <li>Authentication: To identify you when you visit our website and as you navigate our website.</li>
                            <li>Preferences: To remember your preferences and settings.</li>
                            <li>Analytics: To analyze how you use our website and track website performance.</li>
                        </ul>
                        <h2>4. Managing Cookies</h2>
                        <p>
                            You can control and manage cookies in various ways. Please refer to your browser settings to manage cookie preferences. However, disabling cookies may affect your ability to use certain features of our website.
                        </p>
                        <h2>5. Third-Party Cookies</h2>
                        <p>
                            Some third-party services we use may place their own cookies on your device. We have no control over these cookies. Please review the privacy policies of these third parties for more information.
                        </p>
                        <h2>6. Changes to this Cookie Policy</h2>
                        <p>
                            We reserve the right to modify this Cookie Policy at any time. Any changes will be effective immediately upon posting. Your continued use of our services after any such changes constitutes your acceptance of the new Cookie Policy.
                        </p>
                        <h2>7. Contact Information</h2>
                        <p>
                            If you have any questions about this Cookie Policy, please contact us at [Your Contact Information].
                        </p>
                    </div>
                </FixedWidthContainer>
            </main>
        </PageLayout>
    );
};