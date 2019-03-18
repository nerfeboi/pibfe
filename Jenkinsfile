pipeline {
   agent any
   stages{
       stage('Build') {
           steps{
                 sh "mvn -Dmaven.test.failure.ignore clean package"
           }
       }
       stage('Results') {
           steps{
                junit '**/target/surefire-reports/TEST-*.xml'
                archive 'target/*.jar'
           }
       }
       stage('Code Quality - Sonarqube'){
           steps{
               withSonarQubeEnv('Sonarqube') {
                  script{
                     if (env.BRANCH_NAME.startsWith('PR')) {
                           echo "env.BRANCH_NAME"
                     }
                  }
                   //sh "mvn -Dsonar.projectKey='${env['GIT_BRANCH']}-sit' -Dsonar.projectName='${env['GIT_BRANCH']}-sit' sonar:sonar"
                   //sh "mvn -Dsonar.projectKey='${env['GIT_BRANCH']}-uat' -Dsonar.projectName='${env['GIT_BRANCH']}-uat' sonar:sonar"                         
                   //sh "mvn -Dsonar.branch.longLivedBranches.regex='(branch|release|${env['GIT_BRANCH']}).*' -Dsonar.branch.name='${env['GIT_BRANCH']}-sit' -Dsonar.projectKey='${env['GIT_BRANCH']}-sit' sonar:sonar"
                   //sh "mvn -Dsonar.branch.longLivedBranches.regex='(branch|release|${env['GIT_BRANCH']}).*' -Dsonar.branch.name='${env['GIT_BRANCH']}-uat' -Dsonar.projectKey='${env['GIT_BRANCH']}-uat' sonar:sonar"
               }              
           }          
       }
   }
}
