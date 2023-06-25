from rest_framework import serializers
from rest_framework.validators import ValidationError
from .models import User
class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(required=True, write_only=True)
    confirmPassword = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User 
        fields = ['email', 'password', 'confirmPassword']
    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']
        confirmPassword = validated_data['confirmPassword']
        if(password != confirmPassword):
            raise ValidationError('Password and Confirm Password does not match!!')
        user = User.objects.create_user(email, password)
        return user