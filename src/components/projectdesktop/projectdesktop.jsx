import { motion } from 'motion/react'
import './projectdesktop.scss'
import ProjectInfo from '../projectinfo/projectinfo'

export default function ProjectDesktop({ project }) {
    return(
        <section className='project-desktop'>
            <div className='project-desktop__content'>
                <ProjectInfo project={project}/>
            </div>
            <div className='project-desktop__gallery'>
                {project?.images?.map((image, i) => (
                    <div className='project-desktop__gallery-wrapper' key={project.id + i}>
                        <motion.img 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className='project-desktop__gallery-image' 
                            src={image} 
                            alt={project.alts[i]} 
                        />
                    </div>
                ))}
                {project?.videos?.map((video, i) => (
                    <div className='project-desktop__gallery-wrapper' key={project.id + i}>
                        <motion.video 
                            className='project-desktop__gallery-video'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            autoPlay 
                            muted 
                            loop 
                            aria-label={`Aperçu de l'interface du site ${project.name}`}
                        >
                            <source src={video} type="video/mp4"/>
                            <figcaption>Interface du site — {project.name}</figcaption>
                        </motion.video>
                    </div>
                ))}
            </div>
        </section>
    )
}