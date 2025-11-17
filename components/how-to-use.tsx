import { Upload, FileText, CheckCircle, Users } from "lucide-react"

export function HowToUse() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Report",
      description: "Simply upload your cardiac or pathology report in any format",
    },
    {
      icon: FileText,
      title: "AI Analysis",
      description: "AiCounsyl instantly analyzes your medical report using advanced AI",
    },
    {
      icon: CheckCircle,
      title: "Get Clear Explanations",
      description: "Receive easy-to-understand explanations of your results in plain language",
    },
    {
      icon: Users,
      title: "ExpertConnect",
      description: "Connect with doctors and specialists for personalized guidance and expert advice",
    },
  ]

  return (
    <section id="how-to-use" className="py-12 md:py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to Use AiCounsyl</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding your medical reports has never been easier. Just four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" aria-hidden="true" />
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-3">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/10 border-2 border-accent rounded-lg px-8 py-6 max-w-2xl">
            <p className="text-lg font-semibold text-foreground mb-2">That's it! No medical jargon, no confusion.</p>
            <p className="text-base text-muted-foreground">
              AiCounsyl explains everything in simple terms you can understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
