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
                   //sh "mvn -Dsonar.branch.longLivedBranches.regex='(branch|release|pibfe-${env['GIT_BRANCH']}).*' -Dsonar.branch.name='pibfe-${env['GIT_BRANCH']}' -Dsonar.projectKey='pibfe-${env['GIT_BRANCH']}' sonar:sonar"
               }              
           }
       }
   }
}
