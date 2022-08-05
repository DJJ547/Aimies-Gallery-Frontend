import "./styles.css";
import Header from "./components/header";
import Home from "./pages/home"
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}