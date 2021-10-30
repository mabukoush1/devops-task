#!/bin/bash


startShell(){

checkUserInput
checkDockerRepo

if [ "$docker_res" == "Error" ]
then
    buildImage
    if [ ${#response_docker} > 0 ]
    then
        pushImage
    else
        echo "Image build unsuccessful"
        exit 1
    fi

else
    echo "Image already exists in dockerhub"
    exit 0
fi


}


checkUserInput(){
if test -z ${imageName}; then read -p "Please Specify image Name: " imageName; fi
if test -z ${repo}; then read -p "Please Specify dockerhub username " repo; fi
if test -z ${path}; then read -p "pleas specify docker file path on github repository " path; fi
if test -z ${tag}; then read -p "pleas specify docker image version " tag; fi


}

checkDockerRepo(){
OUTPUT=$(sudo docker inspect --type=image "${repo}"/"${imageName}":"${tag}" 2>&1)
docker_res=`echo $OUTPUT | grep -o Error`
echo "$docker_res"
}

buildImage(){
echo "Image is not found, hence an image will be built and pushed to DockerHub"
    # build image
docker build -t "${repo}"/"${imageName}":"${tag}" -f "${path}"  https://github.com/mabukoush1/devops-task.git
    # test if the newly built image is working
docker container prune -f && sudo docker image prune -f
response_docker="`sudo docker run -e DJANGO_BACKEND_SECRET_KEY=$DJANGO_BACKEND_SECRET_KEY -e DB=$DB -e DB_HOST=$DB_HOST -e DB_PORT=$DB_PORT -e DB_PASS=$DB_PASS --name helloworld --network host -d "${repo}"/"${imageName}":"${tag}"`"
echo "Character length is ${#response_docker}"
}

pushImage(){
echo "Pushing Image....."
# push to dockerhub
docker push "${repo}"/"${imageName}":"${tag}"
echo "Pushed successfully!"
}

display_help(){
cat << EOF

Shell Script help menu:

  Usage: builder.sh [ImageName] [Repo] [path] [tag]
    1. ImageName:  name of the docker image.
    2. Repo: Dockerhub account username.
    3. Path: Dockerfile path on github repository.
    3. Tag: Image Version.

EOF
}



imageName=$1
repo=$2
path=$3
tag=$4



case "$imageName" in
    "--help")
     display_help
     ;;
   *)
     startShell
     ;;
 esac







