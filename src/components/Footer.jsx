import styles from "./Footer.module.css";
import {
  FaSquareThreads,
  FaGithub,
  FaInstagram,
  FaThreads,
} from "react-icons/fa6";

const Footer = () => {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });

  return (
    <footer>
      <div className={styles.textContainer}>
        <p>© Aditya Roychoudhary - {formattedDate} </p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li>
            <a href="https://www.instagram.com/arx9781/">
              Instagram <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.threads.net/@arx9781">
              Threads <FaThreads />
            </a>
          </li>
          <li>
            <a href="https://github.com/arx9781">
              Github <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
