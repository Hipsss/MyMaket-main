import Navigation from "./components/Navigation/Navigation";
import HomeHero from "./components/HomeHero/HomeHero";
import Posts from "./components/Posts/Posts";
import AboutUs from "./components/AboutUs/AboutUS";
import Catagory from "./components/Catagory/Catagory";
import SpecialPost from "./components/SpecialPost/SpecialPost";
import ListAuthors from "./components/ListAuthors/ListAuthors";
import LogoCompany from "./components/LogoCompany/LogoCompany";
import Testimonials from "./components/Testimonials/Testimonials";
import JoinTeam from "./components/JoinTeam/JoinTeam";
import Footer from "./components/Footer/Footer";

import "./App.css";
export default function App() {
  return (
    <>
      <Navigation />
      <HomeHero />
      <Posts />
      <AboutUs />
      <Catagory />
      <SpecialPost />
      <ListAuthors />
      <LogoCompany />
      <Testimonials />
      <JoinTeam />
      <Footer />
    </>
  );
}
