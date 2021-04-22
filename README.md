# Social Media

Social Media app built with React + Typescript on the front-end and Firebase on the backend

Check out the [deployed site](https://social-media-pkilian.netlify.app/) - You don't need to create an account, just use "Demo Sing In" button to use demo account.

## Summary

This application was built using React (Custom Hooks, Context, React Query, Chakra UI) and Firebase. Firebase firestore handles all the data, and that data is retrieved using a React Query with custom hooks.

I used Chakra UI with chakra default theme for this project because i wanted to focus more on funcionality than design. This libary is really simple, composable and provide great developer experience so i really enjoyed using it. All application data comes from firebase so for fetching and managing data I chose React Query. It is such a great libary and i really enjoyed using it in my projects and I won't stop using it in my future projects :). I also used great and simple libary react-hook-form for handling the forms. I provided auth and active user data to other components via react contex on client side.

## Core packages

1. React Query - Fetch, cache and update data from firebase
2. React Router - Routing
3. Chakra UI - ui component libary and styling
4. React Hook Form - handling forms
5. date-fns - formating dates

## Features

1. Login/Signup
2. Edit profile (add avatar, set fullname)
3. Follow/Unfollow users to see their posts
4. Add/Delete posts
5. Like/Dislike posts
6. Add/Delete comments to posts
7. Check user profile

## Running locally

You need to create firebase app on firebase.google.com then you will get you configuration data.
At the root of your project create an .env.local file with your firebase data:

```bash

REACT_APP_API_KEY=<apiKey>
REACT_APP_AUTH_DOMAIN=<authDomain>
REACT_APP_PROJECT_ID=<projectId>
REACT_APP_STORAGE_BUCKET=<storageBucket>
REACT_APP_MESSAGING_ID=<messagingSenderId>
REACT_APP_APP_ID=<appId>
```

Then run <code>npm i</code> and <code>npm start</code> to see this app in action.
