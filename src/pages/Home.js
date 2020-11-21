import React from 'react';
import '../components/App.css';
import Landing from "../components/Landing";
import ProjectList from "../components/ProjectList";
import WorkList from "../components/WorkList";
import EducationList from "../components/EducationList";
import Resume from "../components/Resume";

function Home() {
  return (
    <>
      <Landing />
      <ProjectList />
      <WorkList />
      <EducationList />
      <Resume />
    </>
  );
}

export default Home;