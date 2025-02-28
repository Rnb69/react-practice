import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
