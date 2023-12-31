# Generated by Django 4.2.2 on 2023-06-27 09:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0007_alter_orderitem_color_alter_orderitem_size"),
    ]

    operations = [
        migrations.AlterField(
            model_name="orderitem",
            name="color",
            field=models.ForeignKey(
                max_length=30,
                on_delete=django.db.models.deletion.DO_NOTHING,
                to="shop.color",
                verbose_name="Product Color",
            ),
        ),
        migrations.AlterField(
            model_name="orderitem",
            name="size",
            field=models.ForeignKey(
                max_length=30,
                on_delete=django.db.models.deletion.DO_NOTHING,
                to="shop.size",
                verbose_name="Product Size",
            ),
        ),
    ]
