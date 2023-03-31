pipeline{
    agent any
    stages{
        stage("pre-build"){
            steps{
                echo 'make environment ready'
            }

        }
        stage("build"){
            steps{
                echo 'build project'
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