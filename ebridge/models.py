from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name_plural = 'categories'


class Collaboration(models.Model):  # use this Table to prevent having multiple relationships fields with the user on product
    user = models.OneToOneField(User, unique=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} collabo'


def product_file_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return '__contents_img_vid__/user{0}/{1}'.format(instance.user.id, filename)


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0.0)
    file = models.FileField(upload_to=product_file_directory_path, null=True, blank=True)
    category = models.ForeignKey(Category, default='', on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    description = models.TextField(default='', max_length='1000')  # change this to a  text field
    collaborators = models.ManyToManyField(Collaboration)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        ordering = ['id']
        verbose_name = 'Product'
        verbose_name_plural = "Products"


class Tag(models.Model):
    name = models.CharField(default='', max_length=50) # use JS to ensure all tags begin with a HASH #
    products = models.ManyToManyField(Product)
    use_count = models.IntegerField(default=0)  # increment this after a tag is made with product

    def __str__(self):
        return f'{self.name} - {self.use_count}'

    class Meta:
        ordering = ['use_count']

# class ProductImage(models.Model):
#     product


class WishList(models.Model):
    user = models.OneToOneField(User, default='', on_delete=models.CASCADE)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return f"{self.user}'s wish list"

#
# class Rating(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
    # ratings = models.


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} like on {self.product}'

    class Meta:
        unique_together = ('user', 'product',)  # to prevent liking the same product twice


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(default='', max_length=500)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} review on {self.product}'

    class Meta:
        unique_together = ('user', 'product',)


class Contact(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    title = models.CharField(max_length=300)
    content = models.TextField(max_length=3000)

    def __str__(self):
        return self.email


class FAQ(models.Model):
    title = models.CharField(max_length=500)
    content = models.TextField(max_length=5000)

    def __str__(self):
        return self.title


# class ProductDescription(models.Model):
#     title = models.CharField(max_length=1000)
#     content = models.TextField(max_length=10000)
#
#     def __str__(self):
#         return f'{self.title}'
#
