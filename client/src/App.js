import './App.scss';
import TopNavbar from "./components/TopNavbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Biography from "./components/Biography";
import "./App.scss";
import Resources from "./components/Resources";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";


function App() {
  return (
      <div className='App'>
          <TopNavbar />
          <Hero />
          <ScrollButton />
          <Biography/>
          <Schedule />
          <Resources />
          <ContactForm/>
          <Footer />

      </div>
  );
}

export default App;
