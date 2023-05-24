# Smart-Brain-Api 🧠🖼️

Smartbrain is an image recognition web app designed to detect faces in inserted images. After signing in, users can enter any image URL containing a face, and the web app will highlight the detected face using the Clarifai image recognition API. Additionally, the app keeps track of the number of faces checked by the user and displays this count on their dashboard.

## Tech Stack :

* **Client:** React JS

* **Server:** Node JS, Express JS

* **Database:** PostgreSQL

* **API:** Clarifai API

## How does it work?

* Design a user interface for the web application, including a sign-in/register form and a form to enter the image URL (ensuring the URL ends with ".jpg").
* Implement a user authentication system that allows users to sign in or register for an account, using either a user management framework or building the authentication system from scratch.
* Once the user is authenticated, direct them to the home page.
* On the home page, provide an input field where users can enter the URL of an image.
* When the user clicks the "Detect" button, the web application fetches the image using the provided URL.
* Utilize a face detection algorithm or a pre-trained machine learning model to analyze the image and detect faces.
* Count the number of detected faces and store this information in a database or session variable, associating it with the user's account.
* Display the detected face count to the user on the home page or a separate results page.
* The web application remembers the count of detected faces, ensuring it is always available even after the user has clicked "detect" again.

## Usage

**Test users**

| Email | Password  |
| -------- | --------- |
| demo123@gmail.com | demo123 |

## Screenshots :

### Login
![Screenshot (59)](https://github.com/blackhacker09/Smart-brain/assets/56511978/ae8f145c-1cc2-4750-8ec6-2273ad7f1b60)

### Register
![Screenshot (60)](https://github.com/blackhacker09/Smart-brain/assets/56511978/27ce2dc4-9868-4ef7-b134-dfc222eb0c06)

### HomePage
![Screenshot (61)](https://github.com/blackhacker09/Smart-brain/assets/56511978/d2618417-33bb-47d7-a167-f87167b84e8a)

### Detecting faces using URLs
![Screenshot (62)](https://github.com/blackhacker09/Smart-brain/assets/56511978/def82eec-571b-470c-be20-85669adc6a9a)

### for Front End click [Here](https://github.com/blackhacker09/Smart-brain)
