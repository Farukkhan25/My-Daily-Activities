import "./App.css";
import Activities from "./Components/Activities/Activities";
import Questions from "./Components/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Activities></Activities>
      <h2 className="question-text">Questions</h2>
      <Questions></Questions>
    </div>
  );
}

export default App;
