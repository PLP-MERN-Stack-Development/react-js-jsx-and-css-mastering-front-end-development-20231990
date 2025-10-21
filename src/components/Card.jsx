function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default Card;
