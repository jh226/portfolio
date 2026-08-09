import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import DotNav from './layout/DotNav';
import Main from './pages/Main';
import NotFound from './NotFound';

const App = () => {
	return (
		<div className='App'>
			<HashRouter>
				<Header />
				<DotNav />
				<div className="fullpage-wrapper">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<Footer />
			</HashRouter>
		</div>
	);
};

export default App;
