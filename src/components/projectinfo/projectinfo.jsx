import { motion } from 'motion/react';
import './projectinfo.scss';
import RevealWord from '../revealword/revealword';
import InfoItem from '../infoitem/infoitem';

export default function ProjectInfo({ project }) {

    return(
        <section className='project-info'>
            <div className='project-info__content'>
                <h2 className='project-info__content-title'
                    style={{ color: project.color }}
                >
                    <RevealWord
                        text={project.name}
                    />
                </h2>
                <div className='project-info__content-wrapper'>
                    <div className='project-info__content-gallery'>
                        <InfoItem
                            text={project.type}
                            title={"Type"}
                            color={project.color}
                        />
                        <InfoItem
                            text={project.year}
                            title={"Year"}
                            color={project.color}
                        />                        
                    </div>    
                    <InfoItem
                        text={project.text}
                        title={"Overview"}
                        color={project.color}
                    />
                    {project.link && 
                        <div style={{ overflow: "hidden" }}>
                            <motion.a 
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                exit={{ y: "-100%" }}
                                transition={{ duration: 0.4 }}
                                href={project.link} 
                                className='project-info__content-link' 
                                target='_blank'
                            >
                                <span>{project.name}</span>
                                <span><i className="fa-solid fa-arrow-right project-info__content-link--arrow"></i></span>
                            </motion.a>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}