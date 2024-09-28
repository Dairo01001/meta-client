import { Card, CardProps } from "./components";

const owners: CardProps[] = [
  {
    image: "/owners/ortiz.png",
    title: "Analista de Software",
    fullName: "Angie Alexandra Ortiz Palacios",
  },
  {
    image: "/owners/toquica.png",
    title: "Full Stack Developer",
    fullName: "Jose Daniel Toquica Agudelo",
  },
  {
    image: "/owners/cenon.png",
    title: "Diseñador 3D",
    fullName: "Yerson Arley Cenon Cabrera",
  },
  {
    image: "/owners/gallejo.png",
    title: "Lider de Proyecto",    
    fullName: "Lubeimar Eduardo Gallejo Ruiz",
  },
  {
    image: "/owners/verastegui.png",
    title: "Administrador base de datos",
    fullName: "Vera Estégui Estévez",
  },
  {
    image: "/owners/millan.png",
    title: "Arquitecto de Software",
    fullName: "Edwin Eduardo Millán Rojas",
  }
]


export const About = () => {
  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow p-10 w-full flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl">¿Que es Uniamazonia 3D?</h2>
        <div className="flex gap-3 items-center">
          <img src="/logo.svg" alt="Uniamazonia 3D" className="h-52 w-auto" />
          <p className="max-w-2xl">
            Los estudiantes y profesores podrán explorar el campus virtualmente,
            caminando por pasillos, entrando en aulas, y explorando espacios al
            aire libre. Esto podría ofrecer una sensación más inmersiva que los
            entornos virtuales tradicionales. En Uniamazonia 3D se pueden llevar
            a cabo clases en línea en entornos virtuales específicos, con
            profesores y estudiantes interactuando en tiempo real. Esto incluye
            pizarras virtuales, herramientas de colaboración y chat de voz.
            Generando un ambiente único para la enseñanza y el aprendizaje.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-secondary">
        <span className="text-3xl text-center m-10 text-green-500">Integrantes</span>
        <div className="flex flex-wrap gap-3 justify-center">
          {owners.map((owner) => (
            <Card key={owner.fullName} {...owner} />
          ))}
        </div>
        <div className="flex gap-3 items-center justify-center mt-4">
          <img src="/logo-uniamazonia.png" alt="Logo Universidad de la Amazonia" className="h-24 w-auto" />
          <img src="/logo-semillero-red.png" alt="Logo Semillero Red" className="h-24 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
