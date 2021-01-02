from rest_framework import serializers
from ebridge.models import *
from accounts.models import *

# serialize your models here


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


# class ProductDescriptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ProductDescription
#         fields = '__all__'
#
#
class CollaborationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaboration
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    collaborators = CollaborationSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class WishListSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = WishList
        fields = '__all__'

    def validate(self, attrs):
        print(attrs)
        products_attrs = attrs['products']
        state = True
        for product_attr in products_attrs:
            if (product_attr['id'] is not None or product_attr['id'] != "") and state:
                state = True
            else:
                state = False
        if state:
            return attrs
        raise serializers.ValidationError("You have to send a product with an ID to the wishlist")

    def update(self, instance, validated_data):
        # since products is a many to many field in Wish List Model
        print("Validated data:", validated_data)
        instance.products.set(validated_data['products'])
        instance.save()
        return instance


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    def save(self):  # on save try sending an email
        email = self.validated_data['email']
        message = self.validated_data['content']
        # send_email(
        # from=email, message = message)


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'



