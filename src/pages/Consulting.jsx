import React from "react";
import Hero from "../component/ConsultingComp/Hero";
import FirstCard from "../component/ConsultingCop/FirstCard";
import SecondCards from "../component/ConsultingCop/SecondCards";
import ThirdCard from "../component/ConsultingCop/ThirdCard";
import FourCard from "../component/ConsultingCop/FourCard";

const Consulting = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <FirstCard />
      <div className="container mx-auto px-4">
        <SecondCards />
        <ThirdCard />
      </div>
      <FourCard />
    </div>
  );
};

export default Consulting;
