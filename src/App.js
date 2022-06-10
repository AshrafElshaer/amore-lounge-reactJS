import Header from "./containers/header/Header";
import AboutUs from "./containers/aboutUs/AboutUs";
import Testimonial from "./containers/testimonial/Testimonial";
import ContactUs from "./containers/contactUs/ContactUs";
import Footer from "./containers/footer/Footer";
import './style/main.css';



function App() {
  return (
    <div className="container">
      <Header />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;
