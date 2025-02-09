pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('nfp_1xDfvteuHEKy8iaiG1w9jKAUyvGT1P9r97d3')
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/obiwankenobi1935/SIT223-hdtask.git'
            }
        }

        stage('Build') {
            steps {
                powershell 'npm install'
                powershell 'npm run build'
            }
        }

        stage('Test') {
            steps {
                powershell 'npm test -- --coverage'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                powershell 'sonar-scanner -Dsonar.projectKey=your-react-project'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                powershell 'npx netlify deploy --prod --dir=build'
            }
        }
    }
}
