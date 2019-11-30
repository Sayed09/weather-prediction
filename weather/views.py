from django.shortcuts import render
import requests

def index(request):

    context = {}
    if request.method == "POST":
        month = 3
        city = request.POST.get("city"," ") 
        appid = 'b77beca5d9b318b8b1aa5e7e956956ba'
        url = 'https://api.openweathermap.org/data/2.5/forecast?q=%s&appid=%s' % (city, appid)
        
        forcasting_data = requests.get(url).json() #request the API data and convert the JSON to Python data types
        if forcasting_data['cod'] == "200":
            context = {
                'forcasting_data' : forcasting_data['list'],
                'city': city,
            }

    return render(request, 'weather/index.html', context) #returns the index.html template