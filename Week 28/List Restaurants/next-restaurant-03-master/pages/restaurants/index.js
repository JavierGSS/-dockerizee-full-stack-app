import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const restaurants = [
    { name: "Fiorella" },
    { name: "Sabor" },
    { name: "Karma" },
  ];
  return (
    <div>
      <h1>Restaurant List:</h1>
      {restaurants.map((item) => {
        return (
          <div>
            <Link
              as={"/restaurants/" + item.name}
              href="restaurants/[restaurant]"
            >
              <a style={{ color: "green" }}>{item.name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
