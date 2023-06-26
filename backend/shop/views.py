from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import Product
from .serializers import ProductSerializer


# Create your views here.
class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'slug'