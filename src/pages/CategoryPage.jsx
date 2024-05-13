import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
  const { category } = useParams();

  const categoryItems = rest[category];

  return (
    <>
      <h2>{category}</h2>
      {categoryItems.map((item) => {
        return (
          <Card
            key={item.name}
            name={item.name}
            likes={item.like}
            removeCard={() => removeCard(item.name, category)}
            removeLikes={() => removeLikes(item.name, category, "remove")}
            addLikes={() => addLikes(item.name, category, "add")}
          />
        );
      })}
    </>
  );
};

export default CategoryPage;
