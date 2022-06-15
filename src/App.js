import "./App.css";
import Cat from "./components/Cat";
import CatList from "./components/CatList";
import Dog from "./components/Dog";
import DogList from "./components/DogList";

function App() {
  const catData = [
    {
      name: "Whiskers",
      caretaker: "Farah",
      petCount: 1357,
    },
    {
      name: "Fang",
      caretaker: "Luciana",
      petCount: 8267,
    },
    {
      name: "Beetle",
      caretaker: "Aya",
      petCount: 2468,
    },
  ];

  const dog_data = [
    {
      name: "Wishbone",
      favoriteToy: "Squeaker",
      chipNumber: "82373",
    },
    {
      name: "Appa",
      favoriteToy: "Ball",
      chipNumber: "29238",
    },
    {
      name: "Jimminy",
      favoriteToy: "Bone",
      chipNumber: "72902",
    }
  ];

  return (
    <main>
      <h1>List of Cats</h1>
      <Cat />
      <h1>List of Dogs</h1>
      <DogList />
      <CatList catData={catData} />
    </main>
  );
}

export default App;
