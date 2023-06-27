from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Color, Order, OrderItem, Product, Size
from .serializers import OrderSerializer, ProductSerializer


# Create your views here.
class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'slug'

    
class OrderViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    
    
    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
        products = []
        totalPrice = 0
        for cartItem in data['products']:
            try:
                product = Product.objects.get(id=cartItem['id'])
                size = Size.objects.get(id=cartItem['size']['id'])
                color = Color.objects.get(id=cartItem['color']['id'])
                orderItem = OrderItem.objects.create(product=product, size=size, color=color, itemCount=cartItem['itemCount'])
                products.append(orderItem)
                totalPrice += product.price * cartItem['itemCount']
            except Exception:
                continue
        order = Order.objects.create(
            fName=data['firstName'],
            lName=data['lastName'],
            email=data['email'],
            number=data['mobileNumber'],
            addNumber=data['additionalMobileNumber'],
            address=data['address'],
            totalPrice=(totalPrice+60),
            )
        order.products.set(products)
        order.save()
        return Response({'success': True})