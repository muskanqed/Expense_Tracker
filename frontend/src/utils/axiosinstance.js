// Import axios and your base URL from config
import axios from 'axios';
import { BASE_URL } from './apiPath';

// Create a reusable axios instance with default settings
const axiosInstance = axios.create({
    baseURL: BASE_URL,           // All requests will be prefixed with this base URL
    timeout: 10000,              // Cancel requests taking longer than 10s
    headers: {
        "Content-Type": "application/json",  // Default request content type
        Accept: "application/json",          // Expected response type
    }
});

/* -------------------------------------------------------------------
   REQUEST INTERCEPTOR
   - Runs before every request is sent
   - Used here to automatically attach Authorization header if a token exists
------------------------------------------------------------------- */
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");  // Get token from local storage
        if (accessToken) {
            // Attach JWT as Bearer token for authenticated routes
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config; // Always return config so request can proceed
    },
    (error) => {
        // Handle request error before it is sent
        return Promise.reject(error);
    }
);

/* -------------------------------------------------------------------
   RESPONSE INTERCEPTOR
   - Runs for every response or error
   - Used here for global error handling
------------------------------------------------------------------- */
axiosInstance.interceptors.response.use(
    (response) => {
        // If the response is successful, just return it
        return response;
    },
    (error) => {
        // Handle common errors globally
        if (error.response) {
            // Case: Unauthorized (invalid/expired token)
            if (error.response.status === 401) {
                // Redirect user to login page
                window.location.href = "/login";
            }
            // Case: Internal Server Error
            else if (error.response.status === 500) {
                console.log("⚠️ Server error. Please try again later.");
            }
        }
        // Case: Request timeout or network error
        else if (error.code === "ECONNABORTED") {
            console.log("⚠️ Request timeout. Please try again.");
        }

        // Reject promise so the calling function can still handle it
        return Promise.reject(error);
    }
);

// Export the instance so you can use it everywhere
export default axiosInstance;
