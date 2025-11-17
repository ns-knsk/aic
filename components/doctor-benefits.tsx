import { Clock, Brain, Workflow, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    icon: Video,
    title: "ExpertConnect for Cardiologists",
    description:
      "Join our network of cardiac specialists. Provide consultations on heart test interpretations directly to patients.",
  },
  {
    icon: Clock,
    title: "Pre-visit cardiac summaries",
    description:
      "Review patient heart test history and cardiac biomarker results before appointments to maximize consultation efficiency.",
  },
  {
    icon: Brain,
    title: "Evidence-based cardiology support",
    description:
      "AI-powered clinical decision support with latest ACC/AHA guidelines, ESC recommendations, and cardiovascular research.",
  },
  {
    icon: Workflow,
    title: "Cardiology EMR integrations",
    description:
      "Seamless integration with cardiology information systems. FHIR/HL7 ready for existing cardiovascular care workflows.",
  },
]

const patientTestimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/professional-indian-woman-smiling.jpg",
    quote:
      "I was so confused about my heart test results. AiCounsyl explained everything in simple words. Now I understand what my doctor is saying!",
  },
  {
    name: "Rajesh Patel",
    location: "Delhi",
    image: "/smiling-middle-aged-indian-man.jpg",
    quote:
      "The ExpertConnect feature is amazing. I got to talk to a real doctor about my blood test results for free. Very helpful!",
  },
  {
    name: "Meera Iyer",
    location: "Bangalore",
    image: "/senior-indian-woman-smiling.jpg",
    quote:
      "My daughter downloaded this app for me. It's so easy to use and helps me understand my reports before visiting the doctor.",
  },
]

export function DoctorBenefits() {
  return (
    <section id="doctors" className="py-12 md:py-16 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Empowering patients with ExpertConnect</h2>
          {/* </CHANGE> */}
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Join our network of medical specialists. Provide expert consultations, improve patient outcomes, and enhance
            healthcare delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
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

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Real patients, real Feedback</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {patientTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} - Patient testimonial`}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <blockquote className="text-sm italic text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
