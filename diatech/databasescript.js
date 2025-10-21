
// 1. Import necessary Firebase functions
// We need functions to initialize the app, get the database service,
// create a reference to a specific location, and read data once.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';

// 2. Your Firebase Project Configuration
// This needs to be included on any page that interacts with Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyCbcaSi9iV98v1BtpdQ_ObbfIKE_ShHiG0",
    authDomain: "dd-unit-3.firebaseapp.com",
    databaseURL: "https://dd-unit-3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dd-unit-3",
    storageBucket: "dd-unit-3.firebasestorage.app",
    messagingSenderId: "482569899340",
    appId: "1:482569899340:web:076f596ba18b69ee6013e9",
    measurementId: "G-CXG2HT0ELQ"
};

// 3. Initialize Firebase and get the Database instance
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 4. Get the HTML element where the name will be displayed
const userNameElement = document.getElementById('userNameDisplay');

// 5. Use DOMContentLoaded to ensure the HTML is ready before we try to read
document.addEventListener('DOMContentLoaded', () => {

    // 6. Read the userId from localStorage
    const currentUserId = localStorage.getItem('currentUserId');

    // 7. Check if a userId was found in localStorage
    if (currentUserId) {
        console.log("Found userId in localStorage:", currentUserId);

        // 8. Create a reference to the specific user's data in the database
        // We build the path using 'users/' followed by the unique userId.
        const userRef = ref(database, 'users/' + currentUserId);
        get(userRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const username = userData.name; 
                    console.log("Fetched username:", username);
                    userNameElement.textContent = username;
                } else {
                    
                    console.log("No user data found in database for ID:", currentUserId);
                    if (userNameElement) {
                        userNameElement.textContent = 'UserNotFound';
                    }
                    localStorage.removeItem('currentUserId');
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                 if (userNameElement) {
                     userNameElement.textContent = 'Error loading name';
                 }
            });
    } else {
        console.log("No current user ID found in local storage.");
        if (userNameElement) {
            userNameElement.textContent = 'Guest'; // Or 'Please log in'
        }
    }
});