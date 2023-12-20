import ToDo from "./ui/ToDo";

export default function Home() {
  return (
    <div className="flex items-center flex-col md:flex-row justify-around w-screen">
      <div className="flex justify-center items-center w-screen md:w-[40%]">
        <ToDo />
      </div>
      <div className="w-screen md:w-[40%] p-12">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-sky-800">
            Better And
          </span>{" "}
          Scalable TODO.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          ipsam, quis perferendis accusantium laudantium obcaecati molestias
          quasi incidunt mollitia?
        </p>
      </div>
    </div>
  );
}
