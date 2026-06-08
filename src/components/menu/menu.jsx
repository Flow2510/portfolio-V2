import { NavLink } from 'react-router-dom';
import './menu.scss';
import { motion } from 'motion/react';
import { animate, delay } from 'motion';

export default function Menu({ menuIsOpen, setMenuIsOpen }) {
    const closeMenu = () => {
        setMenuIsOpen(prev => !prev)
    }

    return(
        <motion.div 
            className='menu'
            key={menuIsOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
            transition={{ duration: 0.5 }}
        >
            <nav className='menu__nav'>
                <NavLink className='menu__nav-link' to={'/'} onClick={closeMenu}>
                    <motion.span
                        key={menuIsOpen}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%", transition: { delay: 0.5} }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4 }}
                    >
                        Home
                    </motion.span>
                </NavLink>
                <NavLink className='menu__nav-link' onClick={closeMenu} to={'/about'}>
                    <motion.span
                        key={menuIsOpen}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%", transition: { delay: 0.5} }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4 }}
                    >
                        About
                    </motion.span>
                </NavLink>
            </nav>
            <div className='menu__contact'>
                <a className='menu__contact-link' href="http://www.google.com" target='_blank'>
                    <motion.span
                        key={menuIsOpen}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%", transition: { delay: 0.5} }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4 }}
                    >
                        Github
                    </motion.span>
                </a>
                <a className='menu__contact-link' href="http://www.google.com" target='_blank'>
                    <motion.span
                        key={menuIsOpen}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%", transition: { delay: 0.6} }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4 }}
                    >
                        Mail
                    </motion.span>
                </a>
                <a className='menu__contact-link' href="http://www.google.com" target='_blank'>
                    <motion.span
                        key={menuIsOpen}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%", transition: { delay: 0.7} }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.4 }}
                    >
                        Linkedin
                    </motion.span>
                </a>
            </div>
        </motion.div>
    )
}