const ServicesPage = ({ serviceDetail }) => {
  
  const { id, name, image, price, short_description, service_details } =
    serviceDetail || {};

  return (
    <div>
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/2">
          <img
            src={image} 
            alt="Product Image"
            className="w-full h-auto"
          />
        </div>

        <div className="md:w-1/2 md:pl-4">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>{" "}
          
          <p className="text-lg font-medium mb-2">${price}</p>{" "}
          
          <p className="text-lg font-semibold mb-2">{short_description}</p>
          <p className="text-gray-700">{service_details}</p>{" "}
          
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
