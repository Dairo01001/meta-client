import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div
      className={`${styles.container} flex-grow flex flex-col items-center justify-center krona-one-regular text-7xl`}
    >
      <span>Bienvenidos</span>
      <span>a Uniamazonia 3D</span>
    </div>
  );
};

export default Home;
