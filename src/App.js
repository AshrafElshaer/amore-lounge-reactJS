import Header from "./containers/header/Header";
import AboutUs from "./containers/aboutUs/AboutUs";
import Testimonial from "./containers/testimonial/Testimonial";
import './style/main.css';



function App() {
  return (
    <div className="container">
      <Header />
      <AboutUs />
      <Testimonial />
      
    </div>
  );
}

export default App;
