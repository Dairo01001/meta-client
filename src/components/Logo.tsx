import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="h-full flex items-center gap-2">
      <img src="/logo.svg" alt="Logo" className="ml-20" />
      <h1 className="krona-one-regular">UNIAMAZONIA 3D</h1>
    </Link>
  );
};

export default Logo;
