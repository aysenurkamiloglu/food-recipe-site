import Popular from "../components/Popular/Popular";
import Vegan from "../components/Vegan/Vegan";
import Ketogenic from "../components/Ketogenic/Ketogenic";

import {motion} from "framer-motion";
import GlutenFree from "../components/GlutenFree/GlutenFree";

const Home = () => {
    return(
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
            <Popular></Popular>
            <Vegan></Vegan>
            <Ketogenic></Ketogenic>
            <GlutenFree></GlutenFree>
        </motion.div>
    )
}

export default Home;