import { Button } from '@/components'

export const Ua3d = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/projects/ua3d.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="flex flex-col items-center justify-center gap-10"
    >
      <div className="max-md: flex flex-col items-start justify-center gap-4">
        <h2 className="text-3xl font-bold">
          Visor <strong className="text-red-600">UA</strong>
          <strong className="text-green-500">3D</strong>
        </h2>
        <p className="text-2xl">
          Adéntrate en el entorno virtual Uniamazonia 3D donde podrás recorrer
          diferentes monumentos de nuestra region
        </p>
        <Button className="text-1xl h-11 bg-green-500 pt-3 text-white">
          Descargar
        </Button>
      </div>
    </div>
  )
}

export default Ua3d
