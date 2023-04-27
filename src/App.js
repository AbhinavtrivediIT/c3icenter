import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import Aboutview from './View/Aboutview';
import HomeView from './View/HomeView';
function App() {

  return (
    <div className="App">
      <div className='head'>
      <Header/>
      <HomeView/>
      {/* <Aboutview/> */}

      <Footer/> 
     </div>
    </div>
  );
}

export default App;
