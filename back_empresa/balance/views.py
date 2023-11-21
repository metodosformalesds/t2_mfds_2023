from django.shortcuts import render
from rest_framework import generics
from .models import Balance
from .serializers import BalanceSerializer

# Create your views here.
class BalanceListCreateView(generics.ListCreateAPIView):
    queryset = Balance.objects.all()
    serializer_class = BalanceSerializer