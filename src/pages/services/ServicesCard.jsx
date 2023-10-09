import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { id, name, image, price, short_description, service_details } =
    service || {};

  return (
    <div>
      <div className="relative flex w-80 lg:w-96 h-[80%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {short_description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/service/${id}`}>
            <button
              type="button"
              className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
