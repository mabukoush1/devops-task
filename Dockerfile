FROM python:3.9.7-alpine3.14

ENV APP_HOME /app
WORKDIR $APP_HOME

COPY web_app/ .

RUN pip install -r requirements.txt

ENTRYPOINT [ "python" ]
CMD [ "manage.py","runserver","0.0.0.0:8000" ]
