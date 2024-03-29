import type { JSX } from "react";

import TopBar from "./components/TopBar/TopBar";
import Intro from "./pages/Intro/Intro";
import FeaturedProjects from "./pages/FeaturedProjects/FeaturedProjects";

import "./App.css";


const PAGES = [
  <Intro />,
  <FeaturedProjects />,
];

export default function App(): JSX.Element {
  return (
    <>
      <TopBar />
      <main>
        {...PAGES}
      </main>
    </>
  );
}
