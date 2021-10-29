import './App.scss';
import TopNavbar from "./components/TopNavbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Biography from "./components/Biography";
import "./App.scss";
import Resources from "./components/Resources";
import Schedule from "./components/Schedule";


function App() {
  return (
      <div className='App'>
          <TopNavbar />
          <Hero />
          <Biography/>
          <Schedule />
          <Resources />
          <ContactForm/>

      </div>
  );
}

export default App;
