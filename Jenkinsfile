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
                    powershell 'Start-Process -NoNewWindow -FilePath "npm" -ArgumentList "test"'
                    powershell 'Start-Sleep -Seconds 10' // Wait for server to star
                    powershell 'node seleniumTest.js'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the React app... on netlify'
                script {
                    powershell 'npm install -g netlify-cli'
                    powershell 'netlify deploy --prod --auth $NETLIFY_AUTH_TOKEN --dir=dist'
                }
            }
        }
    }
}
