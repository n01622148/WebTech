import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login'
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import Navigation from './Components/Navigation';
import Trending from './Components/Trending';
import Popular from './Components/Popular';
const App = () => {
  return (
      <BrowserRouter>
      <div className='app'>
        <Navigation />
        <main>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/CreatePost" element={<CreatePost />} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>

  )
}

export default App
