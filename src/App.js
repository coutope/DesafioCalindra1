import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {
	return (
		<div className="App">
			
			<header className="header">
				<h1> - Calindra Tech</h1>
			</header>

			<section className="mainapp">
				<Search />
			</section>
			
		</div>
	);
}

export default App;
