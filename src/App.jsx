import Navigation from "./components/Navigation/Navigation";
import HomeHero from "./components/HomeHero/HomeHero";
import Posts from "./components/Posts/Posts";
import AboutUs from "./components/AboutUs/AboutUS";
import Catagory from "./components/Catagory/Catagory";

import "./App.css";
export default function App() {
  return (
    <>
      <Navigation />
      <HomeHero />
      <Posts />
      <AboutUs />
      <Catagory />
    </>
  );
}
