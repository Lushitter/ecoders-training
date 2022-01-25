import Image from "next/image";
import styles from "../styles/Card.module.css";
function Card({title, description, images, widht, height}) {

    return (
    <div className={styles.container}>
    <h2>{title}</h2>
    <p>{description}</p>
    <img src={images} alt ={title} width={widht} height={height}/>
    </div>
    );
}

export default Card;