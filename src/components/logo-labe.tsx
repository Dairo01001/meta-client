import { Link } from 'react-router-dom'

export const LogoLabe = () => (
  <Link to="/" className="flex h-full items-center gap-2">
    <img src="/logos/labe-logo.png" alt="Logo" className="ml-20" />
    <h1 className="krona-one-regular">Lave</h1>
  </Link>
)
