import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Heading from "./Heading";

export function Testimonials() {
const testimonials = [
  {
    quote:
      "SynexaTech’s AI chatbot has completely transformed our customer support. Response times dropped by 60%, and customers are happier than ever.",
    name: "Alixis Parker",
    designation: "Customer Success Manager at RetailHub",
    src: "/images/testimonials/Alixis Parker.jpg",
  },
  {
    quote:
      "The AI calling agents have automated our follow-up process completely. Appointment reminders now run 24/7 without needing extra staff.",
    name: "Angela",
    designation: "CTO at HealthFirst Clinics",
    src: "/images/testimonials/Angela.jpg",
  },
  {
    quote:
      "Our new website by SynexaTech is fast, modern, and mobile-friendly. It has improved our online leads by more than 45% in just two weeks.",
    name: "James Parker",
    designation: "Marketing Head at GreenEdge Solutions",
    src: "/images/testimonials/James Parker.jpg",
  },
  {
    quote:
      "The team delivered our custom AI chatbot in just 3 days. The best part? No monthly fees and great post-launch support!",
    name: "john_doe",
    designation: "Operations Lead at Swift Logistics",
    src: "/images/testimonials/john_doe.jpg",
  },
  {
    quote:
      "Thanks to SynexaTech, our customer interactions are now automated across WhatsApp, Instagram, and our website. It’s been a game-changer for scaling support.",
    name: "Jonathon",
    designation: "VP of Technology at FutureNet",
    src: "/images/testimonials/Jonathon.jpg",
  },
];



  return (
    <>
      <div className="container my-10">
        <Heading simpleWord="Our CLIENTS &" highlightedWord="Testimonials" />
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  );
}
