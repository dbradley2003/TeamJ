
# from django.contrib import admin
from django.urls import path 
from .v1.AssetsViewAPI import AssetsView


urlpatterns = [
  path('assetview/',AssetsView.as_view(), name="asset-view" ),
]