import Footer from "../components/footer.js";
import Hero from "../components/hero.js";
import Navbar from "../components/navbar.js";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div>
        <p>Halaman Home</p>
      </div>
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
