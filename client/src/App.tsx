import {BrowserRouter} from 'react-router-dom'
import '../src/components/styles.css'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
