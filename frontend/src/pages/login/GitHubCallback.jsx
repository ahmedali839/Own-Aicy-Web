// pages/GitHubCallback.jsx
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../stores/userContext.jsx";
import { useLoading } from "../Header/Header.jsx";
import { useTheme } from "../../stores/useTheme.jsx";

export default function GitHubCallback() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const { stopLoading, startLoading } = useLoading();
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) return;

    const handleGitHub = async () => {
      startLoading();
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/github`,
          { code }
        );

        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      } catch (err) {
        console.error("GitHub login failed:", err);
      } finally {
        stopLoading();
        setIsLoading(false);
      }
    };

    // Run after 10 seconds
    setTimeout(handleGitHub, 1000);
  }, []);

  return (
    <div className={`bg-white dark:bg-gray-900 ${theme === "dark" ? "bg-black/60" : "bg-white/60"}`}>
      {/* Fullscreen Loading UI */}
      {isLoading && (
        <div
          className={`
            fixed inset-0 flex flex-col items-center justify-center
            z-50 backdrop-blur-md
            ${theme === "dark" ? "bg-black/60" : "bg-white/60"}
          `}
        >
          {/* Spinner */}
          <div
            className={`
              w-14 h-14 border-4 rounded-full animate-spin
              ${theme === "dark"
                ? "border-gray-400 border-t-transparent"
                : "border-gray-700 border-t-transparent"}
            `}
          ></div>

          {/* Text */}
          <p
            className={`
              mt-4 text-lg font-semibold animate-pulse
              ${theme === "dark" ? "text-white" : "text-black"}
            `}
          >
            Connecting to GitHub...
          </p>
        </div>
      )}
    </div>
  );
}
