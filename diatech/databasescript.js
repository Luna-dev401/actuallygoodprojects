import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
        import { getDatabase, ref, push, set } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';

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

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        export { database }