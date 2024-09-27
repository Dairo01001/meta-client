import Logo from "./Logo";
import NavBarAvatar from "./NavBarAvatar";
import NavBarMenu from "./NavBarMenu";
import ThemeModeToggle from "./ThemeModeToggle";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 shadow-sm">
      <Logo />
      <div className="flex items-center gap-5">
        <NavBarMenu />
        <ThemeModeToggle />
        <NavBarAvatar />
      </div>
    </nav>
  );
};

export default NavBar;
