import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Article from './Pages/Article';
import ArticlesPage from './Pages/ArticlesPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Article" element={<Article/>}/>
          <Route path="ArticlesPage" element={<ArticlesPage/>}/>
          <Route path="/About" element={<AboutMe/>}/>
          
        </Routes>
      </BrowserRouter>
   {/* <HomePage/> */}
    </div>
  );
}

export default App;
