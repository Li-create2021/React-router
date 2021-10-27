import initialProductList from "./initialProductList";

const App = () => {
	// This is just to show you that we have access to initialProductList and
	// to tell you about the existence of console.table()
	console.table(initialProductList);

	return (
		<div className="App">
			<h1>My shopping cart</h1>
		</div>
	);
}

export default App;
