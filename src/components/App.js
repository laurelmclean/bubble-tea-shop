import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu'; 
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
