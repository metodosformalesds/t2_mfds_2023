from django.shortcuts import render, redirect
from .models import producto, carrito, Order
from django.contrib.auth.decorators import login_required

@login_required
def add_to_carrito(request, producto):
    carrito = carrito.objects.get(user=request.user)
    product = producto.objects.get(id=producto)
    if product in carrito.products.all():
        carrito.products.remove(product)
    else:
        carrito.products.add(product)
    return redirect('store')

@login_required
def remove_from_carrito(request, producto):
    carrito = carrito.objects.get(user=request.user)
    producto = producto.objects.get(id=producto)
    if producto in carrito.products.all():
        carrito.products.remove(producto)
    return redirect('store')