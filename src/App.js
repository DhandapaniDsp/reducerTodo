import logo from "./logo.svg";
import "./App.css";
import  {Cards}  from "./components/Cards";
import { Route, Routes } from "react-router-dom";
import { LabelCards } from "./components/LabelCards";
//import "@fontsource/open-sans";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/labelcards" element={<LabelCards/>} />
      </Routes>
    </>
  );
}

export default App;
