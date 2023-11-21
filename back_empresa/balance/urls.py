from django.urls import path
from .views import BalanceListCreateView

urlpatterns = [
    path('balance/', BalanceListCreateView.as_view(), name='balance-list-create'),
    
]