from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins
from rest_framework.decorators import permission_classes
from rest_framework import permissions
from ebridge.models import Product
from ebridge.serializers import *
from django.contrib.auth.models import User
from knox.auth import AuthToken

# Create your views here.


class CategoryAPI(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    @permission_classes([permissions.IsAuthenticated])
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class WishListViewSet(generics.RetrieveAPIView,
                      generics.UpdateAPIView
                      ):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    queryset = WishList.objects.all()
    serializer_class = WishListSerializer

    def get_object(self):
        wish_list = WishList.objects.get(user=self.request.user)
        return wish_list


class ContactAPI(generics.CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def create(self, request, *args, **kwargs):

        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            new_contact = serializer.save()

            return Response({
                'name': new_contact.full_name,
                'message': 's' # for success
            })
        else:
            return Response({
                'message': 'f' # for failure
            })


class FAQAPI(generics.ListAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()
