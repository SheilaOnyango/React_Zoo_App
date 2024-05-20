import "./App.css";
import { animals, birds, insects, fishes } from "./animalsList.js";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import CategoryPage from "./pages/CategoryPage";
import SinglePage from "./pages/SinglePage";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const removeHandler = (name, category) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter((el) => el.name !== name),
    }));
  };

  const likesHandler = (name, category, action) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].map((el) =>
        el.name === name
          ? { ...el, likes: el.likes + (action === "add" ? 1 : -1) }
          : el
      ),
    }));

    /*console.log(name, category, action, "likesHandler was clicked");
 const removeHandler = (name, category) => {
      console.log(name, category, "removeHandler was clicked");
    };*/
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":category",
          element: (
            <CategoryPage
              addLikes={likesHandler}
              removeLikes={likesHandler}
              removeCard={removeHandler}
              {...zoo}
            />
          ),
        },
        { path: ":category/:name", element: <SinglePage {...zoo} /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

/* const removeCard = (animal) => {
    const updatedArray = animalsData.filter((item) => item.name !== animal); // if item name is same, take it out
    setAnimalsData(updatedArray);
  };

  // Function to handle likes (add or remove) for a specific animal
  const likesHandler = (animal, action) => {
    console.log(animal, action);
    // Mapping over 'animalsData' array to update likes for the specified animal
    const updatedArray = animalsData.map((item) => {
      if (item.name === animal) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 };
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item; // if the animal is not the one being modified, return it unchanged
      }
    });
    setAnimalsData(updatedArray);
  }; */
