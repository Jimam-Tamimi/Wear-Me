# Generated by Django 4.2.2 on 2023-06-26 02:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(max_length=300, verbose_name="Category Name"),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=300, verbose_name="Product Name")),
                ("description", models.TextField(verbose_name="Product Description")),
                ("price", models.FloatField(verbose_name="Product Price")),
                ("stock", models.PositiveIntegerField(verbose_name="Product Stock")),
                (
                    "size",
                    models.CharField(
                        blank=True,
                        max_length=300,
                        null=True,
                        verbose_name="Product Size",
                    ),
                ),
                (
                    "color",
                    models.CharField(
                        blank=True,
                        max_length=300,
                        null=True,
                        verbose_name="Product Color",
                    ),
                ),
                (
                    "image",
                    models.ImageField(
                        upload_to="product-image", verbose_name="Product Image"
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="shop.category",
                    ),
                ),
            ],
        ),
    ]
