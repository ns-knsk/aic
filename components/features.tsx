import { Shield, Zap, Video, FileText, Heart, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Heart,
    title: "Cardiac & Pathology Report Understanding",
    description:
      "Upload heart tests, cardiac reports, or pathology reports. Get instant explanations of heart rhythms, heart function, valve health, and lab biomarkers.",
  },
  {
    icon: Activity,
    title: "Personalized Health Insights",
    description:
      "Get contextual explanations tailored to your specific cardiac and lab results. Understand what your biomarkers, cholesterol, and heart enzyme levels mean for you personally.",
  },
  {
    icon: Zap,
    title: "Instant Clinical Guidance",
    description:
      "AI-powered summaries of your cardiovascular reports with actionable next steps for better heart health.",
  },
  {
    icon: Video,
    title: "ExpertConnect — Consult Cardiologists & Physicians",
    description:
      "Connect instantly with board-certified cardiologists and physicians. Get expert advice on your heart tests or lab results. Health expert consultations are free.",
  },
  {
    icon: FileText,
    title: "All Reports in One Place",
    description:
      "Import PDF, images, and structured data. Store your cardiac history, pathology reports, and imaging studies securely.",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant Security",
    description: "Encrypted patient data with HIPAA-compliant storage. Your cardiovascular health data stays private.",
  },
]

export function Features() {
  return (
    <section id="patients" className="py-12 md:py-16 bg-primary/5 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Complete heart health care in your pocket
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            From heart test interpretation to expert consultations with cardiologists and physicians — available at no
            cost
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
