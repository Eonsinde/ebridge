# Generated by Django 2.1.4 on 2020-05-21 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ebridge', '0012_wishlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='product-images/'),
        ),
    ]