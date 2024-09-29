export interface Project {
  title: string;
  href: string;
  description: string;
  hrefLogo: string;
  longdescription: string;
  urlvisor: string;
  videoUrl: string;
  colors: {
    root: {
      background: string;
      foreground: string;
      card: string;
      cardForeground: string;
      primary: string;
      primaryForeground: string;
      // Más colores si es necesario
    };
    dark: {
      background: string;
      foreground: string;
      card: string;
      cardForeground: string;
      primary: string;
      primaryForeground: string;
      // Más colores en modo oscuro si es necesario
    };
  };
}


export interface ProjectsProps {
  projectList: Project[];
}
