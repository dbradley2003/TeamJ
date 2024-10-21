# sync_assets.py

from django.core.management.base import BaseCommand
from ...models import CurrencyValues, UserAssets
from ...serializers import CurrencySerializer
from ...util import fetch_currency_data

class Command(BaseCommand):
    help = 'Syncs asset data with an external API'

    def handle(self, *args, **kwargs):
        self.stdout.write("Fetching asset data from external API...")
        
        # Fetch data from the API
        data = fetch_currency_data()['rates']

        for code, data_value in data.items():
            serializer = CurrencySerializer(data={'Name':code,'value_in_usd':data_value})
            if serializer.is_valid():
                serializer.save()
                print('success')
        

       

       
        
        

        

       
        
        

        
        

        


       

           

    