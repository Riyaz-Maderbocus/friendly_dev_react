import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";
type FeaturedProjectProps = {
    projects: Project[],
    count: number
}

const FeaturedProjects = ({projects, count = 4}:FeaturedProjectProps) => {
    const featured = projects.filter((project)=> project.featured).slice(0, count);
    return ( <section>
        <h2 className="text-2xl font-bold mb-6 ttext-gray-200">⭐ Featured Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((project)=> (
                <ProjectCard project={project} key={project.id}/>
            ))}
        </div>
    </section> );
}
 
export default FeaturedProjects;