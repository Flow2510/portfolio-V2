import RevealWord from '../revealword/revealword'
import './aboutinfoitem.scss'

export default function AboutInfoItem({ title, isDesktop, list }){
    return(
        <div className='about-info-item'>
            <h3 className='about-info-item__title'>
                <RevealWord
                    text={title}
                    color={"inherit"}
                    justify={isDesktop ? "left" : "center"}
                    delay={0.2}
                />
            </h3>
            <ul className='about-info-item__list'>
                {list?.map((l, i) => (
                    <li key={l + i} className='about-info-item__list-item'>
                        <RevealWord
                            text={l}
                            color={"inherit"}
                            justify={isDesktop ? "left" : "center"}
                            delay={0.2}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}