import { Routes, Route } from "react-router-dom";
import { Product, SubProduct } from "./product";
import NavBar from "./navbar";
import Slider from "./slider";
import Card from "./card";
import Footer from "./footer";
import { AboutUs } from "./aboutus";

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <NavBar />
            <Slider />
            <AboutUs />
            <Card />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="paints"
        element={
          <>
            <Product name="PAINTS" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="paints/undercoats"
        element={
          <>
            <NavBar />
            <SubProduct name="Undercoats" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="paints/interioremulsions"
        element={
          <>
            <NavBar />
            <SubProduct name="Interior Emulsions" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="paints/exterioremulsions"
        element={
          <>
            <NavBar />
            <SubProduct name="Exterior Emulsions" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="tilingsolutions"
        element={
          <>
            <Product name="TILING SOLUTIONS" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="tilingsolutions/tileadhesives"
        element={
          <>
            <NavBar />
            <SubProduct name="Tile Adhesives" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="tilingsolutions/tilegrout"
        element={
          <>
            <NavBar />
            <SubProduct name="Tile Grout" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="tilingsolutions/tilecleaner"
        element={
          <>
            <NavBar />
            <SubProduct name="Tile Cleaner" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="constructionchemicals"
        element={
          <>
            <Product name="CONSTRUCTION CHEMICALS" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="constructionchemicals/waterproofing"
        element={
          <>
            <NavBar />
            <SubProduct name="Water Proofing" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="constructionchemicals/bondingagents"
        element={
          <>
            <NavBar />
            <SubProduct name="Bonding Agents" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="constructionchemicals/admixture"
        element={
          <>
            <NavBar />
            <SubProduct name="Admixture" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="kitchensinks"
        element={
          <>
            <Product name="KITCHEN SINKS" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="kitchensinks/glossyfinish"
        element={
          <>
            <NavBar />
            <SubProduct name="Glossy Finish" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="kitchensinks/mattfinish"
        element={
          <>
            <NavBar />
            <SubProduct name="Matt Finish" />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="kitchensinks/handmadesinks"
        element={
          <>
            <NavBar />
            <SubProduct name="Handmade Sinks" />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
