import MainLayout from "../../layout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <MainLayout>
      <Breadcrumb />
      <p>detail page</p>
    </MainLayout>
  );
};

export default Detail;
