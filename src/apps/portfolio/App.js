import "normalize.css";
import React, { Component } from "react";
import icons from "./icons/icons.module.css";
import portfolio from "./portfolio.json";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import CodeSamples from "./components/CodeSamples";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Header from "./components/Header";
import appStyles from "./App.module.css";

const styles = { ...appStyles, ...icons };

class Portfolio extends Component {
  render() {
    const {
      name,
      socialLinks,
      profile,
      avatar,
      skills,
      samples,
      experience,
      education,
      interests
    } = portfolio;
    console.log(education);
    return (
      <div>
        <Header name={name} socialLinks={socialLinks} />
        <Profile name={name} profile={profile} avatar={avatar} />
        <Skills skills={skills} />
        <CodeSamples samples={samples} />
        <WorkExperience experience={experience} />
        <Education education={education} />
        <Interests interests={interests} />
        <footer>{String.fromCharCode(169)} Christopher Dale 2019</footer>
        <div id="modal-root" />
      </div>
    );
  }
}

export default Portfolio;
