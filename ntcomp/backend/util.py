

import requests

def fetch_currency_data():
    url = "https://api.exchangeratesapi.io/v1/latest?access_key=e0047f6f9e5db5503ab465750b01a2ff&base=EUR"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Failed to fetch data")
        return None
