import logo from "./logo.svg";
import "./App.css";
import LoadingStepper from "./LoadingStepper";

function App() {
  return (
    <div>
      <header
        style={{
          width: "700px",
          margin: "auto",
          marginTop: "50px",
        }}>
        <LoadingStepper />
      </header>
    </div>
  );
}

export default App;
