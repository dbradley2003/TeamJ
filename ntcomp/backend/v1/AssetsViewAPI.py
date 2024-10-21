from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import UserAssets
from django.core import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication
from ..serializers import AssetSerializer

class AssetsView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    

    def get(self,request):
        user = request.user
        print(user)
        user_assets = UserAssets.objects.filter(UserID=user.id)
        serializer = AssetSerializer(user_assets, many=True)
        return Response(serializer.data)





