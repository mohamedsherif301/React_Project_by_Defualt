import './App.css';

function App() {
  function setName(name){
      return <h1>Hello {name}</h1>
  }
  return (
    <div className="App">
      <h1>mohamed sherif </h1>
      <p>{setName("Mohamed")}</p>
    </div>
  );
}

export default App;
