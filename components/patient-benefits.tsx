import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const benefits = [
  "FREE heart test explanations",
  "FREE ExpertConnect with doctors",
  "Personalized insights for your heart health",
  "Contextual explanations tailored to you",
  "Decode heart patterns & rhythms",
  "Share reports with your doctor",
]

const stories = [
  {
    name: "Priya S.",
    age: 35,
    condition: "Atrial Fibrillation",
    quote: "ExpertConnect helped me understand my irregular heartbeat for FREE.",
    story:
      "When Priya's ECG showed atrial fibrillation, she was confused and scared. Using AiCounsyl's FREE ExpertConnect, a cardiologist explained her arrhythmia, anticoagulation therapy, and what to watch for — all at no cost.",
    image: "/professional-indian-woman-smiling.jpg",
  },
  {
    name: "Rohit M.",
    age: 42,
    condition: "Post-MI Recovery",
    quote: "Personalized insights helped me understand my recovery journey.",
    story:
      "After his myocardial infarction, Rohit used AiCounsyl's personalized insights to understand his cardiac biomarkers and recovery progress. The contextual explanations helped him stay informed about his heart health.",
    image: "/smiling-middle-aged-indian-man.jpg",
  },
  {
    name: "Asha K.",
    age: 58,
    condition: "Heart Failure Monitoring",
    quote: "My cardiologist saw my echo report before the visit — saved time and it's FREE.",
    story:
      "Managing heart failure became easier when Asha could share her echocardiogram and ejection fraction reports with her cardiologist before appointments using AiCounsyl's FREE platform.",
    image: "/senior-indian-woman-smiling.jpg",
  },
]

export function PatientBenefits() {
  return (
    <section id="patients" className="py-12 md:py-16 scroll-mt-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-lg mb-4">
            Always FREE • No Credit Card Required
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Cardiac reports explained in simple language — completely FREE
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Take control of your heart health with FREE explanations of ECG, echocardiogram, and cardiac biomarkers.
            Connect with cardiologists through ExpertConnect at no cost.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-base font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Patient Stories */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Real cardiac patients, real FREE support</h3>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={`${story.name} - Patient testimonial`}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <blockquote className="text-center">
                    <p className="text-lg font-medium italic text-foreground mb-2">"{story.quote}"</p>
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {story.age}-year-old with {story.condition}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Share your story →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
