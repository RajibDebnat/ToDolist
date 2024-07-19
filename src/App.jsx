import { func } from "prop-types";
import NewProject from "./Component/NewProject";
import NoProjectSelected from "./Component/NoProjectSelected";
import ProjectSideBar from "./Component/ProjectSideBar";
import SelectedProject from "./Component/SelectedProject";
import { useState } from "react";
function App() {
  const [isCreateProject, setIsCreateProject] = useState({
    projectId: undefined,
    projects: [],
    tasks:[]
  });
  const handleCreateProject = () => {
    setIsCreateProject((prev) => {
      return { ...prev, projectId: null };
    });
  };
  const handleCancleProject = () => {
    setIsCreateProject((prev) => {
      return { ...prev, projectId: undefined };
    });
  };
  function onSubmitData(values) {
    console.log(values);
    setIsCreateProject((prev) => {
      console.log(prev);
      const newProjectData = {
        ...values,
        id: Math.random(),
      };
      return { ...prev, projects: [...prev.projects, newProjectData] };
    });
  }
  // console.log(isCreateProject)
  const handleSelectProject = (id) => {
    setIsCreateProject((prev) => {
      return { ...prev, projectId: id };
    });
  };

  function handleDelete() {
    setIsCreateProject((prev) => {
      return {
        ...prev,
        projectId: undefined,
        projects: isCreateProject.projects.filter(
          (project) => project.id !== isCreateProject.projectId
        ),
      };
    });
  }
  function handleDeleteSidebar (id){
    setIsCreateProject((prev) => {
      return {
        ...prev,
        projectId: undefined,
        projects: isCreateProject.projects.filter(
          (project) => project.id !== id
        ),
      };
    });
  }


  function addTaskHandler(taskValue){
    setIsCreateProject((prev) => {

      const newTaskData = {
 
        taskId: Math.random(),
        text:taskValue,
        selectedId:prev.projectId
        
      };
      return {...prev,  tasks: [...prev.tasks, newTaskData] ,};
    });
  }
  function deleteTaskHandler(taskId){
    setIsCreateProject((prev) => {
      return {
        ...prev,
        // projectId: undefined,
        tasks: isCreateProject.tasks.filter(
          (task) => task.taskId !== taskId
        ),
      };
    });
  }

  const selectedProject = isCreateProject.projects.find(
    (project) => project.id === isCreateProject.projectId
  );
  let content = <SelectedProject tasks={isCreateProject.tasks} onDeleteTask={deleteTaskHandler} onAddTask={addTaskHandler} onDeleteProject = {handleDelete} project={selectedProject} />;

  if (isCreateProject.projectId === null) {
    content = (
      <NewProject
      
        onSubmitData={onSubmitData}
        onCancleProject={handleCancleProject}
      />
    );
  } else if (isCreateProject.projectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  // let content =
  return (
    <main className="  bg-cyan-200   h-screen flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectSideBar
      onDeleteProject={handleDeleteSidebar}
      
        onSelectProject={handleSelectProject}
        projects={isCreateProject.projects}
        onCreateProject={handleCreateProject}
      />

      {/* /* <NewProject/> */}
      {content}
    </main>
  );
}

export default App;
