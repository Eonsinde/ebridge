# Generated by Django 2.1.4 on 2020-06-12 18:03

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200611_2134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadmodel',
            name='token',
            field=models.UUIDField(default=uuid.UUID('ee076f96-5f9a-41b8-97ce-ec3a2d759585'), primary_key=True, serialize=False, unique=True),
        ),
    ]