import AboutInfoItem from '../aboutinfoitem/aboutinfoitem';
import RevealWord from '../revealword/revealword';
import './aboutinfo.scss';

export default function AboutInfo({ isDesktop }) {
    const seekList = [
        "Un premier poste de dev front-end",
        "CDD / CDI / Stage",
        "Une équipe où apprendre et progresser vite"
    ]

    const learning = [
        "React Three Fiber",
        "Advanced Animations",
        
        "MongoDB"
    ]

    const stackList = [
        "React",
        "JavaScript",
        "HTML / CSS",
        "Sass",
        "TailWind",
        "GSAP/MOTION"
    ]

    const expertiseList = [
        "Intégration front-end soignée",
        "Animations & interactions (GSAP)",
        "Composants React réutilisables",
        "Responsive & accessibilité"
    ]

    const localisationList = [
        "Basé à Perpignan",
        "Ouvert au remote & hybride",
        "Disponible dès maintenant",
        "Mobilité possible selon le projet"
    ]

    return(
        <section className='about-info'>
            <div className='about-info__content'>
                <p className='about-info__content-text'>
                    <RevealWord
                        text={"Je construis des interfaces interactives, fluides et accessibles. Expert en React et passionné par les animations complexes (GSAP/MOTION), je transforme les concepts visuels en expériences web immersives."}
                        color={"inherit"}
                        justify={isDesktop ? "left" : "center"}
                        delay={0.2}
                    />
                    <RevealWord
                        text={"Actuellement en quête de mon premier défi professionnel (CDD/CDI/Stage), j'apporte une attention toute particulière aux détails et au ressenti utilisateur. Ouvert au remote et à la mobilité, je suis prêt à intégrer une équipe pour contribuer à des projets innovants."}
                        color={"inherit"}
                        justify={isDesktop ? "left" : "center"}
                        delay={0.3}
                    />
                </p>                
            </div>
            <div className='about-info__wrapper'>    
                <div className='about-info__stack'>
                    <h3 className='about-info__stack-title'>Technos</h3>
                    <ul className='about-info__stack-list'>
                        {stackList.map((stack, i) => (
                            <li className='about-info__stack-item' key={stack + i}> 
                                {stack}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='about-info__stack'>
                    <h3 className='about-info__stack-title'>En Cours</h3>
                    <ul className='about-info__stack-list'>
                        {learning.map((stack, i) => (
                            <li className='about-info__stack-item' key={stack + i}> 
                                {stack}
                            </li>
                        ))}
                    </ul>
                </div>
                <AboutInfoItem 
                    isDesktop={isDesktop}
                    title={"Je recherche"}
                    list={seekList}
                />
                <AboutInfoItem 
                    isDesktop={isDesktop}
                    title={"Expertise"}
                    list={expertiseList}
                />
                <AboutInfoItem 
                    isDesktop={isDesktop}
                    title={"Localisation"}
                    list={localisationList}
                />
                <div className='about-info__contact'>
                    <h3 className='about-info__contact-title'>Contact</h3>
                    <ul className='about-info__contact-list'>
                        <li><a className='about-info__contact-link' href="mailto:sendra.florian@gmail.com" target='_blank'>sendra.florian@gmail.com <i className="fa-solid fa-arrow-right about-info__contact-arrow"></i></a></li>
                        <li><a className='about-info__contact-link' href="https://github.com/Flow2510" target='_blank'>Github <i className="fa-solid fa-arrow-right about-info__contact-arrow"></i></a></li>
                        <li><a className='about-info__contact-link' href="https://www.linkedin.com/in/florian-sendra-3270961a1/" target='_blank'>Linkedin <i className="fa-solid fa-arrow-right about-info__contact-arrow"></i></a></li>
                        <li><a className='about-info__contact-link' href="/public/CV.pdf" target='_blank'>CV <i className="fa-solid fa-arrow-right about-info__contact-arrow"></i></a></li>
                    </ul>
                </div>
            </div>            
        </section>
    )
}