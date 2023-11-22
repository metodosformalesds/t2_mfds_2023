from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import producto, Carrito


@login_required
def carrito(request):
    carrito = Carrito.objects.get(user=request.user)
    products = carrito.products.all()
    return render(request, 'cart/cart.component.html', {'producto': producto})


@login_required
def add_to_carrito(request, product_id):
    product = producto.objects.get(id=product_id)
    carrito = Carrito.objects.get(user=request.user)
    carrito.productos.add(producto)
    return render(request, 'cart/added_to_cart.html', {'producto': producto})


@login_required
def remove_from_carrito(request, producto_id):
    product = producto.objects.get(id=producto_id)
    carrito = Carrito.objects.get(user=request.user)
    carrito.products.remove(product)
    return render(request, 'cart/removed_from_cart.html', {'producto': producto})