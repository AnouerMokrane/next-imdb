import Form from "next/form";

export default async function Search() {
  return (
    <div className="container mx-auto px-6 w-full py-6 mb-10 ">
      <Form action={"/search"} className="flex items-center gap-2">
        <input
          name="query"
          type="text"
          placeholder="Search for a movie"
          className="w-full p-4 border-2 border-gray-200 rounded-md"
        />
        <button className="bg-black text-white p-4 border-2  rounded-md dark:border-white dark:bg-black dark:text-gray-400 max-sm:hidden">
          Search
        </button>
      </Form>
    </div>
  );
}
