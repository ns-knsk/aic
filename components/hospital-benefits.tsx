import { Database, BarChart3, Shield, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: Database,
    title: "Seamless Interoperability",
    description: "FHIR/HL7 compliant with existing EMR systems. API, SFTP, and direct integrations available.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards for patient outcomes, readmission rates, and operational efficiency.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "HIPAA compliant with SSO support (SAML/OAuth2), role-based access, and audit trails.",
  },
  {
    icon: Cloud,
    title: "Flexible Deployment",
    description: "Cloud-hosted or on-premise options with data residency compliance for your region.",
  },
]

const techSpecs = [
  "API Integration (REST/GraphQL)",
  "FHIR R4 Compliant",
  "HL7 v2.x Support",
  "SFTP Data Exchange",
  "SSO (SAML 2.0, OAuth2)",
  "Data Residency Options",
  "SOC 2 Type II Certified",
  "HIPAA Compliant",
]

export function HospitalBenefits() {
  return (
    <section id="hospitals" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Enterprise solutions for health systems</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Reduce readmissions, improve patient engagement, and achieve measurable ROI with our enterprise-grade
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Tech Specs */}
        <Card className="max-w-4xl mx-auto border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Technical Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {techSpecs.map((spec, index) => (
                <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="#contact">Request Enterprise Demo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
