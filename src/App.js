import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Delete from './components/Delete';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddTodo/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/Delete' element={<Delete/>}/>
    <Route path='/View' element={<View/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
