import ServicesCard from "./ServicesCard";


const Services = ({services}) => {
  console.log(services);
  return (
    <div className="py-10">
      <h1 className='text-2xl text-center'>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto py-4">
        {
          services?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;