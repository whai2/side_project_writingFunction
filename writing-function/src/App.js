import { Routes, Route } from 'react-router-dom';
import WritePage from "./pages/WritePage";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/write" element={<WritePage />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
