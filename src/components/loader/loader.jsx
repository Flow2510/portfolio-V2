import { useEffect, useState } from 'react';
import './loader.scss';
import { AnimatePresence, motion } from 'motion/react';

export default function Loader() {
    const [numberLoading, setNumberLoading] = useState(0)
     
    useEffect(() => {
        let count = 0;

        const timer = setInterval(() => {
            count++;

            if (count === 6) {
                setNumberLoading(Math.floor(Math.random() * (30 - 10 + 1)) + 10)
            } 

            else if (count === 12) {
                setNumberLoading(Math.floor(Math.random() * (60 - 40 + 1)) + 40)
            }

            else if (count === 18) {
                setNumberLoading(Math.floor(Math.random() * (95 - 70 + 1)) + 70)
            }

            else if (count === 24) {
                setNumberLoading(100)
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer)
    }, [])
    
    return(
        <motion.div 
            initial={{ y: 0 }}
            exit={{ y : "-100%" }}
            transition={{ duration: 0.5 }}
            className='loader'
        >
            <div className='loader__content'>
                <span className='loader__content-text'>Loading...</span>
                <span className='loader__content-number' style={{ overflow: 'hidden' }}>
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={numberLoading}
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "-100%"}}
                            transition={{ duration: 0.2}}
                        >
                            {numberLoading}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </div>
        </motion.div>
    )
}