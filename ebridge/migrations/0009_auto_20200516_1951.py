# Generated by Django 2.1.4 on 2020-05-16 18:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ebridge', '0008_auto_20200516_1859'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='specialization',
            new_name='interests',
        ),
    ]
