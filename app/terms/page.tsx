import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - AiCounsyl from OptraHEALTH",
  description:
    "Read the Terms and Conditions for using AiCounsyl, the free medical report analysis app from OptraHEALTH. Learn about our services, medical disclaimer, and user responsibilities.",
  keywords: [
    "AiCounsyl terms",
    "OptraHEALTH terms of service",
    "medical app terms",
    "healthcare app legal",
    "ExpertConnect terms",
  ],
  openGraph: {
    title: "Terms & Conditions - AiCounsyl",
    description: "Terms and Conditions for using AiCounsyl healthcare application from OptraHEALTH",
    type: "website",
    url: "https://aicounsyl.com/terms",
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Terms & Conditions</h1>
            <p className="text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-8">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, accessing, or using AiCounsyl ("the App"), you agree to be bound by these Terms and
                Conditions. If you do not agree to these terms, please do not use the App. These terms constitute a
                legally binding agreement between you and OptraHEALTH ("we," "us," or "our").
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                AiCounsyl is a free healthcare application that provides:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Plain-language explanations of cardiac and pathology reports</li>
                <li>AI-powered analysis of medical test results</li>
                <li>ExpertConnect feature to connect with cardiologists and physicians</li>
                <li>Personalized health insights and contextual explanations</li>
                <li>Instant clinical guidance and educational resources</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The App is provided free of charge with no subscriptions, trials, or credit card requirements.
              </p>
            </section>

            {/* Section 3 - Medical Disclaimer */}
            <section className="space-y-4 bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground">3. Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                <strong className="text-foreground">IMPORTANT:</strong> AiCounsyl is NOT a substitute for professional
                medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Always seek the advice of your physician or other qualified health provider with any questions you may
                  have regarding a medical condition
                </li>
                <li>
                  Never disregard professional medical advice or delay seeking it because of information provided by the
                  App
                </li>
                <li>
                  If you think you may have a medical emergency, call your doctor or emergency services immediately
                </li>
                <li>
                  The App provides educational information only and does not provide medical diagnoses or treatment
                  recommendations
                </li>
                <li>
                  ExpertConnect consultations are for informational purposes and do not establish a doctor-patient
                  relationship
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">As a user of AiCounsyl, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information when using the App</li>
                <li>Use the App only for lawful purposes and in accordance with these Terms</li>
                <li>
                  Not upload or share any medical reports or information belonging to others without proper
                  authorization
                </li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not attempt to reverse engineer, decompile, or hack the App</li>
                <li>Not use the App to transmit any harmful, offensive, or illegal content</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take your privacy seriously and are committed to protecting your personal health information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>AiCounsyl is HIPAA-compliant and follows strict data protection standards</li>
                <li>Your medical reports and health data are encrypted and stored securely</li>
                <li>
                  We do not sell or share your personal health information with third parties for marketing purposes
                </li>
                <li>You retain ownership of all medical reports and data you upload to the App</li>
                <li>For detailed information, please review our Privacy Policy</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. ExpertConnect Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                The ExpertConnect feature allows you to connect with healthcare professionals:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Consultations are provided by licensed cardiologists and physicians</li>
                <li>ExpertConnect is for educational and informational purposes only</li>
                <li>Consultations do not establish a formal doctor-patient relationship</li>
                <li>Healthcare professionals provide general guidance based on the information you share</li>
                <li>For diagnosis, treatment, or prescriptions, you must consult with your personal physician</li>
                <li>
                  We are not responsible for the advice or recommendations provided by healthcare professionals through
                  ExpertConnect
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of AiCounsyl, including but not limited to text, graphics,
                logos, software, and AI algorithms, are owned by OptraHEALTH and are protected by international
                copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or
                create derivative works without our express written permission.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  OptraHEALTH shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages
                </li>
                <li>
                  We do not guarantee the accuracy, completeness, or reliability of any information provided by the App
                </li>
                <li>The App is provided "as is" without warranties of any kind, either express or implied</li>
                <li>We are not liable for any health outcomes resulting from your use or reliance on the App</li>
                <li>
                  Our total liability shall not exceed the amount you paid to use the App (which is zero, as the App is
                  free)
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide continuous service, we do not guarantee that the App will be available at all
                times. We reserve the right to modify, suspend, or discontinue any part of the App at any time without
                notice. We are not liable for any interruption or termination of service.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. We will notify users of any
                material changes by updating the "Last Updated" date at the top of this page and, where appropriate,
                through in-app notifications. Your continued use of the App after changes are posted constitutes your
                acceptance of the revised terms.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the
                jurisdiction in which OptraHEALTH operates, without regard to its conflict of law provisions. Any
                disputes arising from these terms shall be resolved in the courts of that jurisdiction.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 space-y-2">
                <p className="text-foreground font-medium">OptraHEALTH</p>
                <p className="text-muted-foreground">Email: legal@optrahealth.com</p>
                <p className="text-muted-foreground">Website: www.optrahealth.com</p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using AiCounsyl, you acknowledge that you have read, understood, and agree to be bound by these Terms
                and Conditions. You also acknowledge that you have read and understood our medical disclaimer and agree
                that the App is not a substitute for professional medical care.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
