# Generated by Django 4.2.6 on 2023-11-11 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0006_remove_catalogosexo_usuario_usuario_usuario'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='email',
            field=models.EmailField(max_length=255, null=True, unique=True),
        ),
    ]