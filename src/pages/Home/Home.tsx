import { NavBar } from "@/components";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <div className={`${styles.container} h-full flex flex-col items-center justify-center krona-one-regular text-7xl`}>
        <span>Bienvenidos</span>
        <span>a Uniamazonia 3D</span>
      </div>
    </div>
  );
};

export default Home;
