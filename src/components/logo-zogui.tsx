import { Link } from 'react-router-dom'

export const LogoZogui = () => (
  <Link to="/" className="flex h-full items-center gap-2">
    <img src="/logos/zogui-logo.png" alt="Logo" className="ml-20" />
    <h1 className="krona-one-regular">Zogui</h1>
  </Link>
)
