import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  certificate,
  dataCertificate,
} from "../../components/section/dashboard/certificate/types";
import DetailCertificate from "../../components/section/dashboard/certificate/DetailCertificate";

const PageDetailCertificate = () => {
  const { id } = useParams();
  const [dataDetailCertificate, setDataDetailCertificate] = useState<
    certificate | undefined
  >(undefined);
  useEffect(() => {
    const fetch = () => {
      const dataDetail = dataCertificate.find(
        (certif) => certif.id.toString() === id
      );

      setDataDetailCertificate(dataDetail);
    };

    fetch();
  }, [id]);

  if (!dataDetailCertificate) return <h2>Loading...</h2>;

  return (
    <>
      <DetailCertificate data={dataDetailCertificate} />
    </>
  );
};

export default PageDetailCertificate;
