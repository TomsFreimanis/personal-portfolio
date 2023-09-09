import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { useState } from "react";
import { useEffect } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in your actual application)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay as needed
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        // Show the preloader while loading
        <Preloader />
      ) : (
        <div className="content">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
 
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
