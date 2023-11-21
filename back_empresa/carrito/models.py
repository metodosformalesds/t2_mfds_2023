from django.db import models
from .models import producto

class carrito(models.Model):
    usuario = models.OneToOneField('auth.Usuario', on_delete=models.CASCADE) 
    producto = models.ManyToManyField(producto, blanck=True)

class orden(models.Model):
    usuario = models.ForeignKey('auth.Usuario', on_delete=models.SET_NULL, null=True, blanck=True)
    datos_orden = models.DateTimeField(auto_now_add=true)
    complete = models.BooleanField(default=False)
    transaccion_id = models.CharField(max_length=200, null=True)
