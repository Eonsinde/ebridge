from django.urls import path, include
from rest_framework import routers
from ebridge.views import *
from accounts.views import ProfileAPI

# write your routes here


router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'profile', ProfileAPI)
# router.register(r'wishlist', WishListViewSet.as_view())

urlpatterns = [
    path('category', CategoryAPI.as_view()),
    # path('products', ProductAPI.as_view(), name='products-view'),
    path('wishlist', WishListViewSet.as_view()),
    path('contact', ContactAPI.as_view()),
    path('faqs', FAQAPI.as_view()),
    path('', include(router.urls)),
]
