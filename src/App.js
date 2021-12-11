import Cards from "./componentes/Cards";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";


function App() {
  return (
    <div >
      <Navbar />
      <Cards titulo1='Titulo 1' titulo2='Titulo 2' titulo3='Titulo 3' img1='https://vinculotic.com/wp-content/uploads/2020/07/educacion-cuantica-01-1021x580.jpg' img2='https://u-camp.utel.edu.mx/hubfs/bootcamp/image%2021.jpg' img3='https://u-camp.utel.edu.mx/hubfs/bootcamp/image%2015.jpg'/>
      <br/>
      <Cards titulo1='Titulo 4' titulo2='Titulo 5' titulo3='Titulo 6'img1='https://u-camp.utel.edu.mx/hubfs/bootcamp/sharing%20is%20caring.jpg' img2='https://u-camp.utel.edu.mx/hubfs/bootcamp/image%2022.jpg' img3='https://concepto.de/wp-content/uploads/2013/03/computacion.jpg'/>
      <Footer />
    </div>
  );
}

export default App;
