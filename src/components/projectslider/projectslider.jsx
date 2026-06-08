import { motion } from 'motion/react';
import './projectslider.scss';
import { SwiperSlide, Swiper } from 'swiper/react';

export default function ProjectSlider({ project }) {
    return(
        <motion.div 
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className='project-slider__wrapper'
        >
            <Swiper 
                slidesPerView={1.4}
                spaceBetween={16}
                className='project-slider'
                style={{ maxHeight: 450 }}
            >
                {project.images.map((image, i) => (
                    <SwiperSlide key={i} className='project-slider__card'>
                        <motion.div
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i / 10}}
                        >
                            <img loading='lazy' src={image} alt="" className='project-slider__card-image'/>
                        </motion.div>
                    </SwiperSlide>
                ))}
                {project.videos?.map((video, i) => (
                    <SwiperSlide key={i} className='project-slider__card'>
                        <motion.div
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i / 10}}
                        >
                            <video className='project-slider__card-image' src={video} loop autoPlay muted></video>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    )
}