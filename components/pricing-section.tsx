import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
      name: "Basic",
      description: "For small businesses just getting started",
      initialPrice: 15000000, // Rp 15,000,000
      annualPrice: 5000000, // Rp 5,000,000
      features: [
        "5-page responsive website",
        "Basic SEO setup",
        "Contact form",
        "Mobile-friendly design",
        "1 round of revisions",
        "3 months of basic support",
        "Domain registration (1 year)",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Standard",
      description: "For established businesses looking to grow",
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
      name: "Premium",
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
            className={`flex flex-col border-1 ${tier.popular ? "border-blue-500 bg-blue-50/50" : "hover:border-blue-500"} hover:shadow-lg transition-all duration-200 relative`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
            )}
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription className="pt-2">{tier.description}</CardDescription>
              <div className="mt-4 space-y-2">
                <div>
                  <span className="text-3xl font-bold text-black">{formatIDR(tier.initialPrice)}</span>
                  <span className="text-muted-foreground ml-2">initial payment</span>
                </div>
                <div>
                  <span className="text-xl font-semibold">{formatIDR(tier.annualPrice)}</span>
                  <span className="text-muted-foreground ml-2">per year after</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">{tier.buttonText}</Button>
            </CardFooter>
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


