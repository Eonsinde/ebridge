# Generated by Django 2.1.4 on 2020-05-21 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ebridge', '0014_remove_profile_zip_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='is_worker',
            field=models.BooleanField(default=False),
        ),
    ]