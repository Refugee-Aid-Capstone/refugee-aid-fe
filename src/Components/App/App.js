import { Route, Routes } from "react-router";
import Homepage from "../Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
