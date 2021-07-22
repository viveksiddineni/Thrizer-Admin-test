pipeline {
    options {
        timestamps()
        disableConcurrentBuilds()
    }
    parameters {
        string(name: 'BUILD_VERSION', defaultValue: '', description: 'The build version to deploy (optional)')
        choice(name: 'DEPLOY_TO', choices: 'CI', description: 'The deployment stage to trigger')
    }
    environment {
        PROJECT_NAME = "thrizer-admin"
        TYPE = "web"
        DOCKER_REPO_NAME = "labshare/thrizer_clinician_labshare_api"
    }
    agent {
        label 'aws && build && linux && ubuntu'
    }
    triggers {
        pollSCM('H/5 * * * *')
    }
    stages {
        stage('Clean') {
            steps {
                cleanWs()
                checkout scm
            }
        }
        stage('Build Version') {
            when {
                expression {
                    return !params.BUILD_VERSION
                }
            }
            steps{
                script {
                    def commitID = env.GIT_COMMIT
                    currentBuild.displayName = commitID
                    env.BUILD_VERSION = commitID
                    env.BUILD = 'true'
                }
            }
        }
          stage('Build - Docker') {
            when { expression { return env.BUILD == 'true' }}
            steps {
                retry(3) {
                    sshagent (credentials: ['917d2cc8-84fe-4faf-89e5-25ea6649be83']) {
                        nodejs(configId: 'kw-npmrc', nodeJSInstallationName: 'Node.js 12.16') {
                            withEnv([
                                "IMAGE_NAME=labshare/thrizer_clinician_labshare_api",
                                "BUILD_VERSION=" + (params.BUILD_VERSION ?: env.BUILD_VERSION)
                            ]) {
                                withCredentials([string(credentialsId: 'LABSHARE_NPM_TOKEN', variable: 'LABSHARE_NPM_TOKEN')]) {
                                        script {
                                            // See: https://jenkins.io/doc/book/pipeline/docker/#building-containers
                                            docker.build("${env.IMAGE_NAME}", "--build-arg NPM_TOKEN=${LABSHARE_NPM_TOKEN} --no-cache ./")

                                            docker.withRegistry("https://registry-1.docker.io/v2/","f16c74f9-0a60-4882-b6fd-bec3b0136b84") {
                                                docker.image("${env.IMAGE_NAME}").push("${BUILD_VERSION}")
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        stage('Deploy - CI') {
            options {
                skipDefaultCheckout()
            }
            when {
                expression {
                    return params.DEPLOY_TO == 'CI'
                }
            }
            agent {
                label 'thrizer_labshare'
            }
            steps {
                configFileProvider([
                    configFile(fileId: 'thrizer-loopback-ci-compose-file', targetLocation: 'docker-compose.yml'),
                    configFile(fileId: 'mongo-init.js', targetLocation: 'mongo-init.js')
                ]) {
                        withEnv([ 
                          "IMAGE_NAME=labshare/thrizer_clinician_labshare_api",
                          "BUILD_VERSION=${params.BUILD_VERSION != '' ? params.BUILD_VERSION : env.BUILD_VERSION}"]) {
                            script {
                                sh "chmod 755 mongo-init.js"
                                def docker = new org.labshare.Docker()
                                docker.deployDockerAPI()
                                sh "sleep 5; docker start nginx-gen"
                            }
                        
                    }
                }
            }
        }
    }
    post {
        success {
            jiraSendDeploymentInfo environmentId: 'dev', environmentName: 'dev', environmentType: 'development', site: 'labshare.atlassian.net', state: 'successful'
        }
        failure {
            jiraSendDeploymentInfo environmentId: 'dev', environmentName: 'dev', environmentType: 'development', site: 'labshare.atlassian.net', state: 'failed'
        }
    }
}