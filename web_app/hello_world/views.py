# from django.shortcuts import render

import os
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import redis
from requests import get
from dotenv import load_dotenv

load_dotenv()

db_name = '%s' % os.environ['DB']
db_host = '%s' % os.environ['DB_HOST']
db_port = '%s' % os.environ['DB_PORT']
db_pass = '%s' % os.environ['DB_PASS']
r = redis.StrictRedis(host=db_host, port=db_port, password=db_pass, db=db_name)




def index(request):
    print(db_pass)
    ip = get('https://api.ipify.org').text
    print(f'My public IP address is: {ip}')

    check_key = r.exists(f'{ip}')
    if check_key == 1:

        r.incr(f'{ip}')
        visit_count = r.get(f'{ip}')
    else:
        r.set(f'{ip}', 0)
        r.incr(f'{ip}')
        visit_count = r.get(f'{ip}')


    context = {
        'greeting': 'Hello World!!',
        'my_ip': ip,
        'no_of_visit': visit_count.decode(),
    }
    return render(request, 'index.html', context)













# # Login view
# def login(request):
#     return render(request, 'hello_world/login.html')




# dig +short myip.opendns.com @resolver1.opendns.com
