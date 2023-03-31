pipeline{
    agent any
    stages{
        stage("pre-build"){
            steps{
                echo 'using npm to download depedencies'
                nodejs('Node-19.8.1'){
                    sh 'cd dev/backend'
                    sh 'npm ci'
                }
            }

        }
        stage("build"){
            steps{
                echo 'running server'
                nodejs('Node-19.8.1'){
                    sh 'cd dev/backend'
                    sh 'npm run start'
                }
            }

        }
        stage("test"){
            steps{
                echo 'test project'
            }
            
        }
        stage("deploy"){
            steps{
                echo 'Deploy project'
            }
            
        }
    }
}