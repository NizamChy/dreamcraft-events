
import { useLoaderData } from 'react-router-dom';
import Services from './Services';

const OurServices = () => {
  const services = useLoaderData();
  return (
    <div>
      <Services services={services}></Services>
    </div>
  );
};

export default OurServices;