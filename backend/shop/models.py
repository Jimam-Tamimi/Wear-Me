from django.db import models
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(_('Category Name'), null=False, blank=False,  max_length=300)

class Product(models.Model):
    name = models.CharField(_('Product Name'), null=False, blank=False, max_length=300)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(_('Product Description'))
    price = models.FloatField(_('Product Price'), null=False, blank=False)
    stock = models.PositiveIntegerField(_('Product Stock'), null=False, blank=False)
    size = models.CharField(_("Product Size"), blank=True, null=True,  max_length=300)
    color = models.CharField(_("Product Color"), blank=True, null=True,  max_length=300)
    image = models.ImageField(_("Product Image"), upload_to='product-image', blank=False, null=False)
