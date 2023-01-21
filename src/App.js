import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Like from './pages/Like';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className='app_container'>
    <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='like' element={<Like />} />
      </Routes>
    </div>
  );
}

export default App;
