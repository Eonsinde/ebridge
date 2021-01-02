# Generated by Django 2.1.4 on 2020-05-22 21:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ebridge', '0020_remove_product_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='collaboration',
            name='user',
        ),
        migrations.DeleteModel(
            name='ProductDescription',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='product',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='user',
        ),
        migrations.RemoveField(
            model_name='product',
            name='collaborators',
        ),
        migrations.DeleteModel(
            name='Collaboration',
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
    ]
