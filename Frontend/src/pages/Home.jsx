import React from "react";
import { Hero } from "../components/Hero";
import { Latestcollection } from "../components/Latestcollection";
import BestSeller from "../components/BestSeller";
import Ourpolicy from "../components/Ourpolicy";
import NewsLetter from "../components/NewsLetter";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Latestcollection />
      <BestSeller />
      <Ourpolicy />
      <NewsLetter />
    </div>
  );
};
