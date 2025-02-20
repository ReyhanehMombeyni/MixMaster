import Button from "./shared/Button";

const NewsLetter = () => {
  return (
    
    <div className="bg-blue-50 px-20 min-h-screen flex justify-center items-center">
      <form className="flex flex-col justify-center items-start gap-5 p-10 bg-white shadow-2xl w-200 rounded-2xl">
        <h1 className="text-3xl">Our Newsletter</h1>
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" className="p-1 bg-blue-50 w-2xl rounded-xl h-10 border border-solid border-gray-200" />
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" name="lastName" className="p-1 bg-blue-50 w-2xl rounded-xl h-10 border border-solid border-gray-200" />
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" className="p-1 bg-blue-50 w-2xl rounded-xl h-10 border border-solid border-gray-200" />
        <Button type="submit" title="submit" />
      </form>
    </div>
  );
};

export default NewsLetter;
