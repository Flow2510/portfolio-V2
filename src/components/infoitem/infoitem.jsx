import RevealWord from "../revealword/revealword";
import './infoitem.scss'

export default function InfoItem({ color, title, text }) {
    return(
        <div className='info-item'>
            <h3>
                <RevealWord
                    text={title}
                    color={color}
                    delay={0.2}
                    justify={"flex-start"}
                />
            </h3>
            <p>
                <RevealWord 
                    text={text}
                    color={"inherit"}
                    delay={0.2}
                    justify={"flex-start"}
                />
            </p>
        </div>
    )
}