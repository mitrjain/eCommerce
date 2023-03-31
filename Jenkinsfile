pipeline{
    agent any
    environment{
        ENV_FILE = credentials('env')
    }
    stages{
        stage("pre-build"){
            steps{
                echo "${BUILD_NUMBER}"
                echo 'using npm to download depedencies'
                nodejs('Node-19.8.1'){
                    dir('/var/jenkins_home/workspace/test-pipeline_jenkins-test/dev/backend/'){
                        sh 'pwd'
                        sh 'ls -al'
                        sh 'npm ci'
                        
                    }
                    
                }
            }

        }
        stage('write') {
           steps {
            dir('/var/jenkins_home/workspace/test-pipeline_jenkins-test/dev/backend/'){
                script {
                   writeFile(file: '.env', text: ENV_FILE)
                   sh "ls -l"
               }
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