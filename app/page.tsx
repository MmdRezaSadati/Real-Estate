import { Fragment } from "react";
import {
  CategoriesSection,
  DetailSection,
  HeroSection,
  SectionFive,
  SectionFour,
} from "./components/Landing";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <CategoriesSection />
      <DetailSection />
      <SectionFour />
      <SectionFive />
    </Fragment>
  );
};
export default Home;
