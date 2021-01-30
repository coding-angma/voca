import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
