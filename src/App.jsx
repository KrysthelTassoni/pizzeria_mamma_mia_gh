import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import RegisterPage from "./components/formularios/RegisterPage";
import LoginPage from "./components/formularios/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage/>
      <Footer />
    </div>
  );
}

export default App;
