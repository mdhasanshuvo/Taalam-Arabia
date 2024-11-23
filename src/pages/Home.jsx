import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Success from "../components/Success";

const Home = () => {
    return (
        <div>
            {/* Header section */}
            <header>
                <Navbar></Navbar>

                {/* Banner section */}
                <Banner></Banner>

            </header>

            <main>
            {/* About section */}
            <About></About>

            {/* Success section */}
            <Success></Success>


            </main>


            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default Home;