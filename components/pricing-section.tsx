import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPlan() {
  // Format IDR currency
  const formatIDR = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const pricingTiers = [
    {
      name: "Landing Page",
      description: "Cocok untuk UMKM yang baru merintis",
      initialPrice: 1000000,
      annualPrice: 750000, // Rp 5,000,000
      features: [
        "1 halaman responsive",
        "Pengaturan SEO basic",
        "Contact form",
        "Mobile-friendly design",
        "1x revisi minor (foto/teks)",
        "Domain web.id/my.id (1 tahun)",
      ],
      popular: false,
      buttonText: "Hubungi Kami",
    },
    {
      name: "ComPro (Lite)",
      description: "Company Profile untuk kamu yang memulai perusahaan profesional",
      initialPrice: 25000000, // Rp 25,000,000
      annualPrice: 8000000, // Rp 8,000,000
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Blog setup",
        "Social media integration",
        "Email newsletter setup",
        "3 rounds of revisions",
        "Basic analytics setup",
        "6 months of standard support",
        "Domain & hosting (1 year)",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Company Profile",
      description: "For businesses requiring a comprehensive solution",
      initialPrice: 45000000, // Rp 45,000,000
      annualPrice: 12000000, // Rp 12,000,000
      features: [
        "20-page responsive website",
        "Comprehensive SEO strategy",
        "Content management system",
        "E-commerce functionality",
        "Payment gateway integration",
        "Custom contact forms",
        "Social media feed integration",
        "5 rounds of revisions",
        "Google Analytics setup",
        "1 year of premium support",
        "Domain & hosting (1 year)",
        "Monthly performance reports",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      initialPrice: 100000000, // Rp 100,000,000
      annualPrice: 25000000, // Rp 25,000,000
      features: [
        "Unlimited pages",
        "Custom web application development",
        "Advanced e-commerce solutions",
        "Custom API integrations",
        "Database design & implementation",
        "User authentication system",
        "Advanced security features",
        "Performance optimization",
        "Unlimited revisions",
        "2 years of priority support",
        "Domain & hosting (2 years)",
        "Quarterly strategy meetings",
        "Dedicated project manager",
        "24/7 emergency support",
      ],
      popular: false,
      buttonText: "Contact Us",
    },
  ]

  return (
    <div className="px-4 py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Pricing Plans</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your website development needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={`flex flex-col border-1 divide-y ${tier.popular ? "border-blue-500 bg-blue-50/50" : "hover:border-blue-500"} hover:shadow-lg transition-all duration-200 relative`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
            )}
            <CardHeader className="pb-8 items-center justify-center">
              <CardTitle>
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
              </CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="flex flex-col">
                <span className="text-xl font-bold line-through text-gray-400">{formatIDR(tier.initialPrice)}</span>
                <span
                  className={`text-3xl font-bold text-primary`}
                >
                  {formatIDR(tier.annualPrice)}
                </span>
                <span className="text-muted-foreground">/sampai utbk</span>
              </div>
              <Link href={"/"}>
                <Button
                  className={`mt-6 w-full ${tier.popular ? "" : "text-black"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  Daftar Sekarang
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="text-sm font-medium text-foreground tracking-wide uppercase">Fitur yang termasuk</h4>
              <ul className="space-y-3 mt-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          All plans include responsive design, SEO optimization, and a user-friendly content management system. Need
          something custom? Contact our team for a personalized quote.
        </p>
        <Button variant="outline" className="mt-4 border-blue-500 text-blue-600 hover:bg-blue-50">
          Request Custom Quote
        </Button>
      </div>
    </div>
  )
}


