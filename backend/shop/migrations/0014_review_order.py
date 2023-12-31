# Generated by Django 4.2.2 on 2023-07-02 12:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0013_review"),
    ]

    operations = [
        migrations.AddField(
            model_name="review",
            name="order",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="shop.order",
                verbose_name="Order",
            ),
        ),
    ]
