import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const { email, setEmail, resetPassword, loading } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage("Please enter your email address.");
            return;
        }

        resetPassword(email)
            .then(() => {
                setSuccessMessage("Password reset email sent successfully!");
                setErrorMessage(""); 
                navigate("/auth/login"); 
                window.open("https://mail.google.com/", "_blank");
            })
            .catch((error) => {
                setErrorMessage("Error: " + error.message);
                setSuccessMessage(""); 
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center -mt-20 bg-[#F3F3F3]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
                <h2 className="text-2xl font-semibold text-center">Forgot Password</h2>
                <form onSubmit={handleResetPassword} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Show error message */}
                    {errorMessage && (
                        <div className="text-sm text-red-500 mt-2">{errorMessage}</div>
                    )}

                    {/* Show success message */}
                    {successMessage && (
                        <div className="text-sm text-green-500 mt-2">{successMessage}</div>
                    )}

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none" disabled={loading}>
                            {loading ? "Sending..." : "Reset Password"}
                        </button>
                    </div>
                </form>
                <p className="text-center mt-6">
                    Remember your password?{" "}
                    <Link to="/auth/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
