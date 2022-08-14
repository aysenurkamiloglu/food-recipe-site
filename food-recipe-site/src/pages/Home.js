import Popular from "../components/Popular/Popular";
import Vegan from "../components/Vegan/Vegan";
import {motion} from "framer-motion";

const Home = () => {
    return(
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
            <Popular></Popular>
            <Vegan></Vegan>
        </motion.div>
    )
}

export default Home;