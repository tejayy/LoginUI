import Login from './Login';
import Register from './Register';

function App() {
  var userIsRegistered = true;

  return (
    <div className="App">
      <div className="container">{
      userIsRegistered ? <Login /> : <Register />
      }</div>
    </div>
  );
}

export default App;
