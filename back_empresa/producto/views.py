from django.shortcuts import render
from rest_framework import generics
from .models import Producto, Categoria, Genero
from .serializers import ProductoSerializer, CategoriaSerializer, GeneroSerializer

class ProductoListCreateView(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ListarCategoria(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ListarGenero(generics.ListAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer