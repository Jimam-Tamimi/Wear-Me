from itertools import product
from typing import Iterable, Optional
from django.db import models
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(_('Category Name'), null=False, blank=False,  max_length=300)

class Color(models.Model):
    color = models.CharField(_('Color'), null=False, blank=False,  max_length=30)
    color_code = models.CharField(_('Color Code'), null=False, blank=False,  max_length=30)
    def __str__(self):
        return self.color
        
        
    def save(self, *args, **kwargs):
        self.color = self.color.upper()
        return super().save(*args, **kwargs)
    
    
class Size(models.Model):
    size = models.CharField(_('Size'), null=False, blank=False,  max_length=30)
    def __str__(self):
        return self.size

    def save(self, *args, **kwargs):
        self.size = self.size.upper()
        return super().save(*args, **kwargs)

class ProductImage(models.Model):
    color = models.CharField(_('Product Color'), max_length=50, default='white')
    image = models.ImageField(_("Product Image"), upload_to='product-images', blank=False, null=False)
    alt_text = models.CharField(_('Alt Text'), null=True, blank=True,  max_length=50, default='')
    def save(self, *args, **kwargs):
        self.color = self.color.upper()
        return super().save(*args, **kwargs)
    




class Product(models.Model):
    name = models.CharField(_('Product Name'), null=False, blank=False, max_length=300)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(_('Product Description'))
    price = models.FloatField(_('Product Price'), null=False, blank=False)
    stock = models.PositiveIntegerField(_('Product Stock'), null=False, blank=False)
    colors = models.ManyToManyField(Color, verbose_name=_("Colors"))
    sizes = models.ManyToManyField(Size, verbose_name=_("Sizes"))
    images = models.ManyToManyField(ProductImage, verbose_name=_("Product Image"))

class OrderItem(models.Model):
    product = models.ForeignKey(Product, verbose_name=_("Product"), on_delete=models.CASCADE)
    size = models.CharField(_('Product Size'), null=False, blank=False, max_length=30)
    color = models.CharField(_('Product Color'), null=False, blank=False, max_length=30)
    itemCount = models.PositiveIntegerField(_('Item Count'), default=1,  null=False, blank=False)
    