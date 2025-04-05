import { Badge } from "./ui/badge"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "./ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8" id="faq">
      <div className="container max-w-screen-lg mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-2 flex justify-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-xs">
              ✨ FAQ ✨
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
            Find answers to common questions about our web development services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "How long does it take to build a website?",
                content:
                  "The timeline for website development varies depending on the complexity of the project. A simple website might take 4-6 weeks, while more complex projects with custom functionality can take 3-6 months. During our initial consultation, we’ll provide a detailed timeline based on your specific requirements.",
              },
              {
                title: "What technologies do you use?",
                content:
                  "We use a variety of modern technologies depending on the project requirements. Our tech stack typically includes React, Next.js, Node.js, and various databases like PostgreSQL or MongoDB. We also work with content management systems like WordPress and Shopify for e-commerce solutions.",
              },
              {
                title: "Do you provide ongoing maintenance and support?",
                content:
                  "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally. Our support packages include regular updates, security monitoring, performance optimization, and technical support.",
              },
              {
                title: "How much does a website cost?",
                content:
                  "The cost of a website depends on various factors including complexity, functionality, and design requirements. Our basic packages start at $2,999, while more complex projects with custom functionality may cost more. We provide detailed quotes after understanding your specific needs.",
              },
              {
                title: "Do you help with website hosting and domain registration?",
                content:
                  "Yes, we can assist with domain registration and recommend suitable hosting solutions based on your website’s requirements. We also offer managed hosting services where we handle all technical aspects of hosting your website.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

