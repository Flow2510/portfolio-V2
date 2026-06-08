import RevealWord from '../revealword/revealword'
import './abouthero.scss'

export default function AboutHero() {
    return(
        <section className='about-hero'>
            <div className='about-hero__content'>
                <h2>
                    <RevealWord 
                        text={"Développeur front-end créatif."}
                        color={"inherit"}
                        justify={"center"}
                        delay={0.2}
                    />
                </h2>
            </div>
        </section>
    )
}