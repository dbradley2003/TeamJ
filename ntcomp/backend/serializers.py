from django.contrib.auth.models import User
from .models import UserAssets,CurrencyValues
from rest_framework import serializers

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrencyValues
        fields = ['Name', 'value_in_usd']

    # def create(self, validated_data):
    #     Currencies = [CurrencyValues(**item) for item in validated_data]
    #     return CurrencyValues.objects.bulk_create(Currencies)



class AssetSerializer(serializers.ModelSerializer):
    currency_name = serializers.SerializerMethodField()

    class Meta:
        model = UserAssets
        fields = ['Amount', 'currency_name']

    
    def get_currency_name(self, obj):
        return obj.CurrencyID.Name
        

   
