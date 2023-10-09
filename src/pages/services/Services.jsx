import ServicesCard from "./ServicesCard";

const Services = ({ services }) => {

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold mb-8 text-center">Our Services</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {services?.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
