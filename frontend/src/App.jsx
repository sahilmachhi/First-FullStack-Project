import { Routes, Route } from "react-router-dom";
import { CreateProduct } from "./pages/CreateProduct";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create_product" element={<CreateProduct />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
