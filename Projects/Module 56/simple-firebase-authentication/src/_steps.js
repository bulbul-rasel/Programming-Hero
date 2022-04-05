/*
*Steps to use firebase
* 1. Create a Project on console,firebase.google.com
* 2. npm install firebase
* 3. Register web app at firebase 
* 4. Copy firebase init with config from firebase project from settings in to a file
* 5. Export default app from firebase.init.js
* 6. import app firebase init.js in your app.js
* 7. import getAuth from firebase/auth and create auth = getAuth(app)
* 8. Turn on google authentication(firebase > authentication> enable google sign in)
* 9. Create google provider
* 10. use signInWithPopup and pass auth and provider
* 11. handle .then (if successful) and catch error (if error)

*/