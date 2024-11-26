import About from "../components/About";
import Banner from "../components/Banner";
import FeaturedWordsOfTheDay from "../components/FeaturedWordsOfTheDay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Success from "../components/Success";
import TestimonialSection from "../components/Testimonial";

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

            
            
            {/* FeaturedWordsOfTheDay section */}
            <FeaturedWordsOfTheDay></FeaturedWordsOfTheDay>

            

            {/* Success section */}
            <Success></Success>



            {/* testimonial section */}
            <TestimonialSection></TestimonialSection>


            </main>


            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default Home;