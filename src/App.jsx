import IntroHeader from "./components/IntroHeader";
import NavBar from "./components/NavBar";
import ProjectsContainer from "./components/ProjectsContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <NavBar></NavBar>
        <IntroHeader></IntroHeader>
        <ProjectsContainer></ProjectsContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
