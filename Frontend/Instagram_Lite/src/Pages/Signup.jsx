import React from "react";

export function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        signingUp();
    }

    const signingUp = async () => {
        await fetch("http://localhost:4000/signup");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex justify-center mb-6">
                        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/logo.png" alt="Logo" className="h-12 w-auto" />
                    </div>
                    <p className="text-center text-gray-500 mb-4">Sign up to see photos and videos from your friends</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" placeholder='Full Name' className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input type="email" placeholder='Email' className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input type="text" placeholder='Username' className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input type="password" placeholder='Password' className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <p className="text-xs text-gray-500 text-center mt-4">By signing up, you agree to our <a href="/terms" className="text-blue-500">Terms</a> and <a href="" className="text-blue-500">Privacy Policy</a></p>
                        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                            Sign Up
                        </button>
                    </form>
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-2 text-gray-400">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                        Continue With Google
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center mt-4">
                    <p>Have an account? <a href="" className="text-blue-500">Log In</a></p>
                </div>
            </div>
        </div>
    )
}
