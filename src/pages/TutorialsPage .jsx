import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TutorialsPage = () => {
    return (
        <div>
            {/* Header section */}
            <header>
                <Navbar></Navbar>
            </header>

            <main className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-primary">Arabic Tutorials</h1>
                    <p className="mt-4 text-xl text-gray-600">Watch these videos to improve your Arabic skills.</p>
                </div>

                <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="card shadow-lg rounded-xl overflow-hidden">
                        <figure className="aspect-w-16 aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/XC62pWvw4b0"
                                title="Arabic Tutorial 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </figure>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold">Introduction to Arabic</h3>
                        </div>
                    </div>

                    <div className="card shadow-lg rounded-xl overflow-hidden">
                        <figure className="aspect-w-16 aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/6mpdzRuJrd0?si=gryXqWWp3Or9LHtC"
                                title="Arabic Tutorial 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </figure>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold">Basic Arabic Phrases</h3>
                        </div>
                    </div>

                    <div className="card shadow-lg rounded-xl overflow-hidden">
                        <figure className="aspect-w-16 aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/fJ9_79bg5H4?si=ifp4x155gKYD4QD1"
                                title="Arabic Tutorial 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </figure>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold">Learn the Alphabet</h3>
                        </div>
                    </div>

                    <div className="card shadow-lg rounded-xl overflow-hidden">
                        <figure className="aspect-w-16 aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/4PEsUwtl6Cc?si=tmX-HTgKXt4EVbzx"
                                title="Arabic Tutorial 4"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </figure>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold">Common Greetings</h3>
                        </div>
                    </div>

                    <div className="card shadow-lg rounded-xl overflow-hidden">
                        <figure className="aspect-w-16 aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/tXJlD2yywq8?si=RVS-CvS3jo4Hrgjm"
                                title="Arabic Tutorial 5"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </figure>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold">Counting in Arabic</h3>
                        </div>
                    </div>

                    <div className="card shadow-lg rounded-xl overflow-hidden">
                        <figure className="aspect-w-16 aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/213nJyR5FQ4?si=s259TRkLIxrajhj0"
                                title="Arabic Tutorial 6"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </figure>
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold">Days of the Week</h3>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/learning"
                        className="btn btn-primary px-8 text-lg font-semibold rounded-xl shadow-md hover:bg-primary-focus"
                    >
                        Learn Vocabularies
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default TutorialsPage;
