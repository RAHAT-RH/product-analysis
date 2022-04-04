import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Charts from './components/Charts/Charts';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/review' element={<Review></Review>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/charts' element={<Charts></Charts>}/>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}/>
      </Routes>
    </div>
  );
}

export default App;
