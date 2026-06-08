import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import 'swiper/css';
import "./hero.scss";
import RevealWord from "../revealword/revealword";
import { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from 'swiper/modules';

export default function Hero({ projects, isDesktop, isTablet }) {
    const [index, setIndex] = useState(0)
    const swiperRef = useRef(null);
    const heroSwiperRef = useRef(null);
    const isScrolling = useRef(false);
    const location = useLocation()

    useEffect(() => {
        heroSwiperRef.current?.slideTo(index);
        swiperRef.current?.slideTo(index);
    }, [index]);

    const getSlidesPerView = () => {
        if (isDesktop) return 8;
        if (isTablet) return 6;
        return 3;
    };

    const getSpacesBetween = () => {
        if (isDesktop) return 20;
        if (isTablet) return 18;
        return 6;
    };

    const initialXList = ["-500%", "-500%", "-500%", "-500%"]
    const initialYList = ["10%", "-20%", "-80%", "-100%"]
    const animateXList = ["-160%", "-140%", "40%", "60%"]
    const animateYList = ["10%", "-55%", "-45%", "-120%"]

    const mediaList = [
        projects[index]?.videos[0],
        projects[index]?.images[0],
        projects[index]?.videos[1],
        projects[index]?.images[1]
    ]

    return (
        <motion.section 
            onWheel={(e) => {
                if (isScrolling.current) return;

                isScrolling.current = true;

                if (e.deltaY > 0) {
                    setIndex(prev => Math.min(prev + 1, projects.length - 1));
                }

                if (e.deltaY < 0) {
                    setIndex(prev => Math.max(prev - 1, 0));
                }

                setTimeout(() => {
                    isScrolling.current = false;
                }, 500);
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={(event, info) => {
                if (info.offset.x < -100) {
                    setIndex(prev => Math.min(prev + 1, projects.length - 1));
                }
                if (info.offset.x > 100) {
                    setIndex(prev => Math.max(prev - 1, 0));
                }
            }}
            className="hero"
        >
            <div                
                className="hero__wrapper"
            >
                {!isDesktop &&
                    <Swiper 
                        onSwiper={(swiper) => {
                            heroSwiperRef.current = swiper;
                        }}
                        allowTouchMove={false}
                        slidesPerView={1.4}
                        className="hero__slider"
                        centeredSlides={true}
                        spaceBetween={16}                        
                    >
                        <div>
                            {projects?.map((project, i) => (
                                <SwiperSlide 
                                    key={project.id + i}
                                >
                                    <motion.div 
                                        initial={{ x: 50 }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "-100%" }}
                                        transition={{ duration: 0.4, delay: i / 10}}
                                        className="hero__card"
                                    >
                                        <img 
                                            loading="lazy"
                                            className="hero__card-image" 
                                            src={project.images[0]} 
                                            alt={project.alts[0]} 
                                        />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                }
                {isDesktop ?
                    <div className="hero__desktop">
                        <h2 className="hero__desktop-title" style={{ color : projects[index]?.color}}>
                            <AnimatePresence mode="wait">
                                <RevealWord 
                                    key={index + projects[index]?.id}
                                    text={projects[index]?.name}
                                    color={projects[index]?.color}
                                    justify={'center'}
                                    delay={0}
                                />
                            </AnimatePresence>
                        </h2>
                        <AnimatePresence mode="wait">
                            <div className="hero__desktop-gallery" key={location}>
                                <motion.div 
                                    key={location + projects[index]?.id}
                                    initial={{ x: initialXList[0], y: initialYList[0] }}
                                    animate={{ x: animateXList[0], y: animateYList[0] }}
                                    exit={{  x: "-500%", y: animateYList[0] }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    style={{ zIndex: "1" }}
                                    className="hero__desktop-wrapper hero__desktop-wrapper--1"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.video
                                            key={projects[index]?.id + index}                      
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="hero__desktop-video"
                                            src={mediaList[0]}
                                            autoPlay
                                            loop
                                            muted
                                        >

                                        </motion.video>
                                    </AnimatePresence> 
                                </motion.div>
                                <motion.div 
                                    key={location.pathname + projects[index]?.id}
                                    initial={{ x: initialXList[1], y: initialYList[1] }}
                                    animate={{ x: animateXList[1], y: animateYList[1] }}
                                    exit={{  x: "-500%", y: animateYList[1] }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hero__desktop-wrapper hero__desktop-wrapper--1"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.img 
                                            key={index}                      
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="hero__desktop-image"
                                            src={mediaList[1]}
                                            loading="lazy"
                                            alt={projects[index]?.alts[0]} 
                                        />   
                                    </AnimatePresence> 
                                </motion.div>
                                <motion.div 
                                    key={location + projects[index]?.id + index}
                                    initial={{ x: initialXList[2], y: initialYList[2] }}
                                    animate={{ x: animateXList[2], y: animateYList[2] }}
                                    exit={{  x: "-500%", y: animateYList[2] }}
                                    style={{ zIndex: "1" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hero__desktop-wrapper hero__desktop-wrapper--1"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.video
                                            key={projects[index]?.id + index}                      
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="hero__desktop-video"
                                            src={mediaList[2]}
                                            autoPlay
                                            loop
                                            muted
                                        >

                                        </motion.video>
                                    </AnimatePresence> 
                                </motion.div>
                                <motion.div 
                                    key={index + location.pathname + projects[index]?.id}
                                    initial={{ x: initialXList[3], y: initialYList[3] }}
                                    animate={{ x: animateXList[3], y: animateYList[3] }}
                                    exit={{  x: "-500%", y: animateYList[3] }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hero__desktop-wrapper hero__desktop-wrapper--1"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.img 
                                            key={index}                      
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="hero__desktop-image"
                                            src={mediaList[3]}
                                            loading="lazy"
                                            alt={projects[index]?.alts[1]}
                                        />   
                                    </AnimatePresence> 
                                </motion.div>                            
                            </div>
                        </AnimatePresence>
                        <NavLink
                            to={`/${projects[index]?.id}`}
                            className="hero__desktop-link"
                        >
                            Show Project
                        </NavLink>
                    </div>
                :
                    <div className="hero__content">
                        <h2>
                            <AnimatePresence mode="wait">
                                <RevealWord
                                    key={index}
                                    text={projects[index]?.name}
                                    color={projects[index]?.color}
                                    delay={0}
                                    justify={"center"}
                                />
                            </AnimatePresence>
                        </h2>
                        <NavLink
                            to={`/${projects[index]?.id}`}
                            className="hero__content-link"
                        >
                            Show Project
                        </NavLink>
                    </div>
                }
            </div>
            <div className="hero__footer">
                {isDesktop &&
                    <>
                        <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="hero__footer-info hero__footer-info--left"
                        >
                            <h3 style={{ color: projects[index]?.color}}>Year</h3>
                            <p>{projects[index]?.year}</p>
                        </motion.div>
                        <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="hero__footer-info hero__footer-info--right"
                        >
                            <h3 style={{ color: projects[index]?.color}}>Type</h3>
                            <p>{projects[index]?.type}</p>
                        </motion.div>
                    </>
                }
                <div className="hero__footer-wrapper">
                    <Swiper 
                        allowTouchMove={false}
                        modules={[Navigation]}
                        slidesPerView={getSlidesPerView()}
                        className="hero__footer-slider"
                        centeredSlides={true}
                        spaceBetween={getSpacesBetween()}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {projects?.map((project, i) => (
                            <SwiperSlide 
                                onClick={() => {
                                    setIndex(i);
                                    // recentre la miniature cliquée
                                    swiperRef.current?.slideTo(i);
                                }}
                                key={project.id + i}                               
                            >
                                <motion.div 
                                    initial={{ x: 100 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: 100 }}
                                    transition={{ duration: 0.4, delay: i / 10 }}
                                    viewport={{ once: true }}
                                    className="hero__footer-card"
                                >
                                    <img 
                                        className="hero__footer-image" 
                                        loading="lazy"
                                        src={project.images[0]} 
                                        alt={project.alts[0]} 
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="hero__footer__overlay"></div>
                    <div className="hero__footer-controls">
                        <button
                            aria-label="Previous Project"
                            onClick={() => index > 0 && setIndex(prev => Math.max(prev - 1, 0))}
                            className={`hero__footer-button hero__footer-button--prev${index === 0 ? " hero__footer-button--disabled" : ""}`}
                        >
                            <i className="fa-solid fa-angle-left" />
                        </button>
                        <button
                            aria-label="Next Project"
                            onClick={() => index < projects.length && setIndex(prev => Math.min(prev + 1, projects.length - 1))}
                            className={`hero__footer-button hero__footer-button--next${index === projects.length - 1 ? " hero__footer-button--disabled" : ""}`}
                        >
                            <i className="fa-solid fa-angle-right" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}