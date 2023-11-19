from django.urls import path
from .views import ProductoListCreateView, ProductoDetailView, ListarCategoria, ListarGenero

urlpatterns = [
    path('productos/', ProductoListCreateView.as_view(), name='producto-list-create'),
    path('productos/<int:pk>/', ProductoDetailView.as_view(), name='producto-detail'),
    path('categoria/',ListarCategoria.as_view(),name='categoria'),
    path('generos/',ListarGenero.as_view(),name='genero'),
]