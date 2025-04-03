
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


type Feature = {
  name: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
  enterprise: string | boolean;
};

export default function PricingTabs() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">Web Development Solutions</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Choose the perfect plan for your business needs. We offer specialized solutions for landing pages, company
          websites, and e-commerce platforms.
        </p>
        <div className="mt-4 inline-block bg-blue-50 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
          Annual Plans - Lock in your rate for 12 months
        </div>
        <div className="mt-3 inline-block bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
          Limited Time Offer: Save up to 40% on all plans
        </div>
      </div>

      <Tabs defaultValue="landing" className="w-full">
        <div className="flex justify-center mb-6 sm:mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="landing" className="text-xs sm:text-sm md:text-base px-1 sm:px-3">
              Landing Page
            </TabsTrigger>
            <TabsTrigger value="company" className="text-xs sm:text-sm md:text-base px-1 sm:px-3">
              Company Website
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="text-xs sm:text-sm md:text-base px-1 sm:px-3">
              E-commerce
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Landing Page Plans */}
        <TabsContent value="landing" className="mt-0">
          <FeatureTable
            title="Landing Page Solutions"
            description="Effective landing pages designed to convert visitors into customers"
            features={[
              {
                name: "Website Design",
                basic: "Basic",
                standard: "Standard",
                premium: "Premium",
                enterprise: "Custom",
              },
              { name: "Responsive Design", basic: true, standard: true, premium: true, enterprise: true },
              {
                name: "SEO Optimization",
                basic: "Basic",
                standard: "Standard",
                premium: "Advanced",
                enterprise: "Custom",
              },
              {
                name: "Tracking & Analytics",
                basic: false,
                standard: false,
                premium: true,
                enterprise: true,
              },
              {
                name: "Maintenance",
                basic: "1 Bulan",
                standard: "3 Bulan",
                premium: "6 Bulan",
                enterprise: "12 Bulan",
              },
              {
                name: "Customer Support",
                basic: "Email",
                standard: "Email",
                premium: "Email & Whatsapp",
                enterprise: "24/7 Dedicated",
              },
              { name: "Revisi", basic: "1 ", standard: "3", premium: "5", enterprise: "Unlimited" },
              { name: "Pengerjaan (Hari Kerja)", basic: "1 hari", standard: "1 hari", premium: "1 hari", enterprise: "---" },
              {
                name: "Domain",
                basic: ".web.id/.xyz/.my.id",
                standard: ".com",
                premium: ".com",
                enterprise: "Custom",
              },
              {
                name: "Free Hosting",
                basic: true,
                standard: true,
                premium: true,
                enterprise: true,
              },
            ]}
            currentYearPrices={["Rp 700k", "Rp 1000k", "Rp 1200k", "Custom"]}
            originalPrices={["Rp 800k", "Rp 1200k", "Rp 1500k", "Not determine"]}
            discounts={["40%", "40%", "41%", "Custom"]}
            nextYearPrices={["Rp 500k", "Rp 800k", "Rp 1000k", "Not Determine"]}
            popularPlan="standard"
          />
        </TabsContent>

        {/* Company Website Plans */}
        <TabsContent value="company" className="mt-0">
          <FeatureTable
            title="Company Website Solutions"
            description="Professional websites that establish your brand's online presence"
            features={[
              {
                name: "Website Design",
                basic: "Basic",
                standard: "Standard",
                premium: "Premium",
                enterprise: "Custom",
              },
              {
                name: "Number of Pages",
                basic: "Up to 5",
                standard: "Up to 10",
                premium: "Up to 20",
                enterprise: "Unlimited",
              },
              { name: "CMS Implementation", basic: true, standard: true, premium: true, enterprise: true },
              {
                name: "SEO Optimization",
                basic: "Basic",
                standard: "Standard",
                premium: "Advanced",
                enterprise: "Enterprise",
              },
              { name: "Blog Integration", basic: false, standard: true, premium: true, enterprise: true },
              {
                name: "Contact Forms",
                basic: "1 Form",
                standard: "3 Forms",
                premium: "5 Forms",
                enterprise: "Unlimited",
              },
              {
                name: "Social Media Integration",
                basic: "3 Platforms",
                standard: "5 Platforms",
                premium: "All Platforms",
                enterprise: "Custom",
              },
              {
                name: "Maintenance",
                basic: "3 Months",
                standard: "6 Months",
                premium: "12 Months",
                enterprise: "Lifetime",
              },
              {
                name: "Customer Support",
                basic: "Email",
                standard: "Email & Chat",
                premium: "Priority",
                enterprise: "24/7 Dedicated",
              },
            ]}
            currentYearPrices={["$799", "$1,499", "$2,999", "Custom"]}
            originalPrices={["$1,299", "$2,499", "$4,999", "Custom"]}
            discounts={["38%", "40%", "40%", "Custom"]}
            nextYearPrices={["$879", "$1,649", "$3,299", "Custom"]}
            popularPlan="standard"
          />
        </TabsContent>

        {/* E-commerce Plans */}
        <TabsContent value="ecommerce" className="mt-0">
          <FeatureTable
            title="E-commerce Solutions"
            description="Powerful online stores that drive sales and growth"
            features={[
              {
                name: "Website Design",
                basic: "Basic",
                standard: "Standard",
                premium: "Premium",
                enterprise: "Custom",
              },
              {
                name: "Product Limit",
                basic: "Up to 50",
                standard: "Up to 250",
                premium: "Up to 1000",
                enterprise: "Unlimited",
              },
              { name: "Payment Gateways", basic: "2", standard: "5", premium: "10", enterprise: "All Available" },
              { name: "Inventory Management", basic: true, standard: true, premium: true, enterprise: true },
              { name: "Discount Codes", basic: true, standard: true, premium: true, enterprise: true },
              { name: "Abandoned Cart Recovery", basic: false, standard: true, premium: true, enterprise: true },
              { name: "Customer Accounts", basic: true, standard: true, premium: true, enterprise: true },
              { name: "Product Reviews", basic: false, standard: true, premium: true, enterprise: true },
              {
                name: "SEO Optimization",
                basic: "Basic",
                standard: "Standard",
                premium: "Advanced",
                enterprise: "Enterprise",
              },
              {
                name: "Analytics & Reporting",
                basic: "Basic",
                standard: "Standard",
                premium: "Advanced",
                enterprise: "Custom",
              },
              {
                name: "Maintenance",
                basic: "3 Months",
                standard: "6 Months",
                premium: "12 Months",
                enterprise: "Lifetime",
              },
              {
                name: "Customer Support",
                basic: "Email",
                standard: "Email & Chat",
                premium: "Priority",
                enterprise: "24/7 Dedicated",
              },
            ]}
            currentYearPrices={["$1,499", "$2,999", "$5,999", "Custom"]}
            originalPrices={["$2,499", "$4,999", "$9,999", "Custom"]}
            discounts={["40%", "40%", "40%", "Custom"]}
            nextYearPrices={["$1,649", "$3,299", "$6,599", "Custom"]}
            popularPlan="standard"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FeatureTable({
  title,
  description,
  features,
  currentYearPrices,
  originalPrices,
  discounts,
  nextYearPrices,
  popularPlan,
}: {
  title: string;
  description: string;
  features: Feature[];
  currentYearPrices: (number | string)[];
  originalPrices: (number | string)[];
  discounts: (number | string)[];
  nextYearPrices: (number | string)[];
  popularPlan: string;
}) {
  // Desktop and tablet view
  const DesktopTable = () => (
    <div className="hidden md:block overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-1 text-center py-4 sm:py-6 relative">
            <h3 className="text-base sm:text-lg font-semibold text-blue-700">BASIC</h3>
          </div>
          <div className="col-span-1 text-center py-4 sm:py-6 relative">
            <h3 className="text-base sm:text-lg font-semibold text-blue-600">STANDARD</h3>
          </div>
          <div className="col-span-1 text-center py-4 sm:py-6 relative">
            <h3 className="text-base sm:text-lg font-semibold text-blue-500">PREMIUM</h3>
          </div>
          <div className="col-span-1 text-center py-4 sm:py-6 relative">
            <h3 className="text-base sm:text-lg font-semibold text-amber-500">ENTERPRISE</h3>
          </div>

          {/* Section Header */}
          <div className="col-span-5 bg-gray-100 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold text-blue-900">Fitur yang Termasuk</h2>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <FeatureRow
              key={index}
              name={feature.name}
              basic={feature.basic}
              standard={feature.standard}
              premium={feature.premium}
              enterprise={feature.enterprise}
            />
          ))}

          {/* Pricing and CTA */}
          <div className="col-span-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-100">
            <span className="font-bold text-blue-900">Annual Cost</span>
          </div>
          <div className="col-span-1 text-center py-4 sm:py-6">
            <div className="mb-4">
              {discounts && discounts[0] && (
                <div className="mb-1">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
                    SAVE {discounts[0]}
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center justify-center">
                {originalPrices && originalPrices[0] && (
                  <span className="text-gray-500 text-sm line-through">{originalPrices[0]}</span>
                )}
                <div className="text-xl sm:text-2xl font-bold text-blue-700">{currentYearPrices[0]}</div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center justify-center mx-auto">
                      Next year: {nextYearPrices[0]} <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1 text-blue-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price after renewal in 12 months</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <button className="bg-white text-blue-700 border border-blue-700 font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-md text-sm hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
          <div
            className={`col-span-1 text-center py-4 sm:py-6 ${popularPlan === "standard" ? "bg-blue-50 border-t border-b border-blue-100" : ""}`}
          >
            <div className="mb-4">
              {discounts && discounts[1] && (
                <div className="mb-1">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
                    SAVE {discounts[1]}
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center justify-center">
                {originalPrices && originalPrices[1] && (
                  <span className="text-gray-500 text-sm line-through">{originalPrices[1]}</span>
                )}
                <div className="text-xl sm:text-2xl font-bold text-blue-600">{currentYearPrices[1]}</div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center justify-center mx-auto">
                      Next year: {nextYearPrices[1]} <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1 text-blue-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price after renewal in 12 months</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <button className="bg-blue-600 text-white font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-md text-sm hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="col-span-1 text-center py-4 sm:py-6">
            <div className="mb-4">
              {discounts && discounts[2] && (
                <div className="mb-1">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
                    SAVE {discounts[2]}
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center justify-center">
                {originalPrices && originalPrices[2] && (
                  <span className="text-gray-500 text-sm line-through">{originalPrices[2]}</span>
                )}
                <div className="text-xl sm:text-2xl font-bold text-blue-500">{currentYearPrices[2]}</div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center justify-center mx-auto">
                      Next year: {nextYearPrices[2]} <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1 text-blue-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Price after renewal in 12 months</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <button className="bg-white text-blue-500 border border-blue-500 font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-md text-sm hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
          <div className="col-span-1 text-center py-4 sm:py-6">
            <div className="mb-4">
              {discounts && discounts[3] && (
                <div className="mb-1">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
                    SAVE {discounts[3]}
                  </span>
                </div>
              )}
              <div className="flex flex-col items-center justify-center">
                {originalPrices && originalPrices[3] && originalPrices[3] !== "Custom" && (
                  <span className="text-gray-500 text-sm line-through">{originalPrices[3]}</span>
                )}
                <div className="text-xl sm:text-2xl font-bold text-amber-500">{currentYearPrices[3]}</div>
              </div>
              {nextYearPrices[3] !== "Custom" && (
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center justify-center mx-auto">
                        Next year: {nextYearPrices[3]}{" "}
                        <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1 text-amber-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Price after renewal in 12 months</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
            <button className="bg-white text-amber-500 border border-amber-500 font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-md text-sm hover:bg-amber-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Mobile view with cards
  const MobileCards = () => (
    <div className="md:hidden space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Basic Plan */}
      <PlanCard
        name="BASIC"
        color="blue-700"
        currentPrice={currentYearPrices[0]}
        originalPrice={originalPrices[0]}
        discount={discounts[0]}
        nextYearPrice={nextYearPrices[0]}
        features={features.map((f) => ({ name: f.name, value: f.basic }))}
        ctaText="Get Started"
        isPrimary={false}
        isPopular={popularPlan === "basic"}
      />

      {/* Standard Plan */}
      <PlanCard
        name="STANDARD"
        color="blue-600"
        currentPrice={currentYearPrices[1]}
        originalPrice={originalPrices[1]}
        discount={discounts[1]}
        nextYearPrice={nextYearPrices[1]}
        features={features.map((f) => ({ name: f.name, value: f.standard }))}
        ctaText="Get Started"
        isPrimary={true}
        isPopular={popularPlan === "standard"}
      />

      {/* Premium Plan */}
      <PlanCard
        name="PREMIUM"
        color="blue-500"
        currentPrice={currentYearPrices[2]}
        originalPrice={originalPrices[2]}
        discount={discounts[2]}
        nextYearPrice={nextYearPrices[2]}
        features={features.map((f) => ({ name: f.name, value: f.premium }))}
        ctaText="Get Started"
        isPrimary={false}
        isPopular={popularPlan === "premium"}
      />

      {/* Enterprise Plan */}
      <PlanCard
        name="ENTERPRISE"
        color="amber-500"
        currentPrice={currentYearPrices[3]}
        originalPrice={originalPrices[3]}
        discount={discounts[3]}
        nextYearPrice={nextYearPrices[3]}
        features={features.map((f) => ({ name: f.name, value: f.enterprise }))}
        ctaText="Contact Us"
        isPrimary={false}
        isPopular={popularPlan === "enterprise"}
      />
    </div>
  )

  return (
    <div>
      <DesktopTable />
      <MobileCards />
    </div>
  )
}

function PlanCard({
  name,
  color,
  currentPrice,
  originalPrice,
  discount,
  nextYearPrice,
  features,
  ctaText,
  isPrimary,
}: {
  name: string;
  color: string;
  currentPrice: string | number;
  originalPrice: number | string;
  discount: number | string;
  nextYearPrice: number | string;
  features: { name: string; value: string | boolean }[];
  ctaText: string;
  isPrimary: boolean;
  isPopular: boolean;
}) {
  return (
    <div
      className={`border rounded-lg overflow-hidden relative my-10 ${isPrimary ? `border-${color} shadow-md` : "border-gray-200"}`}
    >

      <div
        className={`bg-${isPrimary ? color : "white"} ${isPrimary ? "text-white" : `text-${color}`} px-4 py-3 text-center`}
      >
        <h3 className="text-lg font-bold">{name}</h3>
      </div>

      <div className="p-4">
        <div className="text-center mb-4 pb-4 border-b">
          {discount && (
            <div className="mb-1">
              <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
                HEMAT {discount}
              </span>
            </div>
          )}
          <div className="flex flex-col items-center justify-center">
            {originalPrice && originalPrice !== "Custom" && (
              <span className="text-gray-500 text-sm line-through">{originalPrice}</span>
            )}
            <div className={`text-2xl font-bold text-${color}`}>{currentPrice}</div>
          </div>
          {nextYearPrice !== "Custom" && (
            <div className="text-xs text-gray-500 mt-1 flex items-center justify-center">
              Next year: {nextYearPrice} <Info className="h-3 w-3 ml-1 text-gray-400" />
            </div>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="features" className="border-b-0">
            <AccordionTrigger className="py-2 text-sm font-medium">View Features</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 mt-0.5">
                      {typeof feature.value === "boolean" ? (
                        feature.value ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-gray-400" />
                        )
                      ) : null}
                    </div>
                    <div className="ml-2">
                      <span className="font-medium">{feature.name}:</span>{" "}
                      {typeof feature.value !== "boolean" && <span className={`text-${color}`}>{feature.value}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-4">
          <button
            className={`w-full py-2 px-4 rounded-md text-sm font-medium ${isPrimary
              ? `bg-${color} text-white hover:bg-${color}/90`
              : `bg-white text-${color} border border-${color} hover:bg-${color}/10`
              } transition-colors`}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  )
}

function FeatureRow({ name, basic, standard, premium, enterprise }: {
  name: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
  enterprise: string | boolean;
}) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-green-500" />
      ) : (
        <X className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-gray-400" />
      )
    }
    return <span className="text-sm sm:text-base">{value}</span>
  }

  return (
    <>
      <div className="col-span-1 border-b px-3 sm:px-6 py-3 sm:py-4">
        <span className="text-sm sm:text-base text-blue-900">{name}</span>
      </div>
      <div className="col-span-1 border-b text-center py-3 sm:py-4">
        <span className="text-blue-700">{renderValue(basic)}</span>
      </div>
      <div className="col-span-1 border-b text-center py-3 sm:py-4">
        <span className="text-blue-600">{renderValue(standard)}</span>
      </div>
      <div className="col-span-1 border-b text-center py-3 sm:py-4">
        <span className="text-blue-500">{renderValue(premium)}</span>
      </div>
      <div className="col-span-1 border-b text-center py-3 sm:py-4">
        <span className="text-amber-500">{renderValue(enterprise)}</span>
      </div>
    </>
  )
}


