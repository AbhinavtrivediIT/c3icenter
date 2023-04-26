import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import data from  "./Backend/Researchdata.json"
import Footer from './Component/Footer/Footer';
import Banner from './Component/Home/Banner/Banner';
import Research from './Component/Home/Research_domain/Research';
import NewsSlider from './Component/Home/NewsSlider/NewsSlider';
import About from './Component/About/About';
function App() {

  return (
    <div className="App">
      <div className='head'>
      <Header/>
      {/* <Banner/>
      <Research/>
      <NewsSlider/> */}
     <About/>
      <Footer/> 
     </div>
    </div>
  );
}

export default App;
