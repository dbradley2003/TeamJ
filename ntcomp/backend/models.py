from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class CurrencyValues(models.Model):
   #Default Primary Key ID
   Name = models.CharField(max_length=100)
   value_in_usd = models.DecimalField(max_digits=10,decimal_places=8)
   last_updated = models.DateTimeField(auto_now=True)

class UserAssets(models.Model):
    #UserID and CurrencyID are primary keys
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    CurrencyID = models.ForeignKey(CurrencyValues, on_delete=models.CASCADE)
    Amount = models.DecimalField(max_digits=20,decimal_places=10)

class Transactions(models.Model):
    #Default Primary Key ID
    InputCurrencyID = models.ForeignKey(CurrencyValues,related_name="input_transactions",on_delete=models.PROTECT)
    OutputCurrencyID = models.ForeignKey(CurrencyValues,related_name="output_transactions",on_delete=models.PROTECT)
    Amount = models.DecimalField(max_digits=20,decimal_places=10)

class UserTransactions(models.Model):
    #TransactionID & UserID are the P.K.'s
    TransactionID = models.ForeignKey(Transactions,on_delete=models.PROTECT)
    TransactionUserID = models.ForeignKey(User,on_delete=models.PROTECT)
    Timestamp = models.DateTimeField(auto_now=True)