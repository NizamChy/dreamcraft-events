import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServicesPage from "./ServicesPage";

const serviceDetails = () => {
  const [serviceDetail, setServiceDetail] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const serviceDetails = useLoaderData();

  useEffect(() => {
    const findDetails = serviceDetails?.find(
      (serviceDetail) => serviceDetail.id == id
    );
    setServiceDetail(findDetails);
  }, [id, serviceDetails]);

  console.log(serviceDetail);

  return (
    <div>
      <ServicesPage serviceDetail={serviceDetail}></ServicesPage>
    </div>

  );
};

export default serviceDetails;
