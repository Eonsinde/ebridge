# Generated by Django 2.1.4 on 2020-05-16 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ebridge', '0005_auto_20200516_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(upload_to='prof-images/workers/'),
        ),
    ]
