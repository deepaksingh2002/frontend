import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
