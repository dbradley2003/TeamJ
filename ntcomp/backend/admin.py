from django.contrib import admin
from .models import CurrencyValues,UserAssets,Transactions,UserTransactions
# Register your models here.

admin.site.register(CurrencyValues)
admin.site.register(UserAssets)
admin.site.register(Transactions)
admin.site.register(UserTransactions)