pipeline {
    options {
        skipDefaultCheckout()
        timestamps()
    }
    parameters {
        string(name: 'BUILD_VERSION', defaultValue: '', description: 'The build version to deploy (optional)')
    }
    agent {
        label 'internal-build.ncats'
    }
    triggers {
        pollSCM('H/5 * * * *')
    }
    environment {
        PROJECT_NAME = "thrizer-admin"
        TYPE = "web"
        DOCKER_REPO_NAME = "labshare/thrizer_clinician_labshare_api"
    }
    stages {
        stage('Clean') {
            steps {
                cleanWs()
            }
        }
        stage('Build Version'){
            when { expression { return !params.BUILD_VERSION } }
            steps{
                script {
                    BUILD_VERSION_GENERATED = VersionNumber(
                        versionNumberString: 'v${BUILD_YEAR, XX}.${BUILD_MONTH, XX}${BUILD_DAY, XX}.${BUILDS_TODAY}',
                        projectStartDate:    '1970-01-01',
                        skipFailedBuilds:    true)
                    currentBuild.displayName = BUILD_VERSION_GENERATED
                    env.VERSION = BUILD_VERSION_GENERATED
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
                                "BUILD_VERSION=" + (params.BUILD_VERSION ?: env.VERSION)
                            ]) {
                                checkout scm
                                script {
                                        docker.build("${env.IMAGE_NAME}", "--build-arg NPM_TOKEN=${LABSHARE_NPM_TOKEN} --no-cache ./")
                                        docker.withRegistry("https://registry-1.docker.io/v2/","f16c74f9-0a60-4882-b6fd-bec3b0136b84") {
                                        docker.image("${env.IMAGE_NAME}").push("${BUILD_VERSION}")
                                    
                                    //def build = new org.labshare.Build()
                                    //build.buildNodeJS()
                                    
                                    //docker.build("${env.IMAGE_NAME}", "--no-cache --build-arg SOURCE_FOLDER=./${env.BUILD_VERSION} .")

                                    //docker.withRegistry("https://registry-1.docker.io/v2/","f16c74f9-0a60-4882-b6fd-bec3b0136b84") {
                                        //docker.image("${env.IMAGE_NAME}").push("${BUILD_VERSION}")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
 
        stage('Deploy - CI') {
            agent {
                label 'thrizer_labshare'
            }
            steps {
                configFileProvider([
                    configFile(fileId: 'thrizer-loopback-ci-compose-file', targetLocation: 'docker-compose.yml'),
                    configFile(fileId: 'mongo-init.js', targetLocation: 'mongo-init.js')
                ]) {
                    withAWS(credentials:'aws-jenkins-build') {
                        //env.DOCKER_LOGIN=""
                        sh '''
                        export DOCKER_LOGIN="`aws ecr get-login --no-include-email --region us-east-1`"
                        $DOCKER_LOGIN
                        '''
                        ecrLogin()
                        withEnv([
                            "IMAGE_NAME=labshare/thrizer_clinician_labshare_api",
                            "BUILD_VERSION=" + (params.BUILD_VERSION ?: env.VERSION)
                        ]) {
                            script {
                                def docker = new org.labshare.Docker()
                                docker.deployDockerUI()
                            }
                        }
                    }
                }
            }
        }
    }
}