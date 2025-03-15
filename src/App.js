import './App.css';

function App(props) {

  return (
    <div className="App">
      <h1>mohamed sherif </h1>
    { props?   <p>Welcome {props.name}</p>:<p>Welcome Gest</p>}
      
                

      
      

    </div>
  );
}

export default App;
