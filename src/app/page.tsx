import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welocome to Recipe App</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
  );
};

export default Home;
