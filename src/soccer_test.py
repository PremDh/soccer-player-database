import requests
import numpy as np

url = "https://soccer-football-info.p.rapidapi.com/players/list/"

querystring = {"c":"all","p":"4"}

headers = {
    'x-rapidapi-host': "soccer-football-info.p.rapidapi.com",
    'x-rapidapi-key': "edaf27d11fmshb0d383797460812p14a705jsn6dc1c018f5b0"
    }

response = requests.request("GET", url, headers=headers, params=querystring)


print(response.text)