# Generated by Django 2.1.4 on 2020-11-18 14:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_profile_isverified'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='cv',
        ),
    ]
