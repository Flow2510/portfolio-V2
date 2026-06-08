import Header from "../components/header/header";
import Hero from "../components/hero/hero";

export default function Home({ projects, isDesktop, isTablet }) {
    return(
        <>
            <Header />
            <main>
                <Hero projects={projects} isDesktop={isDesktop} isTablet={isTablet} />
            </main>
        </>
    )
}