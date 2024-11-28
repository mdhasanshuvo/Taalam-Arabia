import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const StartLearning = () => {

    return (
        <div>

            <Helmet>
                <title>Learning | Taalam Arabia</title>
            </Helmet>

            {/* Header section */}
            <header>
                <Navbar></Navbar>
            </header>

            <main>

                <div className="bg-gray-100 py-16">
                    <div className="text-center mb-16 ">
                        <h1 className="text-4xl font-bold text-gray-800 ">Let’s Learn Arabic</h1>
                        <p className="mt-4 text-xl text-gray-600">Choose a lesson to get started</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-6 container mx-auto px-6 ">
                        {
                            (() => {
                                const lessons = [];
                                for (let i = 0; i < 10; i++) {
                                    lessons.push(
                                        <Link
                                            key={i}
                                            to={`/lesson/${i + 1}`}
                                            className="bg-gradient-to-b from-blue-500 to-purple-500 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-white text-center cursor-pointer transform hover:scale-105"
                                        >
                                            <h3 className="text-3xl font-bold">Lesson {i + 1}</h3>
                                        </Link>
                                    );
                                }
                                return lessons;
                            })()
                        }

                    </div>

                    <div className="mt-16 bg-white p-8 rounded-xl shadow-lg container mx-auto px-6 ">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 ">Learn the Alphabet</h2>
                        <div className="aspect-w-16 mb-6">
                            <iframe
                                className="w-full h-[500px] rounded-xl"
                                src="https://www.youtube.com/embed/XC62pWvw4b0?si=UdxLZtkoQ5aq-wmM"
                                title="Learn Arabic Alphabet"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-center text-lg text-gray-600">Watch this video to get started with the Arabic alphabet.</p>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/tutorials"
                            className="text-lg font-semibold text-indigo-600 hover:text-indigo-800"
                        >
                            View More Tutorials
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default StartLearning;
