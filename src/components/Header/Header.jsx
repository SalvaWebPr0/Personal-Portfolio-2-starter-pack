import React, {useState} from 'react';
import css from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();

    return (
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once:false, amount:0.25}}
        className={`paddings ${css.wrapper}`}
        style={{boxShadow: headerShadow}}>

            <div className={`flexCenter innerWidth ${css.container}`}>
                
                <div className={css.name}>
                    SalvaWeb Pro
                </div>

                <ul 
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>
                    <li><a href="">Servicios</a></li>
                    <li><a href="Experiencia">Experiencia</a></li>
                    <li><a href="Portfolio">Portfolio</a></li>
                    <li><a href="Testimonials">Testimonios</a></li>
                    <li className={`flexCenter ${css.phone}`}><p>+52 353 184 7773 </p><BiPhoneCall size={"40px"}/></li>
                </ul>
                  {/* Solo para pantallas pequeñas y medianas */}
                <div className={css.menuIcon} onClick={()=>setMenuOpened( (prev)=> !prev )}>
                <BiMenuAltRight size={30}/>
                </div>

            </div>

        </motion.div>
    )
}

export default Header