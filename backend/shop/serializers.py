from rest_framework import serializers

from .models import Category, Color, Order, OrderItem, Product, ProductImage, Size



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


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"
        

        
class OrderSerializer(serializers.ModelSerializer):
    products = OrderItemSerializer(many=True, read_only=True)

    totalPrice = serializers.FloatField(required=False, read_only=True)
    payment = serializers.BooleanField(read_only=True) 
    class Meta:
        model = Order
        fields = ["products", 'fName', 'lName', 'email','number', 'addNumber', 'address', 'totalPrice','payment', 'order_status']