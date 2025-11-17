import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AiCounsyl from OptraHEALTH - Free Medical Report Analysis & Expert Consultation",
  description:
    "Understand your cardiac and pathology reports in simple language. Connect with doctors through ExpertConnect. Free AI-powered health insights from OptraHEALTH's patented technology. Available on iOS and Android.",
  keywords: [
    "medical report analysis",
    "cardiac report explanation",
    "pathology report",
    "health app",
    "ExpertConnect",
    "doctor consultation",
    "AI health insights",
    "OptraHEALTH",
    "AiCounsyl",
    "free health app",
    "HIPAA compliant",
    "clinical intelligence",
  ],
  authors: [{ name: "OptraHEALTH", url: "https://optrahealth.com" }],
  creator: "OptraHEALTH",
  publisher: "OptraHEALTH",
  metadataBase: new URL("https://aicounsyl.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AiCounsyl from OptraHEALTH - Free Medical Report Analysis",
    description:
      "Understand your cardiac and pathology reports in simple language. Connect with doctors through ExpertConnect. Free AI-powered health insights.",
    type: "website",
    locale: "en_US",
    url: "https://aicounsyl.com",
    siteName: "AiCounsyl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AiCounsyl - Medical Report Analysis App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiCounsyl from OptraHEALTH - Free Medical Report Analysis",
    description: "Understand your health reports in simple language. Connect with doctors. Free AI-powered insights.",
    images: ["/og-image.jpg"],
    creator: "@OptraHEALTH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "AiCounsyl",
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
              author: {
                "@type": "Organization",
                name: "OptraHEALTH",
                url: "https://optrahealth.com",
              },
              description:
                "Free medical report analysis app that explains cardiac and pathology reports in simple language. Connect with doctors through ExpertConnect.",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${robotoMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
