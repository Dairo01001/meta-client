import { Link } from 'react-router-dom'

export const LogoLab = () => {
  return (
    <Link to="/" className="flex h-full items-center gap-2">
      <img src="/logos/lab-iot-logo.png" alt="Logo" className="ml-20" />
      <h1 className="krona-one-regular">Laboratorio IoT</h1>
    </Link>
  )
}
