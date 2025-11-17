import { Sparkles, Shield, Award, Brain } from "lucide-react"

export function OptraHealthIntro() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Powered by Innovation
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            AiCounsyl from{" "}
            <a
              href="https://optrahealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              OptraHEALTH
            </a>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            AiCounsyl is powered by{" "}
            <a
              href="https://optrahealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              OptraHEALTH's
            </a>{" "}
            patented technology, combining advanced artificial intelligence with deep medical expertise and clinical
            intelligence to deliver accurate, personalized health insights you can trust.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Patented AI Technology</h3>
              <p className="text-sm text-muted-foreground">
                Proprietary algorithms trained on millions of medical reports
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Clinical Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Advanced reasoning that understands medical context and nuances
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Medical-Grade Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Validated by healthcare professionals and clinical experts
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trusted Innovation</h3>
              <p className="text-sm text-muted-foreground">Years of research and development in healthcare AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
