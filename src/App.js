import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import Aboutview from './View/Aboutview';
import HomeView from './View/HomeView';
import Solutionview from './View/Solutionview';
import Cources from './Component/Cources/Cources';
function App() {

  return (
    <div className="App">
      <div className='head'>
      <Header/>
      {/* <HomeView/> */}
      {/* <Aboutview/> */}
      {/* <Solutionview/> */}
      <Cources/>
      <Footer/> 
     </div>
    </div>
  );
}

export default App;
