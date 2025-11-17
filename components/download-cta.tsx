import { Apple, Smartphone, Star, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCTA() {
  return (
    <section id="download" className="py-12 md:py-16 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Download AiCounsyl today</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join thousands using cardiac report analysis and ExpertConnect consultations with cardiologists and
            physicians — no credit card required
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-8">
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8" asChild>
                <a
                  href="https://apps.apple.com/us/app/aicounsyl/id6748116179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Apple className="h-6 w-6" aria-hidden="true" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </a>
              </Button>

              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=com.optrahealth.aicounsyl&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Smartphone className="h-6 w-6" aria-hidden="true" />
                  <div className="text-left">
                    <div className="text-xs">Get on</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </a>
              </Button>
            </div>

            {/* QR Code - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-col items-center gap-2 p-4 bg-background rounded-lg border-2 border-primary/20 w-fit">
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/qr-code-placeholder.jpg"
                  alt="QR code to download AiCounsyl app"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-foreground flex items-center gap-1">
                <QrCode className="h-4 w-4" aria-hidden="true" />
                Scan to Download
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent fill-accent" aria-hidden="true" />
              <span className="font-semibold text-foreground">4.8 rating</span>
              <span>on both platforms</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full" aria-hidden="true" />
            <div>
              <span className="font-semibold text-foreground">100k+</span> downloads
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full" aria-hidden="true" />
            <div>
              <span className="font-semibold text-foreground">iOS 13+</span> and{" "}
              <span className="font-semibold text-foreground">Android 8+</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-base font-semibold text-foreground mb-2">Free</p>
            <p className="text-sm text-muted-foreground">
              AiCounsyl is free to download and use. ExpertConnect provides access to cardiologists and physicians, with
              advice from health experts available at no cost.
            </p>
          </div>

          <div className="mt-6">
            <Button variant="link" className="text-primary" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Privacy Policy →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
