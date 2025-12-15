from rest_framework import serializers
from .models import Usuario

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id','email','username','first_name','last_name']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = Usuario
        fields = ['email','password','username','first_name']

    def create(self, validated_data):

        user = Usuario.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            username= validated_data.get('username',''),
            first_name = validated_data.get('first_name','')
        )
        return user