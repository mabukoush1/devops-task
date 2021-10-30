
import os
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import redis
from requests import get
from dotenv import load_dotenv


# Initialise all environment variables
load_dotenv()

db_name = '%s' % os.environ['DB']
db_host = '%s' % os.environ['DB_HOST']
db_port = '%s' % os.environ['DB_PORT']
db_pass = '%s' % os.environ['DB_PASS']
r = redis.StrictRedis(host=db_host, port=db_port, password=db_pass, db=db_name)




def index(request):

    ip = get('https://api.ipify.org').text
    agent= request.headers.get('User-Agent')

    check_key = r.exists(f'{ip}')
    if check_key == 1:

        r.incr(f'{ip}')
        visit_count = r.get(f'{ip}')
    else:
        r.set(f'{ip}', 0)
        r.incr(f'{ip}')
        visit_count = r.get(f'{ip}')


    context = {
        'my_ip': ip,
        'no_of_visit': visit_count.decode(),
        'agent':agent,
    }

    return render(request, 'index.html', context)

