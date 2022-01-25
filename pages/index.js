import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/Menu";
import Card from "../components/Card";
import Login from "../components/Login";

const cards = [
  {
    title: "Amsterdam",
    description:
      "The capital of the Netherlands is a beautiful city with a lot of history. A nice place to live and work.",
    image: "/images/amsterdam.jpg",
    widht: 300,
    height: 200,
  },
  {
    title: "Indonesia",
    description:
      "Indonesia is a beautiful country with a lot of nature. It has thousands of islands and a lot of beautiful beaches.",
    image: "/images/indonesia.jpg",
    widht: 283,
    height: 188,
  },
  {
    title: "eCoders",
    description:
      "eCoders is a Dutch company that develops web applications. We are located in Amsterdam.",
    image: "/images/ecoders.svg",
    widht: 300,
    height: 107,
  },
];

export default function Home() {
  const title = "Hello again code!";

  return (
    <div className={styles.container}>
      <Menu />

      <Login/>

      <h1>{title}</h1>

      {
        cards.map(
          function(cards){
            return (
              <Card
              key={cards.title}
              title={cards.title}
              description={cards.description}
              images={cards.image}
              widht={cards.widht}
              height={cards.height}
              />
            )
          }
        )
      }
    </div>
  );
}
