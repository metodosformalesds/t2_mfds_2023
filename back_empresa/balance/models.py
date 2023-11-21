from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Balance(models.Model):
    titular = models.OneToOneField(User, on_delete=models.CASCADE)
    saldo = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        balance="{} {}".format(self.titular, self.saldo)
        return balance
    
    class Meta:
        verbose_name = 'Balance'
        verbose_name_plural = 'Balances'
        db_table = 'balance'
        ordering = ['pk']
