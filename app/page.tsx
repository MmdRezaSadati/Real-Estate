import { Fragment } from "react";
import {
  CategoriesSection,
  DetailSection,
  HeroSection,
  SectionFive,
  SectionFour,
} from "./components/Landing";
import { PageLayout } from "./components/partials";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <CategoriesSection />
      <DetailSection />
      <SectionFour />
      <SectionFive />
    </PageLayout>
  );
};
export default Home;
