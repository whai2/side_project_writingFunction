import { Routes, Route } from 'react-router-dom';
import WritePage from "./pages/WritePage";
import Tree from './components/tree/Tree';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/write" element={<WritePage />}>
        </Route>
        <Route path="/tree" element={<Tree />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
