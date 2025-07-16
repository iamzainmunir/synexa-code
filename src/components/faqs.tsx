import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of HSE certifications do you offer?",
    answer:
      "We offer internationally recognized certifications such as NEBOSH IGC, OSHA 30/48 Hours, ISO 45001, IOSH, and other technical site trainings including Fire Watcher, Confined Space, and First Aid.",
  },
  {
    question: "Are your certifications valid globally?",
    answer:
      "Yes, our certifications like NEBOSH, IOSH, and ISO are globally accepted and enhance professional value across industries and countries.",
  },
  {
    question: "Do you offer online or virtual training sessions?",
    answer:
      "Absolutely! We offer in-person, virtual classroom, and self-paced online training options to suit your learning preferences and schedule.",
  },
  {
    question: "Is your training approved by international bodies?",
    answer:
      "Yes. We are affiliated with accredited institutions and our trainers are certified by bodies such as NEBOSH, IOSH, OSHA, and ISO. Our lead trainer is an approved NEBOSH tutor and examiner.",
  },
  {
    question: "Do you offer customized corporate training?",
    answer:
      "Yes, we design and deliver tailored HSE programs for companies in industries like oil & gas, construction, logistics, and manufacturing — aligned with your organizational safety goals.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can contact us via email, WhatsApp, or our course inquiry form. Once we receive your request, our team will guide you through the registration and scheduling process.",
  },
  {
    question: "Can I get assistance in choosing the right course?",
    answer:
      "Of course! Our team can assess your current role or goals and recommend the most suitable course — whether you're an individual or a company looking for workforce training.",
  },
  {
    question: "Do you provide job assistance after training?",
    answer:
      "While we do not guarantee job placement, many of our students go on to secure roles in reputed companies thanks to our practical training and international certifications.",
  },
  {
    question: "Where are you located and which countries do you serve?",
    answer:
      "Our head office is in Lahore, Pakistan. We also operate in Saudi Arabia and Tanzania — delivering training across multiple countries through both online and onsite modes.",
  },
  {
    question: "Are your trainers industry-experienced?",
    answer:
      "Yes, all our trainers are seasoned HSE professionals with real-world experience in industries like oil & gas, construction, logistics, and engineering.",
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
