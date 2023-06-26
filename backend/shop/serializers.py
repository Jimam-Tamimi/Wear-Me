from rest_framework import serializers

from .models import Category, Color, Product, ProductImage, Size



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = "__all__"
class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = "__all__"
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage()
        fields = "__all__"
        
        

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    colors = ColorSerializer(many=True, read_only=True)
    sizes = SizeSerializer(many=True, read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = "__all__"