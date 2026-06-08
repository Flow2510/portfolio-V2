import { useState } from 'react';
import './header.scss';
import { AnimatePresence, motion } from 'motion/react';
import Menu from '../menu/menu';

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const date = new Date().toLocaleString("en-EN", {
        month: "long",
        year: "2-digit"
    });
    
    return(
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__title'>
                    <h1 className='header__title-text'>Florian / Available from {date}'</h1>
                </div>
                <AnimatePresence mode='wait'>
                    <motion.button                            
                        className='header__menu' 
                        onClick={() => setMenuIsOpen(prev => !prev)}
                    >
                        <span className={`header__menu-open${menuIsOpen ? " header__menu-open--active" : ""}`} >Menu</span>
                        <span className={`header__menu-close${menuIsOpen ? " header__menu-close--active" : ""}`} >Close</span>
                    </motion.button>
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {menuIsOpen &&
                    <Menu 
                        menuIsOpen={menuIsOpen}
                        setMenuIsOpen={setMenuIsOpen}
                    />
                }
            </AnimatePresence>
        </header>
    )
}