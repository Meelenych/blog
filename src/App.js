import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';

function App() {
	return (
		<Router>
			<Navbar />
			<div className='container mx-auto px-4'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/articles'
						element={<ArticlesList />}
					/>
					<Route
						path='/article/:name'
						element={<Article />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
