from django.contrib import admin
from .models import Category, Color, ProductImage, Size

from shop.models import Product

# Register your models here.
admin.site.register(Product)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(ProductImage)
admin.site.register(Category)