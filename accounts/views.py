from django.shortcuts import render
from accounts.serializers import *
from rest_framework import generics, viewsets, views
from rest_framework import permissions
from rest_framework.decorators import api_view
from knox.auth import AuthToken
from rest_framework.response import Response
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import os
import json
import uuid


# Create your views here.


class UserAPI(generics.RetrieveAPIView):
    """ to get the current authenticated user if token is still valid """
    serializer_class = UserSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_object(self):
        return self.request.user


class ProfileAPI(viewsets.ModelViewSet):
    """ to edit, update and deactivate profile or account """
    # permission_classes = [
    #     permissions.IsAuthenticated
    # ]

    serializer_class = UserSerializer
    queryset = User.objects.all()

    def retrieve(self, request, pk=None):  # to view a user's profile
        user = User.objects.get(pk=pk)
        return Response(UserSerializer(user).data)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def update(self, request, pk=None):  # send auth token to update
        user = User.objects.get(pk=pk)
        if user.is_authenticated and (user == request.user):  # check to see if user id matches authenticated user id before deleting
            return Response({'message': 'Qualified to update'})
        return Response({'message': "Can't update someone else's profile"})

    def destroy(self, request, pk=None):  # send auth token to delete
        user = User.objects.get(pk=pk)
        if user.is_authenticated and (user == request.user):  # check to see if user id matches authenticated user id before deleting
            return Response({'message': 'Qualified to delete'})
        return Response({'message': 'Qualified to delete'})


class TempImageAPI(views.APIView):
    def get(self, request, format=None):
        file_info = ''
        if request.GET['load']:
            file_info = request.GET['load']
        if request.GET['restore']:
            file_info = request.GET['restore']
        try:
            required_image = UploadModel.objects.get(pk=file_info)
        except UploadModel.DoesNotExist:
            return Response(data={'message': 'invalid response'})
        else:
            print('This is the file info', file_info)
            return Response(data=required_image)

    def post(self, request, format=None):
        img = request.FILES['filepond']
        print("File to be uploaded on post:", img)
        new_img = UploadModel.objects.create(image=img)
        new_img.save()
        return HttpResponse(new_img.pk)

    # def patch(self, request, pk, format=None):
    #     required_img = UploadModel.objects.get(pk=id)
    #     print("Image to be patched", required_img)
    #     return HttpResponse('Patching')

    def delete(self, request, pk, format=None):
        required_img = UploadModel.objects.get(pk=pk)

        # path_to_tmp = os.path.join(settings.BASE_DIR, 'media', required_img.image.path)
        containing_folder = os.path.join(settings.BASE_DIR, 'media', 'tmp', str(required_img.pk))

        if os.path.exists(required_img.image.path):
            os.remove(required_img.image.path) # deleting containing folder
            os.rmdir(containing_folder) # deleting actual file
            required_img.delete()

        # tmp_file = TemporaryUploadedFile(name=img.name, content_type='application/offset+octet-stream', size=img.size,
        #                                  charset=request.encoding)
        # tmp_file.close()
        return HttpResponse('Deleted')


class RegisterAPI(generics.ListCreateAPIView):  # to create a user account
    """ to create a user account """
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        # setup the form data manually
        form_data = {
            'username': request.data.get('username'),
            'password': request.data.get('password'),
            'email': request.data.get('email'),
            'first_name': request.data.get('first_name'),
            'last_name': request.data.get('last_name'),
            'profile': json.loads(request.data.get('profile'))
        }

        if request.data.get('actual-img') != 'null':
            form_data['profile']['image'] = request.data.get('actual-img')
        else:
            form_data['profile']['image'] = None

        serializer = UserSerializer(data=form_data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user_token = AuthToken.objects.create(user)
        token_config = {
            'auth_token': user_token[1],
            'expiry': user_token[0].expiry
        }
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token_config['auth_token']
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        user_token = AuthToken.objects.create(user)
        token_config = {
            'auth_token': user_token[1],
            'expiry': user_token[0].expiry
        }
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token_config['auth_token']
        })








