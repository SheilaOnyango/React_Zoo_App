import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SinglePage = ({ ...rest }) => {
  const params = useParams();
  const categoryItems = rest[params.category];
  const data = categoryItems.find((element) => element.name === params.name);
  const [text, setText] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    {
      axios
        .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${data.name}`)
        .then((res) => {
          setText(res.data);
        })
        .catch((error) => {
          console.error("error", error);
          setText({ extract: "An error occurred." });
        });
    }
  }, [data]);

  return (
    <div className="single-page">
      <h2 className="page-title">{data.name.toUpperCase()}</h2>
      <img
        className="page-image"
        src={`https://source.unsplash.com/400x400/?${data.name}`}
        alt={data.name}
      ></img>
      <p className="page-content">
        {text ? text.extract : "Loading content..."}
      </p>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default SinglePage;
