# Multistage Docker build

# first stage build
FROM python:3.8 AS test
WORKDIR /code
COPY web_app .


# second stage build
FROM python:3.8 AS debug
RUN mkdir app
WORKDIR /app


# install dependencies
RUN pip install --upgrade pip
COPY --from=0 /code/requirements.txt .
RUN pip install -r requirements.txt
COPY --from=0 /code/ .
#EXPOSE 8000
CMD python manage.py runserver






