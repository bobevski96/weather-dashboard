import "./App.css";
import { WeatherComp } from "./components/WeatherComp.tsx";

function App() {
  return (
    <>
      <div className="main-container">
      <h1 className="title">Weather Dashboard</h1>
          <WeatherComp /> 
      </div>
    </>
  );
}

export default App;
