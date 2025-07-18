import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Heading from "./Heading";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "SynexaTech’s AI chatbot has completely transformed our customer support. Response times dropped by 60%, and customers are happier than ever.",
      name: "Sarah Chen",
      designation: "Customer Success Manager at RetailHub",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI calling agents have automated our follow-up process completely. Appointment reminders now run 24/7 without needing extra staff.",
      name: "Michael Rodriguez",
      designation: "CTO at HealthFirst Clinics",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our new website by SynexaTech is fast, modern, and mobile-friendly. It has improved our online leads by more than 45% in just two weeks.",
      name: "Emily Watson",
      designation: "Marketing Head at GreenEdge Solutions",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The team delivered our custom AI chatbot in just 3 days. The best part? No monthly fees and great post-launch support!",
      name: "James Kim",
      designation: "Operations Lead at Swift Logistics",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Thanks to SynexaTech, our customer interactions are now automated across WhatsApp, Instagram, and our website. It’s been a game-changer for scaling support.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
