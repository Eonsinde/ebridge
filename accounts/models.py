from django.db import models
from django.contrib.auth.models import User
from ebridge.models import Category
import os
from commerce import settings
import uuid

# Create your models here.


def handle_prof_img_upload(instance, filename):
    return '/'.join(['profile_images', str(instance), filename])


def handle_cv_upload(instance, filename):
    return '/'.join(['CV', str(instance), filename])


def handle_tmp_ad_img_upload(instance, filename):
    return '/'.join(['tmp', str(instance), filename])


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default='')
    image = models.ImageField(upload_to=handle_prof_img_upload, null=True, blank=True)
    interests = models.ManyToManyField(Category)
    # cv = models.FileField(upload_to=handle_cv_upload, null=True, blank=True)
    phone_no = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=100, default='')
    state = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=1000, default='')
    isVerified = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username}'


class UploadModel(models.Model):
    token = models.UUIDField(default=uuid.uuid4, primary_key=True, unique=True)
    image = models.ImageField(upload_to=handle_tmp_ad_img_upload)

    # def save(self, *args, **kwargs):
    #     super(UploadModel, self).save(*args, **kwargs)
    #
    #     if 'tmp' in self.image.path:
    #         initial_path = self.image.path
    #
    #         new_name = '/'.join(['prof_images', str(self.token), os.path.basename(initial_path)])
    #         new_path = os.path.join(settings.MEDIA_ROOT, 'prof_images', str(self.token), os.path.basename(initial_path))
    #
    #         if not os.path.exists(os.path.dirname(new_path)):
    #             os.makedirs(os.path.dirname(new_path))
    #         os.rename(initial_path, new_path)
    #
    #         self.image.name = new_name
    #
    #         super(UploadModel, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.pk)

    # def delete(self, using=None, keep_parents=False):
