import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {

    const { signUp, setUser, updateUser, googleAuth } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState({});

    const navigate = useNavigate();

    console.log(errorMessage);

    const onClickForGoogle = () => {
        googleAuth()
            .then(result => {
                const userFromGoogle = result.user;
                console.log(userFromGoogle);
                setUser(userFromGoogle);
                errorMessage.name = '';
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);


        // Password validation conditions
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase || !hasLowercase || !isLongEnough) {
            setErrorMessage({
                ...errorMessage,
                password: `Password must contain at least 6 characters, including uppercase and lowercase letters.`
            });
            return;
        }


        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                errorMessage.name = '';

                updateUser({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error);
                    })


            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div className="min-h-screen flex justify-center items-center -mt-20 bg-[#F3F3F3]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 pb-5">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>

                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="name" placeholder="Enter your Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            errorMessage.password && (
                                <label className="label text-sm text-red-500">
                                    {errorMessage.password}
                                </label>
                            )
                        }
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                    <p className="text-center mt-6">
                        Already Have An Account ? <Link className="text-red-500" to='/auth/login'>Login</Link>
                    </p>

                    <div className="text-center space-y-3">
                        <h2 className="text-center mt-10">Or, Register with</h2>
                        <button className="btn" onClick={onClickForGoogle}>
                            <FaGoogle></FaGoogle>
                            <span className="text-lg font-light">Google</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;