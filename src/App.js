import { Outlet } from "react-router";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
