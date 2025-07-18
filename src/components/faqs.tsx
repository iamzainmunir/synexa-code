import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does SynexaTech offer?",
    answer:
      "We provide AI chatbots, AI-powered calling agents, and modern website development to help businesses automate customer communication, enhance engagement, and grow faster.",
  },
  {
    question: "How much does your AI chatbot cost?",
    answer:
      "Our AI chatbot costs a one-time setup fee of $250 USD. There are no monthly charges, and you also get a free 7-day trial to test it before committing.",
  },
  {
    question: "Can your chatbot work on WhatsApp and Instagram?",
    answer:
      "Yes! Our chatbots integrate seamlessly with WhatsApp, Facebook Messenger, Instagram Direct Messages, and even your website live chat — all managed by one smart bot.",
  },
  {
    question: "Do you offer a free chatbot trial?",
    answer:
      "Absolutely! We offer a 7-day free trial where you can test the chatbot live on your platform, experience its features, and share feedback before final delivery.",
  },
  {
    question: "How long does it take to deliver my chatbot?",
    answer:
      "Once we finalize your requirements, we deliver your custom-built chatbot in just 3 working days.",
  },
  {
    question: "Do you build websites too?",
    answer:
      "Yes, we build fast, mobile-friendly, and SEO-ready websites customized to your brand. Pricing starts at $600 USD for up to 6 pages, delivered within 5–7 working days.",
  },
  {
    question: "Is hosting and domain included in the website price?",
    answer:
      "No, hosting and domain charges are separate. However, we guide you in selecting and setting them up if needed.",
  },
  {
    question: "What are AI calling agents, and how do they work?",
    answer:
      "AI calling agents are automated voice systems that talk like humans, qualify leads, send reminders, and handle follow-up calls using conversational AI — available 24/7 in multiple languages.",
  },
  {
    question: "What is the pricing for AI calling agents?",
    answer:
      "Pricing is custom and depends on call volume, duration, language, and region. We offer a free consultation to create a package tailored to your needs.",
  },
  {
    question: "What results can I expect from your services?",
    answer:
      "Businesses using SynexaTech solutions typically see 40–70% faster response times, up to 60% more qualified leads, reduced support costs, and improved customer satisfaction.",
  },
];

export default function Faqs() {
  return (
    <>
      <div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Have Questions About Our Certifications or Training? We’re Here to
            Help.
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whether you&apos;re a safety professional, a fresh learner, or a
            corporate client seeking certified training, we understand you may
            have questions. That’s why we’ve compiled answers to the most
            commonly asked queries — from course selection and certification to
            delivery methods and international recognition. Still unsure? Our
            team is always ready to help.
          </p>
        </div>
        {/* End Title */}

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
