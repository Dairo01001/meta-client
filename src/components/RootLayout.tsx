import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {children}
    </div>
  );
};

export default RootLayout;
