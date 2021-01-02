from django.contrib import admin
from ebridge.models import *
from accounts.models import UploadModel

# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Collaboration)
class CollaborationAdmin(admin.ModelAdmin):
    pass


@admin.register(UploadModel)
class UploadModelAdmin(admin.ModelAdmin):
    pass


#
# @admin.register(ProductDescription)
# class ProductDescriptionAdmin(admin.ModelAdmin):
#     pass

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(WishList)
class WishListAdmin(admin.ModelAdmin):
    pass


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    pass


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    pass



