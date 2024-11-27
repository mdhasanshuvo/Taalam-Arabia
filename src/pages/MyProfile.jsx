import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const MyProfile = () => {
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <Navbar />

            <main className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome, {user?.displayName}!</h1>
                    <p className="text-gray-600 mt-4 text-lg">Here’s your profile information.</p>
                </div>

                {/* Profile Information Section */}
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">

                    {/* Profile Picture */}
                    <div className="w-full md:w-1/3 flex justify-center items-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100">
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-48 h-48 rounded-full shadow-lg border-4 border-indigo-500 object-cover"
                        />
                    </div>

                    {/* User Info */}
                    <div className="w-full md:w-2/3 p-8">
                        <div className="space-y-6">
                            {/* Name */}
                            <div className="flex items-center">
                                <span className="text-gray-600 font-semibold w-1/4 text-lg">Name:</span>
                                <span className="text-gray-800 text-lg">{user?.displayName || 'N/A'}</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center">
                                <span className="text-gray-600 font-semibold w-1/4 text-lg">Email:</span>
                                <span className="text-gray-800 text-lg">{user?.email || 'N/A'}</span>
                            </div>
                        </div>

                        {/* Update Profile Button */}
                        <div className="text-center md:text-left mt-8">
                            <button
                                className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition duration-300"
                                onClick={() => navigate('/update-profile')}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default MyProfile;
