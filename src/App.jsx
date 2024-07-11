import { func } from "prop-types";
import NewProject from "./Component/NewProject";
import NoProjectSelected from "./Component/NoProjectSelected";
import ProjectSideBar from "./Component/ProjectSideBar";
import { useState } from "react";
function App() {
  const [isCreateProject, setIsCreateProject] = useState({
    projectId: undefined,
    projects: [],
  });
  const handleCreateProject = () => {
    setIsCreateProject((prev) => {
      return { ...prev, projectId: true };
    });
  };
  const handleCancleProject = () => {
    setIsCreateProject((prev) => {
      return { ...prev, projectId: undefined };
    });
  };
  function onSubmitData(values) {
    setIsCreateProject((prev) => {
      const newProjectData = {
        ...values,
        id: Math.random(),
      };
      return { ...prev, projects: [...prev.projects, newProjectData] };
    });
    
  }
  console.log(isCreateProject);
  return (
    <main className="  bg-cyan-200   h-screen flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectSideBar projects={isCreateProject.projects} onCreateProject={handleCreateProject} />
      {isCreateProject.projectId ? (
        <NewProject
          onSubmitData={onSubmitData}
          onCancleProject={handleCancleProject}
        />
      ) : (
        <NoProjectSelected onCreateProject={handleCreateProject} />
      )}
      {/* <NewProject/> */}
    </main>
  );
}

export default App;
