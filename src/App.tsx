import "./App.css";

import type { JSX } from "react";

import TopBar from "./components/TopBar/TopBar";
import FeaturedProjects from "./pages/FeaturedProjects/FeaturedProjects";
import Intro from "./pages/Intro/Intro";


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
