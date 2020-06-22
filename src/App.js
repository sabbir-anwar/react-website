import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import BootstrapCarousel from "./components/BootstrapCarousel";
import ProductList from "./components/ProductList";
import StoreLocator from "./components/StoreLocator";
import FormSection from "./components/FormSection";

function App() {
  const portfolioLinks = [
    {
      title: "Nourshing Organics face Cream & Moisturizer",
      caption: "Yardley",
      logo: "assets/img/item-1.png",
      price: "1,000.00",
    },
    {
      title: "Natural Hue Lipstick",
      caption: "Yardley",
      logo: "assets/img/item-2.png",
      price: "1,000.00",
    },
    {
      title: "Intense Matte",
      caption: "Yardley",
      logo: "assets/img/item-3.png",
      price: "1,000.00",
    },
    {
      title: "Natural Hue Lipstick",
      caption: "Yardley",
      logo: "assets/img/item-4.png",
      price: "1,000.00",
    },
  ];

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BootstrapCarousel></BootstrapCarousel>
      <main id="main">
        <ProductList portfolioLinks={portfolioLinks}></ProductList>
        <StoreLocator></StoreLocator>
        <FormSection></FormSection>
      </main>
      <footer id="footer">
        <div className="container py-3">
          <div className="copyright">
            <p>Copyright Beatnik 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
