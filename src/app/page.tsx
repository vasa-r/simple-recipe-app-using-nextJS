import Link from "next/link";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-3xl font-extrabold text-gray-950">
        Welocome to Recipe App
      </h1>
      <Link
        href={"/recipe-list"}
        className="border border-gray-500 p-3 rounded-md text-lg hover:bg-orange-400 hover:text-white hover:border-none"
      >
        Explore Recipes
      </Link>
    </div>
  );
};

export default Home;
