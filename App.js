import './App.css';
import HelloWorld from './components/helloworld'; 

function App() {

  const nome = 'Hello World';

  return (
    <div className="App">
      {nome}
      <HelloWorld></HelloWorld>
      <br/> oi
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
