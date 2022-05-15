import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//기존의 Switch 가 Routes로 명칭이 변경됨

import './App.css';
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// react-router-dom 5.0 -> 6.0으로 변경점
// Switch 가 Routes로 변경되며  Route 컴포넌트 사이에 
// 자식 컴포넌트 대신 Element Prop에 자식 컴포넌트를 할당하도록 변경
// Ex)) <Route path="/" element={<Home />}>
function App() {
  return ( 
  <Router>
    <Routes>
      <Route path="movie" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}
export default App;
