import bg from './assets/img/bg.jpg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import FullName from './Components/Profile/FullName'
import Address from './Components/Profile/Address'
import ProfilPhoto from './Components/Profile/ProfilPhoto'
function App() {
  return (
    <>
    <div className="App " style={{ backgroundImage: `url(${bg})` }}>
        <NavBar />
        <br />
        <div className="container">
        <ProfilPhoto />
        <br />
        <FullName />
        <br />
      <Address/>
      </div>
      </div>
    
      </>
  );
}

export default App;
