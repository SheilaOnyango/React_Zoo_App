import { useParams } from "react-router-dom";

const SinglePage = () => {
  const category = useParams();

  const categoryItems = rest[params.category];

  const data = categoryItems.find((el) => el.name === params.name);

  return (
    <>
      <h2>Single page will be here</h2>
    </>
  );
};

export default SinglePage;
