

from django.contrib import admin
from django.urls import path, include, re_path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    re_path(r'^rest-auth/', include('dj_rest_auth.urls')),
    re_path(r'^rest-auth/registration/', include('dj_rest_auth.registration.urls')), 
]
