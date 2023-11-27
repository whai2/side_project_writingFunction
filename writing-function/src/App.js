import { Routes, Route } from 'react-router-dom';
import WritePage from "./pages/WritePage";

function App() {
  return (
    <Routes>
      <Route component={WritePage} path='/write' />
    </Routes>
  );
}

export default App;
