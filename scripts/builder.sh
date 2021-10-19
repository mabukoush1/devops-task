#!/bin/bash
OUTPUT=$(sudo docker inspect --type=image koushema/helloworld:v1.0 2>&1)
docker_res=`echo $OUTPUT | grep -o Error`
echo "$docker_res"

if [ "$docker_res" == "Error" ]
then
    echo "Image is not found, hence an image will be built and pushed to DockerHub"
    # build image
    docker build -t koushema/helloworld:v1.0 -f scripts/Dockerfile  https://github.com/mabukoush1/devops-task.git
    # test if the newly built image is working
    docker container prune -f && sudo docker image prune -f
    response_docker="`docker run -d --name helloworld --network host helloworld:latest tail -f /dev/null`"

    echo "Character length is ${#response_docker}"

    if [ ${#response_docker} > 0 ]
    then
        echo "Pushing Image....."
        # push to dockerhub
        docker push koushema/helloworld:v1.0
        echo "Pushed successfully!"
    else
        echo "Image build unsuccessful"
        exit 1
    fi

else
    echo "Image already exists in dockerhub"
    exit 0
fi








