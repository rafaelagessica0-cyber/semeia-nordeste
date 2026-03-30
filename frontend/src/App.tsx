import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home/Home';

function App() {
  return (
    /* O ThemeProvider precisa abraçar a Home para ela funcionar */
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;