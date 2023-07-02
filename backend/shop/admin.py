from django.contrib import admin
from .models import Category, Color, Order, OrderItem, ProductImage, Review, Size

from shop.models import Product

# Register your models here.
admin.site.register(Product)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(ProductImage)
admin.site.register(Category)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Review)