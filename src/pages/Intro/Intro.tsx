import type { JSX } from "react";

import Page from "../../components/Page/Page";

import "./Intro.css";


const PERSONAL_DETAILS = {
  firstName: "Chris",
  lastName: "Polak",
  githubUsername: "cpolish",
};


export default function Intro(): JSX.Element {
  return (
    <Page id="intro">
      <h1>Hi, I'm {PERSONAL_DETAILS.firstName}!</h1>
      <h2>
        I'm a software developer and student interested in exploring languages and 
        frameworks to develop cool projects!
      </h2>
    </Page>
  );
}
