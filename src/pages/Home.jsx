import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Link to="/animals" className="category-link">
        <img
          src="https://source.unsplash.com/800x800/?mammal+reptile"
          alt="animal"
        />
        <div className="category-title">Animals</div>
      </Link>
      <Link to="/birds" className="category-link">
        <img src="https://source.unsplash.com/800x800/?bird" alt="bird" />
        <div className="category-title">Birds</div>
      </Link>
      <Link to="/insects" className="category-link">
        <img src="https://source.unsplash.com/800x800/?insect" alt="insect" />
        <div className="category-title">Insects</div>
      </Link>
      <Link to="/fishes" className="category-link">
        <img src="https://source.unsplash.com/800x800/?fish" alt="fish" />
        <div className="category-title">Fish</div>
      </Link>
    </div>
  );
};

export default Home;
