# Generated by Django 2.1.4 on 2020-05-16 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ebridge', '0006_auto_20200516_1835'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientprofile',
            name='interest',
        ),
        migrations.RemoveField(
            model_name='clientprofile',
            name='user',
        ),
        migrations.AddField(
            model_name='profile',
            name='address',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AddField(
            model_name='profile',
            name='city',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='profile',
            name='phone_no',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='profile',
            name='state',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='profile',
            name='zip_code',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.DeleteModel(
            name='ClientProfile',
        ),
    ]
