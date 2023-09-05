Creating a CI/CD (Continuous Integration/Continuous Deployment) pipeline for a React application with Firebase involves automating the process of building, testing, and deploying your application whenever changes are pushed to your source code repository. In this example, we'll use GitHub Actions as the CI/CD platform and Firebase Hosting for deployment. Here are the steps to set up such a pipeline:

**1. Set up Firebase Hosting:**

If you haven't already, set up Firebase Hosting for your React application by following the Firebase Hosting documentation: https://firebase.google.com/docs/hosting

**2. Initialize Your React Project:**

If you haven't already, create a React application using `create-react-app` or your preferred method.

```bash
npx create-react-app my-react-app
cd my-react-app
```

**3. Set up GitHub Repository:**

Create a GitHub repository for your React application and push your code to it.

```bash
# Initialize Git in your project directory (if not already initialized)
git init

# Add and commit your code
git add .
git commit -m "Initial commit"

# Create a GitHub repository
# Follow the instructions on GitHub to create a new repository

# Push your code to GitHub
git remote add origin <repository_url>
git branch -M main
git push -u origin main
```

**4. Set up Firebase Tools:**

Install the Firebase CLI and log in to your Firebase account.

```bash
npm install -g firebase-tools

# Log in to your Firebase account
firebase login
```

**5. Create a GitHub Actions Workflow:**

Create a `.github/workflows/main.yml` file in your repository to define your CI/CD workflow.

```yaml
name: CI/CD with Firebase

on:
  push:
    branches:
      - main # You can change this to match your main branch name

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install

    - name: Build React app
      run: npm run build

    - name: Deploy to Firebase
      run: |
        npm install -g firebase-tools
        firebase deploy --token "$FIREBASE_TOKEN" --only hosting
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

This workflow:

- Listens for pushes to the main branch.
- Checks out the code.
- Installs dependencies.
- Builds the React app.
- Deploys it to Firebase Hosting using a Firebase token stored as a GitHub secret.

**6. Set Up Firebase Token:**

To securely store your Firebase token, go to your GitHub repository, click on "Settings" > "Secrets," and add a new secret called `FIREBASE_TOKEN` with the value of your Firebase token.

**7. Configure Firebase Hosting:**

In your `firebase.json` file, ensure that the `public` field matches the build output directory (typically, `build`):

```json
{
  "hosting": {
    "public": "build", // Update this if your build directory is different
    // ...
  }
  // ...
}
```

**8. Push Changes:**

Push changes to your GitHub repository, and the CI/CD pipeline should automatically trigger the build and deployment process.

Now, every time you push changes to your main branch, GitHub Actions will build your React app and deploy it to Firebase Hosting, ensuring a continuous integration and continuous deployment pipeline for your React Firebase application.