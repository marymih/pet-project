import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';

function App() {
  return (
    <Router>
      <div className='container'>
      <main className='content'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
        <aside className='aside'>
          <h2>Lorem Ipsum</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </aside>
      </main>
      <footer className='footer'>
        <p className='logo'>Lorem Ipsum</p>
      </footer>
    </div>
    </Router>
  );
}

export default App;
