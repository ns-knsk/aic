"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    headline: "Your health companion",
    subheadline: "Decode your heart and lab reports with ease",
    image: "/cardio-app-screenshot.png",
  },
  {
    id: 2,
    headline: "Cardiac & lab reporting understanding made simple",
    subheadline: "Understand your heart tests, pathology reports, and blood work in plain language",
    image: "/home-app-screenshot.png",
  },
  {
    id: 3,
    headline: "ExpertConnect: Talk to doctors",
    subheadline:
      "Get expert medical advice on your heart health questions — consultations with health experts are free",
    image: "/expertconnect-app-screenshot.png",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 100 / 60 // 60 frames over 6 seconds
        })
      }, 100)
      return () => clearInterval(progressInterval)
    } else {
      // Reset progress when paused
      setProgress(0)
    }
  }, [isPaused, currentSlide])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 6000)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-16 md:pt-32 md:pb-24 scroll-mt-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero carousel"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm mb-2">
              Always Free
            </div>
            <div key={currentSlide} className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">{slides[currentSlide].subheadline}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8" asChild>
                  <a href="#download" aria-label="Download on iOS App Store">
                    Download on iOS
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <a href="#download" aria-label="Get it on Google Play">
                    Get on Android
                  </a>
                </Button>
              </div>

              {/* QR Code - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex items-center gap-3 p-3 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 w-fit">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/qr-code-placeholder.jpg"
                    alt="QR code to download AiCounsyl app"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-1 mb-1">
                    <QrCode className="h-4 w-4" aria-hidden="true" />
                    Scan to Download
                  </p>
                  <p className="text-xs text-muted-foreground">Use your phone camera</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4" role="tablist" aria-label="Carousel navigation">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative h-1 flex-1 bg-border rounded-full overflow-hidden transition-all hover:bg-border/80"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                >
                  {index === currentSlide && !isPaused && (
                    <div
                      className="absolute inset-0 bg-primary rounded-full transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {index === currentSlide && isPaused && <div className="absolute inset-0 bg-primary rounded-full" />}
                </button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              key={`image-${currentSlide}`}
              className="relative aspect-[3/4] max-w-md mx-auto animate-in fade-in zoom-in-95 duration-700"
            >
              <img
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={`${slides[currentSlide].headline} - Mobile app screenshot`}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Carousel Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
