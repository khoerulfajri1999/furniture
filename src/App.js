import "./App.css";
import { Banner } from "./Pages/Banner/Banner";
import { Blog } from "./Pages/Blog/Blog";
import { Contact } from "./Pages/Contact/Contact";
import { Footer } from "./Pages/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Pages/Navbar/Navbar";
import { Product } from "./Pages/Product/Product";
import { Services } from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <Product />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
