import './App.scss';
import TopNavbar from "./components/TopNavbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Biography from "./components/Biography";
import "./App.scss";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import GigsContainer from "./components/GigsContainer";


function App() {
  return (
      <div className='App' id="/">
          <TopNavbar />
          <Hero />
          <ScrollButton />
          <Biography/>
          <GigsContainer />
          <Resources />
          <ContactForm/>
          <Footer />
      </div>
  );
}

export default App;
