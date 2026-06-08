import { useParams } from "react-router-dom";
import HeaderProject from "../components/headerproject/headerproject";
import ProjectSlider from "../components/projectslider/projectslider";
import ProjectInfo from "../components/projectinfo/projectinfo";
import { AnimatePresence } from "motion/react";
import ProjectDesktop from "../components/projectdesktop/projectdesktop";
   
export default function ProjectPage({projects, isDesktop }) {
    const { id } = useParams()

    if (!projects || projects.length === 0) {
        return <div>Chargement des projets...</div>; 
    }

    const currentIndex = projects?.findIndex((p) => p.id === id);
    const project = projects[currentIndex];

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    const nextProject = projects[(currentIndex + 1) % projects.length];

    return(
        <>
            <HeaderProject nextProject={nextProject}/>
            <main
                style={{ backgroundColor: `color-mix(in srgb, ${project.color},  transparent 90%)` }}
            >
                {!isDesktop ?
                    <AnimatePresence mode="wait">
                        <div key={id}>
                            <ProjectSlider project={project} />
                            <ProjectInfo project={project} />
                        </div>
                    </AnimatePresence>
                :
                    <AnimatePresence mode="wait">
                        <div key={id}>
                            <ProjectDesktop 
                                project={project}
                            />
                        </div>
                    </AnimatePresence>
                }
            </main>
        </>
    )
}