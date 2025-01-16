import { Button } from '@/components'

export const LabIot = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/projects/lab-iot.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="flex flex-col items-center justify-center gap-10"
    >
      <div className="max-md: flex flex-col items-start justify-center gap-4">
        <h2 className="text-3xl font-bold">
          Visor <strong className="text-blue-400">Laboratorio IoT</strong>
        </h2>
        <p className="text-2xl">
          Adéntrate en el entorno virtual Uniamazonia 3D donde podrás recorrer
          diferentes monumentos de nuestra region
        </p>
        <Button className="text-1xl bg-blue-400 pt-3 text-white">
          Descargar
        </Button>
      </div>
    </div>
  )
}

export default LabIot
