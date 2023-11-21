from rest_framework import generics
from .models import Usuario, CatalogoSexo
from .serializers import UsuarioSerializer, UnUsuarioSerializer

from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.forms import EditProfileForm
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import TemplateView, View
from accounts.models import Profile
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
User = get_user_model()
class UserProfileView(View):
    def get(self, request, username,*args, **kwargs):
        user = get_object_or_404(User, username=username)
        profile = Profile.objects.get(user=user)

        context={
            'user':user,
            'profile':profile
        }
        return render(request, 'users/detail.html', context)


class ListarUsuarios(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

from rest_framework import generics

class VerUsuario(generics.RetrieveAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UnUsuarioSerializer



class CrearUsuario(APIView):
    def post(self, request, format=None):
        data = request.data
        User = get_user_model()

        # Extrae los campos de usuario de Django
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        # sexo_id = data.get('sexo')

        # try:
        #     catalogo_sexo = CatalogoSexo.objects.get(pk=sexo_id)
        # except CatalogoSexo.DoesNotExist:
        #     return Response({'message': 'El valor de sexo no es válido'}, status=status.HTTP_400_BAD_REQUEST)


        # Extrae los campos personalizados de tu modelo Usuario
        nombres = data.get('nombres')
        apellido_paterno = data.get('apellido_paterno')
        apellido_materno = data.get('apellido_materno')
        edad = data.get('edad')

        # Crea el usuario de Django
        user = User.objects.create_user(username=username, password=password, email=email)

        # Crea el usuario personalizado con los campos específicos
        usuario_personalizado = Usuario(nombres=nombres, apellido_paterno=apellido_paterno, apellido_materno=apellido_materno, edad=edad, usuario=user,email=email)
        usuario_personalizado.save()

        return Response({'message': 'Usuario creado correctamente'}, status=status.HTTP_201_CREATED)