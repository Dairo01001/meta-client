import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Project, ProjectsProps } from "@/types/project";

export const Projects = ({ projectList }: ProjectsProps) => {
  const { projectId } = useParams();

  const project = projectList.find((proj: Project) => proj.href === projectId);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1] "
        autoPlay
        loop
        muted
      >
        <source src={project.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

       {/* Máscara oscura sobre el video */}
       <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>

      {/* Contenedor principal para el logo y el contenido */}
      <div className="relative z-10 flex items-center justify-center mb-10 max-w-6xl mx-auto px-8">
        <img
          src={project.hrefLogo}
          alt={`${project.title} logo`}
          className="w-48 h-48 mr-8"
        />

        {/* Contenido (título, descripción y botón) */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-white text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-white text-xl leading-relaxed max-w-3xl mb-6">
            {project.longdescription}
          </p>
           <div className="flex justify-center">
            <Button asChild>
              <Link
                to={project.urlvisor}
                className="px-6 py-2 w-auto"
              >
                Descargar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
