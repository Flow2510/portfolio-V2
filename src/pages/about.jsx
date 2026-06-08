import { motion } from "motion/react";
import AboutHero from "../components/abouthero/abouthero";
import AboutInfo from "../components/aboutinfo/aboutinfo";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function About({ isDesktop }) {
    return(
        <>
            <Header />
            <motion.main
            >
                <AboutHero />
                <AboutInfo isDesktop={isDesktop}/>
            </motion.main>
            <Footer />
        </>
    )
}