from django.db import models
from .models import producto, usuario

class Carrito(models.Model):
    user = models.OneToOneField( usuario , on_delete=models.CASCADE)
    products = models.ManyToManyField('Producto', blank=True)

    def __str__(self):
        return self.user.username
