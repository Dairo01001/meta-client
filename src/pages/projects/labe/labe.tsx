import { Button } from '@/components'

export const Labe = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <video
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -100,
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, #171717 89.58%)'
        }}
        autoPlay
        loop
        muted
      >
        <source
          src="http://131.100.50.247/source-ua3d/videos/Zogui.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex max-w-[1000px] flex-col items-start justify-center gap-4">
        <h2 className="text-5xl font-bold">
          Visor <strong className="text-orange-600">Labe</strong>
        </h2>
        <p className="text-2xl">
          Para lograr la mejor experiencia en Uniamazonia 3D le recomendamos
          descargar el visor link, esto le permitirá mejorar la velocidad de la
          aplicación y obtener una experiencia significativa relacionada con el
          campus de la Universidad de la Amazonia. Bienvenido a Uniamazonia 3D.
          Su mejor experiencia en los procesos de enseñanza y aprendizaje.
        </p>
        <Button className="text-1xl h-11 bg-orange-600 pt-3 text-white">
          Descargar
        </Button>
      </div>
    </div>
  )
}

export default Labe
