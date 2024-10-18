from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import UserAssets
from django.core import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication


class AssetsView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    

    def get(self,request):
        user = request.user
        print(user)
        user_assets = UserAssets.objects.filter(UserID=user.id)
        serialized = []
        for obj in user_assets:
            serialized_obj = serializers.serialize('json', [ obj, ])
            serialized.append(serialized_obj)
        return Response(serialized)



