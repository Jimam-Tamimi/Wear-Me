from itertools import product
from typing import Iterable, Optional
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(_('Category Name'), null=False, blank=False,  max_length=300)
    def __str__(self):
        return self.name

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
    slug = models.SlugField(_('Slug'), null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(_('Product Description'))
    price = models.FloatField(_('Product Price'), null=False, blank=False)
    stock = models.PositiveIntegerField(_('Product Stock'), null=False, blank=False)
    colors = models.ManyToManyField(Color, verbose_name=_("Colors"))
    sizes = models.ManyToManyField(Size, verbose_name=_("Sizes"))
    images = models.ManyToManyField(ProductImage, verbose_name=_("Product Image"))
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        return super().save(*args, **kwargs)
    
def get_product_color_text(c):
    print(c)
def get_product_size_text(c):
    print(c)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, verbose_name=_("Product"), on_delete=models.RESTRICT)
    size = models.ForeignKey(Size, verbose_name=_('Product Size'), on_delete=models.RESTRICT , null=False, blank=False, max_length=30)
    color = models.ForeignKey(Color, verbose_name=_('Product Color'),on_delete=models.RESTRICT, null=False, blank=False, max_length=30)
    itemCount = models.PositiveIntegerField(_('Item Count'), default=1,  null=False, blank=False)


class Order(models.Model):
    products = models.ManyToManyField(OrderItem, verbose_name=_('Products'))
    fName = models.CharField(verbose_name=_("First Name"), max_length=30, null=False, blank=False)
    lName = models.CharField(verbose_name=_("Last Name"), max_length=30, null=False, blank=False)
    email = models.EmailField(verbose_name=_("Email"), max_length=50, null=False, blank=False)
    number = models.CharField(verbose_name=_("Phone Number"), max_length=30, null=False, blank=False)
    addNumber = models.CharField(verbose_name=_("Additional Phone Number"), max_length=30)
    address = models.CharField(verbose_name=_("Address"), max_length=100, null=False, blank=False)
    totalPrice = models.FloatField(_('Total Price'), null=False, blank=False)
    payment = models.BooleanField(verbose_name=_("Payment Done"), default=False)
    order_status = models.CharField(verbose_name=_("Order Status"), max_length=100, null=False, blank=False, default='In Progress')
    
    def __str__(self):
        return f"{self.fName} {self.lName}" 
    
