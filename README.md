# Taalam Arabia: A Vocabulary Learning Applications  

![Taalam Arabia Banner](https://i.ibb.co.com/VRGbQcx/image.png)  

**Taalam Arabia** is an interactive web-based application designed to help users expand their Arabic vocabulary through engaging lessons and tutorials. With structured learning paths, audio pronunciation, and Firebase authentication, this platform makes mastering Arabic vocabulary easier and more enjoyable.  

## 🚀 Live Demo  
🔗 **[Visit Taalam Arabia](https://taalam-arabia.netlify.app/)**  

---

## ✨ Features  
✅ **User Authentication** – Secure login and registration with Firebase.  
✅ **Interactive Lessons** – 10 structured lessons with vocabulary words categorized by difficulty.  
✅ **Speech Synthesis** – Click on a word to hear its pronunciation.  
✅ **Tutorial Videos** – Embedded YouTube tutorials for better learning.  
✅ **Profile Management** – View and update user information.  
✅ **Responsive Design** – Optimized for mobile, tablet, and desktop.  
✅ **Dynamic Animations** – Smooth transitions using Animate.css.  
✅ **Private Routes** – Lessons and profile pages are restricted to logged-in users.  
✅ **Error Handling** – Custom 404 error page for invalid routes.  

Got it! I'll update the **Screenshots** section to display images in a more concise and organized way, ensuring they don't take up the full width of the README. Here's the improved version:

---

## 🖼️ Screenshots  

Here are some key pages of **Taalam Arabia**:  

### 🔹 Home Page  
![Home Page](https://i.ibb.co.com/FqVSFBqW/Taalam.png)  

### 🔹 Lessons Page  
![Lessons Page](https://i.ibb.co.com/SD1KYvzq/Learning.png)  
![Lessons Page](https://i.ibb.co.com/JjKzHqh2/Lessons.png)  

### 🔹 Profile Page  
![Profile Page](https://i.ibb.co.com/tMDVZ247/Profile.png)  

### 🔹 Authentication (Login & Register)  
![Authentication](https://i.ibb.co.com/hxr2wY2H/Login.png)  

### 🔹 Tutorials Page  
![Tutorials Page](https://i.ibb.co.com/0jcPx2FP/tutorial.png)  

### 🔹 Error Page (404)  
![Error Page](https://i.ibb.co.com/4w5C16PD/Error.png)  

---  
## 🛠️ Installation  

To run the project locally, follow these steps:  

```bash
# Clone the repository
git clone https://github.com/yourusername/taalam-arabia.git

# Navigate to the project directory
cd taalam-arabia

# Install dependencies
npm install

# Create a .env file and add your Firebase API keys
# Start the development server
npm start
```

## 📖 Usage  

&nbsp;1.&nbsp; Visit the **[Live Demo](https://taalam-arabia.netlify.app/)**.  
&nbsp;2.&nbsp; Register/Login using Firebase authentication.  
&nbsp;3.&nbsp; Navigate through the lessons, click on words to hear pronunciations, and watch tutorials.  
&nbsp;4.&nbsp; Update your profile from the **My Profile** section.  
&nbsp;5.&nbsp; Logout when done!  

## ⚙️ Technologies Used  

```bash
- React.js: Frontend framework  
- React Router: Navigation & routing  
- Tailwind CSS & DaisyUI: UI design  
- Firebase: Authentication & hosting  
- Animate.css: Smooth animations  
- React Icons: Icons for UI enhancement  
- Speech Synthesis API: For vocabulary pronunciation  
- React CountUp: Animated success metrics  
```

## 📁 Project Structure  

```
/taalam-arabia
│── /public
│── /src
│   │── /assets
│   │── /components
│   │── /firebase
│   │── /LayoutComponent
│   │── /pages
│   │── /provider
│   │── /routes
│   │── App.js
│   │── index.js
│── .env
│── package.json
│── README.md
```

## 🔄 Routes & Pages  

| Route | Access | Description |  
|-------|--------|------------|  
| `/` | Public | Home Page with a welcome banner and success stats |  
| `/learning` | Public | Displays lesson cards and tutorial section |  
| `/lessons/:lesson_no` | Private | Shows vocabulary words for a selected lesson |  
| `/tutorials` | Private | Embedded YouTube videos for language learning |  
| `/profile` | Private | User profile details and update option |  
| `auth/login` | Public | Login form with Google authentication |  
| `auth/register` | Public | User registration page |  
| `/*` | Public | Custom 404 error page |  

## 🔐 Authentication System  

- **Login Page:** Email & password authentication with Firebase.  
- **Register Page:** User registration with Firebase and validation.  
- **Google Authentication:** Sign in with Google option available.  
- **Private Routes:** Lessons & profile pages are accessible only after login.  

## 🎯 Challenges & Enhancements  

- Implemented **speech synthesis** for Arabic vocabulary pronunciation.  
- Used **React CountUp** for animated success stats.  
- **Responsive Design** tested across multiple screen sizes.  
- **Secure Firebase API keys** using environment variables (`.env`).  

---
