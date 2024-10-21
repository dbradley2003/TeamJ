# services.py

# from .models import CurrencyValues
# from .util import fetch_currency_data

# def update_currency_values():
#     data = fetch_currency_data()  # Fetch data from the API
#     if not data:
#         return

#     for code, value_data in data.items():
#         try:
#             # Try to get the currency record from the database
#             currency = CurrencyValues.objects.get(name=code.upper())
            
#             # Update the currency value
#             currency.value_in_usd = value_data['usd']
#             currency.save()  # Save the updated record

#         except CurrencyValues.DoesNotExist:
#             print(f"Currency {code.upper()} not found in the database.")
