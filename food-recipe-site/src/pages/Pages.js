import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./CuisinePages/Cuisine";
import Searched from "./Searched/Searched";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import { AnimatePresence } from "framer-motion";


const Pages = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:recipeName" element={<RecipeDetail />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages;