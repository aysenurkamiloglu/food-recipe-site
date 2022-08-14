import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiCroissant, GiChopsticks} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import style from "./Categories.module.scss";

const Categories = () => {
    return(
        <div className={style.categorie}>
            <NavLink to={"/cuisine/French"} className={style.categorie__cuisine}>
                <GiCroissant className={style.categorie__cuisine__svg}/>
                <h4 className={style.categorie__cuisine__header}>French</h4>
            </NavLink>
            <NavLink to={"/cuisine/Italian"} className={style.categorie__cuisine}>
                <FaPizzaSlice className={style.categorie__cuisine__svg}/>
                <h4 className={style.categorie__cuisine__header}>Italian</h4>
            </NavLink>
            <NavLink to={"/cuisine/American"} className={style.categorie__cuisine}>
                <FaHamburger className={style.categorie__cuisine__svg}/>
                <h4 className={style.categorie__cuisine__header}>American</h4>
            </NavLink>
            <NavLink to={"/cuisine/Chinese"} className={style.categorie__cuisine}>
                <GiChopsticks className={style.categorie__cuisine__svg}/>
                <h4 className={style.categorie__cuisine__header}>Chinese</h4>
            </NavLink>
        </div>
    )
}

export default Categories;