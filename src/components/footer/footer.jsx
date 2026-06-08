import { motion } from 'motion/react'
import './footer.scss'

export default function Footer() {
    return(
        <motion.footer 
            className='footer'
        >
            <div className='footer__line'></div>
            <div className='footer__content'>
                <h3 className='footer__content-title' >Code by Florian</h3>
                <a className='footer__content-link' href="mailto:sendra.florian@gmail.com" target='_blank'>
                    <span>Send Mail</span>
                    <span><i className="fa-solid fa-arrow-right footer__content-link--arrow"></i></span>
                </a>
            </div>
        </motion.footer>
    )
}