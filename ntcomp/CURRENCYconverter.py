import requests
import pandas as pd
import matplotlib.pyplot as plt

key = '81191f8514a905e075f85e4ba9c64d85'

url = f'http://api.currencylayer.com/live?access_key={key}'

response = requests.get(url)
data = response.json()

if data.get('success'):
    rates = data['quotes']

    df = pd.DataFrame(rates.items(), columns=['Currency Pair', 'Exchange Rate'])
    df['Currency'] = df['Currency Pair'].str[3:]  # Extracts currency code
    print("Exchange Rates:")
    print(df.head())
else:
    print("Error:") #data.get('error', {}).get('info', 'Unable to fetch data.'))

def convert_currency(amount, from_currency, to_currency):
    currency_pair = f"{from_currency}{to_currency}" #USDGBP

    rate = df[df['Currency Pair'] == currency_pair]['Exchange Rate'].values

    if len(rate) == 0:
        print(f"Exchange rate for {from_currency}/{to_currency} not found.")
        return None
    else:
        converted_amount = amount * rate[0]
        print(f"{amount} {from_currency} = {converted_amount:.2f} {to_currency}")
        return converted_amount

# Example usage
convert_currency(100, 'USD', 'EUR')  # Convert 100 USD to EUR
convert_currency(100, 'USD', 'EUR')    # Convert 1 USD to BTC -> cryptocurrency pair