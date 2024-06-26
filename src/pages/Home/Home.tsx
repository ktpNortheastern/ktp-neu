import styles from "./Home.module.css";
import { FaLocationDot } from "react-icons/fa6";

function Home() {
  return (
    <>
      <h1>Kappa Theta Pi</h1>
      <h2>Professional Technology Fraternity</h2>
      <h3><FaLocationDot className={styles.icon} />Boston, MA</h3>
    </>
  );
}

export default Home;
