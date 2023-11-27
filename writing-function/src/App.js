import { Route } from 'react-router-dom';
import WritePage from "./pages/WritePage";

function App() {
  return (
    <div className="App">
      <Route component={WritePage} path='/write' />
    </div>
  );
}

export default App;
