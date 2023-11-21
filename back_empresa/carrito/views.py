from django.urls import path
from . import views

urlpatterns = [
    path('add_to_carrito/<int:producto>/', views.add_to_carrito, name='add_to_carrito'),
    path('remove_from_carrito/<int:producto>/', views.remove_from_carrito, name='remove_from_carrito'),
]
