import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            {/* Header section */}
            <header>
                <Navbar></Navbar>

            </header>

            <main className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 text-center space-y-20">
                    {/* Page Title */}
                    <h1 className="text-5xl font-extrabold text-gray-800 -mb-14">About Me</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Hello, I'm Mohammed Hasan, a passionate full-stack developer with a focus on building beautiful and functional web applications.
                    </p>

                    {/* Developer Info Section */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills & Technologies</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            I specialize in creating modern web applications using the latest technologies. Below are some of the tools and frameworks I work with:
                        </p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700 text-xl">
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">HTML</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">CSS</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">JavaScript</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">TailwindCSS</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">Bootstrap</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">React.js</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">Git & GitHub</li>
                            <li className="bg-indigo-100 text-indigo-800 p-3 rounded-lg shadow-md">Firebase</li>
                        </ul>
                    </div>

                    {/* Projects Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Other Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Donate Bangladesh</h3>
                                <p className="text-gray-600 mb-4">Donate Bangladesh is a charitable platform dedicated to supporting those in need across Bangladesh.</p>
                                <a href="https://github.com/mdhasanshuvo/Assignment-05" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                    View on GitHub
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">BPL-DREAM 11 </h3>
                                <p className="text-gray-600 mb-4">BPL-DREAM 11 is a React-based application designed for cricket enthusiasts to manage their dream cricket teams. </p>
                                <a href="https://github.com/programming-hero-web-course1/b10a7-dream-11-mdhasanshuvo" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                    View on GitHub
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dragon News</h3>
                                <p className="text-gray-600 mb-4">Dragon News is a dynamic React-based website that delivers the latest news and updates on various topics.</p>
                                <a href="https://github.com/mdhasanshuvo/Dragon-News" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect with Me</h2>
                        <div className="flex justify-center space-x-8">
                            <a href="https://github.com/mdhasanshuvo" className="text-gray-700 hover:text-gray-900">
                                <FaGithub size={36} />
                            </a>
                            <a href="https://www.linkedin.com/in/mohammed-hasan-729701275/" className="text-gray-700 hover:text-gray-900">
                                <FaLinkedin size={36} />
                            </a>
                            <a href="https://github.com/mdhasanshuvo" className="text-gray-700 hover:text-gray-900">
                                <FaTwitter size={36} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>


        </div>
    );
};

export default AboutUs;
