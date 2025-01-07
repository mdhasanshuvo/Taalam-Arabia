# Taalam Arabia: A Vocabulary Learning Application

**Taalam Arabia** is a web-based application designed to help users learn Arabic vocabulary through interactive lessons and tutorials. It offers structured lessons, a featured words section, and user profile management to enhance the learning experience.

## Purpose
The purpose of **Taalam Arabia** is to make learning Arabic vocabulary engaging and accessible for users of all levels. Through lessons, featured content, and dynamic tutorials, users can improve their Arabic skills in a structured manner.

## Live URL
🔗 [Visit Taalam Arabia](https://taalam-arabia.netlify.app/)

## Key Features
- **User Authentication:** Secure user login and signup functionality powered by Firebase.
- **Dynamic Lessons:** Access 10 lessons with unique vocabulary and information.
- **Featured Words of the Day:** Displays six random words from different lessons daily.
- **Profile Management:** Users can view and update their profile information, including name and photo.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Interactive Animations:** Engages users with smooth animations using Animate.css.
- **404 Error Page:** Custom error page with navigation options for invalid routes.
- **Speech Synthesis:** Vocabulary pronunciation on card click for auditory learning.

## Pages and Navigation
- **Start Learning Page:**
  - Displays 10 lessons with dynamic cards for navigation.
  - Embedded YouTube tutorial for learning the Arabic alphabet.
  
- **Lessons Page:**  
  - Shows vocabularies based on the selected lesson number.
  - Displays word details in color-coded cards based on difficulty.
  - Includes a modal popup for context-specific information like “When to say” and examples.
  
- **My Profile Page:**
  - Displays user information, including name, email, and profile photo.
  - Provides an option to update user details.

- **Update Profile Page:**
  - Form to update the user's name and photo.
  - Updates user information in Firebase and redirects to the profile page.

- **Tutorials Page:**
  - Embedded YouTube videos to help users learn Arabic effectively.
  - A button to navigate back to the start-learning page.

- **About Us Page:**
  - Information about the website's mission and purpose.
  - Details about the development process and challenges.

- **404 Error Page:**
  - Custom-designed page for invalid routes with a “Back to Home” button.

## Technologies & NPM Packages Used
```bash
- React Router: For routing and navigation.
- Tailwind CSS & DaisyUI: For modern, responsive UI components.
- Firebase: For user authentication and profile management.
- Animate.css: For simple, elegant animations.
- Typewriter Effect: To add dynamic welcome messages.
- React Icons: For incorporating icons throughout the site.
- Speech Synthesis: For pronouncing Arabic words on card click, helping users hear vocabulary.

## 🏃 How to Run Locally

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**

### Steps to Run Locally

**Clone the Repository**  
   Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/mdhasanshuvo/Taalam-Arabia.git
   cd haven-hotel-and-suites
