import Navbar from "./components/navbar/Navbar";
//import Cart from "./components/cart/Cart"
// import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";;
//import RegisterPage from "./components/formularios/RegisterPage";
//import LoginPage from "./components/formularios/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Pizza from "./components/pizza/Pizza";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Cart /> */}
       {/* <Home/>  */}
      {/* <RegisterPage />  */}
      {/* <LoginPage/> */}
       <Pizza />

      <Footer />
    </div>
  );
}

export default App;
