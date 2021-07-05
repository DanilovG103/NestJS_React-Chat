import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import '../src/components/styles.css'

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
