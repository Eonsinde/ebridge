# Generated by Django 2.1.4 on 2020-06-20 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20200617_2307'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='isVerified',
            field=models.BooleanField(default=False),
        ),
    ]
