import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    navigate(user ? "/dashboard" : "/");
  }, [user, navigate]);

  return (
    <header className="sticky top-0 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg py-4 px-6 flex items-center justify-between backdrop-blur-lg bg-opacity-80 z-50">
      <h1 className="text-white text-2xl font-bold tracking-wide">Financly</h1>

      {user && (
        <div className="flex items-center space-x-4">
          {/* User Profile Icon */}
          <div className="relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
            <img
              src={user.photoURL || userSvg}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="px-4 py-2 text-green font-bold rounded-full bg-indigo-400 bg-opacity-20 hover:bg-opacity-30 border border-white transition duration-300 shadow-md backdrop-blur-lg cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
