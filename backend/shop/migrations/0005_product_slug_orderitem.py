# Generated by Django 4.2.2 on 2023-06-26 15:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0004_productimage_color"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="slug",
            field=models.SlugField(default="default-slug", verbose_name="Slug"),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name="OrderItem",
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
                ("size", models.CharField(max_length=30, verbose_name="Product Size")),
                (
                    "color",
                    models.CharField(max_length=30, verbose_name="Product Color"),
                ),
                (
                    "itemCount",
                    models.PositiveIntegerField(default=1, verbose_name="Item Count"),
                ),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="shop.product",
                        verbose_name="Product",
                    ),
                ),
            ],
        ),
    ]
