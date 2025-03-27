import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$999",
      description: "Perfect for small businesses just getting started",
      features: [
        "Responsive website design",
        "Up to 5 pages",
        "Contact form",
        "Mobile optimization",
        "Basic SEO setup",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,999",
      description: "Ideal for growing businesses needing more features",
      features: [
        "Everything in Basic",
        "Up to 10 pages",
        "Content management system",
        "Blog setup",
        "Advanced SEO package",
        "Social media integration",
        "Google Analytics setup",
      ],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$3,999",
      description: "For established businesses requiring a comprehensive solution",
      features: [
        "Everything in Professional",
        "Unlimited pages",
        "E-commerce functionality",
        "Custom animations",
        "Premium SEO package",
        "Performance optimization",
        "Priority support",
        "Monthly maintenance",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-slate-600 md:text-xl">
          Choose the perfect plan for your business needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl ${plan.popular ? "border-2 border-primary shadow-lg" : "border shadow-md"} bg-white p-8`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-1 text-slate-600">/project</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
            </div>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${plan.popular ? "" : "bg-slate-800 hover:bg-slate-700"}`}
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600">
          Need a custom solution?{" "}
          <a href="#" className="font-medium text-primary hover:underline">
            Contact us
          </a>{" "}
          for a personalized quote.
        </p>
      </div>
    </div>
  )
}

