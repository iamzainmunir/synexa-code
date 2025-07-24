import React from "react";
import Heading from "./Heading";
import Card from "./services-card";
import servicesData from "@/data/services-card.json";

const CoursesAndCertificates = () => {
  return (
    <div id='services' className="container my-10">
      <Heading simpleWord="Our Services &" highlightedWord="Expertise" />
      <div className="card-container gap-5 flex flex-wrap items-center justify-center">
        {servicesData.map((services, idx) => {
          return (
            <Card
              key={idx}
              title={services.title}
              content={services.description}
              imageSrc={services.imageSrc}
              date={services.date}
              month={services.month}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesAndCertificates;
