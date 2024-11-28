import { useContext } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import FeaturedWordsOfTheDay from "../components/FeaturedWordsOfTheDay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Success from "../components/Success";
import TestimonialSection from "../components/Testimonial";
import { AuthContext } from "../provider/AuthProvider";
import Typewriter from 'react-typewriter-effect';
import "../index.css"
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";

const Home = () => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    return (

        <div>
            <Helmet>
                <title>Home | Taalam Arabia</title>
            </Helmet>
            <header>
                <Navbar></Navbar>

                {/* welcome */}
                {
                    user && <Typewriter
                        textStyle={{ fontFamily: 'Arial', color: '#4c1d95', fontSize: '30px', textAlign: 'center', padding: '20px' }}
                        startDelay={100}
                        cursorColor="#3F3D56"
                        multiText={[
                            `Hello, ${user.displayName}!!!`,
                            'Welcome to the Taalam Arabia.',
                            'Start learning Arabic today!',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={50}
                    />
                }

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