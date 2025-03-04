import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Form from "./components/Form/Form.jsx";
import {accordionData} from "./untils/Content";
import Accordion from "./components/Accordion/Accordion";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    // <div className="accordion">
    //   {accordionData.map(({title, content}) =>(
    //     <Accordion title={title} content={content} />
    //   ))}
    // </div>
  );
};

export default App;
