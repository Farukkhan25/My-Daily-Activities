import "./App.css";
import Activities from "./Components/Activities/Activities";
import Questions from "./Components/Questions/Questions";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="./icon.JPG" alt="" />
        <h1 className="text">My Daily Activities</h1>
      </div>
      <Activities></Activities>
      <h2 className="question-text">Questions</h2>
      <Questions></Questions>
    </div>
  );
}

export default App;
