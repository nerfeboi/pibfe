pipeline {
   agent any
   stages{
       stage('Build') {
           steps{
                 echo 'test'
                 sh "mvn -Dmaven.test.failure.ignore clean package"
           }
       }
       stage('Results') {
           steps{
                junit '**/target/surefire-reports/TEST-*.xml'
                archive 'target/*.jar'
           }
       }
       stage("Code Quality - Sonarqube"){
           steps{
               withSonarQubeEnv('Sonarqube') {
                   sh "mvn -Dsonar.projectKey='pibfe-${env['GIT_BRANCH']}' sonar:sonar"
               }              
           }
       }
       stage('artifactory'){
         steps{
            script{
               def server = Artifactory.server('Artifactory')
               def uploadBase = "PIB"
               def uploadSpec = """{
                                       "files":[
                                           {
                                               "pattern": "**/target/*.jar",
                                               "target": "${uploadBase}/"
                                           }
                                       ]
                                   }                             
                                   """
               def buildInfo = server.upload(uploadSpec)
               server.publishBuildInfo(buildInfo)                
            }
         }
      }
   }
}
