import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UpdateProfile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [error, setError] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        updateUser({
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                navigate('/profile');
            })
            .catch((error) => {
                setError('Failed to update profile. Please try again.');
                console.error(error);
            });
    };

    return (
        <div>
            {/* navbar */}
            <header>
                <Navbar></Navbar>

            </header>

            <main>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">Update Your Profile</h2>

                        <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="photo-url" className="sr-only">Photo URL</label>
                                    <input
                                        id="photo-url"
                                        name="photoURL"
                                        type="url"
                                        value={photoURL}
                                        onChange={(e) => setPhotoURL(e.target.value)}
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Photo URL"
                                        required
                                    />
                                </div>
                            </div>

                            {error && <p className="text-sm text-red-500">{error}</p>}

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update Information
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-4">
                            <button
                                onClick={() => navigate('/profile')}
                                className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                            >
                                Back to Profile
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* footer */}
            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default UpdateProfile;
