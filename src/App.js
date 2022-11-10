
import './App.css';
import Card from './Components/Card';
import Img from './Images/img1.jpg';
import Img2 from './Images/img3.jpg';


function App() {
  return (
    <div className="App">
      <Card movie="IRONMAN" yearAndAuthor="2008,ANKURVERMA" images={Img} />
      <Card
        movie="HARRY POTTER"
        yearAndAuthor="2000,Author"
        images={Img2}
      />
      
    </div>
  );
}

export default App;
