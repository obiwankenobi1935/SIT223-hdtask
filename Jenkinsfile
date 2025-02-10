pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the React project...'
                script {
                    // Run npm install and build commands for React
                    powershell 'npm install'
                    powershell 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    // Run tests using your testing framework (e.g., Jest)
                    // Run npm test and wait for it to complete
                    // powershell 'npm test'  // Run tests directly, it will wait for completion
                    // Optionally add a sleep here if you need time for server setup
                    // powershell 'Start-Sleep -Seconds 5'  // Wait if you need some additional time
                    // Run selenium test after tests finish
                    powershell 'node seleniumTest.js'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the React app... on Netlify'
                script {
                    powershell 'npm install -g netlify-cli'
                    powershell 'netlify deploy --prod --auth $NETLIFY_AUTH_TOKEN --dir=dist'
                }
            }
        }
    }
}
