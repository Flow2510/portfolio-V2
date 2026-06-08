import { motion } from 'motion/react';
import './revealword.scss';

export default function RevealWord({text, color, justify, delay }) {
    const words = text?.split(" ");

    return(
        <span className='reveal-word' style={{ justifyContent: justify }}>
            {words?.map((word, i) => (
                <span
                    className='reveal-word__word'
                    key={i + word}
                >
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ 
                            y: "0%",
                            transition: { duration: 0.5, ease: 'easeInOut', delay: delay } 
                        }}
                        exit={{ 
                            y: "-100%",
                            transition: { duration: 0.5, ease: 'easeInOut' }
                        }}
                        style={{ color: color, display: "inline-block" }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
} 