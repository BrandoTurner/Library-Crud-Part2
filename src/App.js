import {Routes, Route ,useLocation} from 'react-router-dom'
import './App.css';
import Home from './components/routes/Home'
import Books from './components/routes/Books';
import BookCreate from './components/routes/BookCreate';
import Book from './components/routes/Book';
import BookEdit from './components/routes/BookEdit';
 
function App() {
  const location = useLocation();
 
  return (
    <div className="App">
      <h3>{location.state ? location.state.msg: null }</h3>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/create-book' element={<BookCreate />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/:id/edit' element={<BookEdit />} />
      </Routes>
    </div>
  );
}



export default App;
