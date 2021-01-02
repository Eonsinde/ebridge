# Generated by Django 2.1.4 on 2020-05-21 15:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ebridge', '0016_auto_20200521_1639'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='prof-images/workers/')),
                ('phone_no', models.CharField(default='', max_length=20)),
                ('city', models.CharField(default='', max_length=100)),
                ('state', models.CharField(default='', max_length=100)),
                ('address', models.CharField(default='', max_length=1000)),
                ('is_worker', models.BooleanField(default=False)),
                ('interests', models.ManyToManyField(to='ebridge.Category')),
                ('user', models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]