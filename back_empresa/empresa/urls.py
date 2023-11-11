from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings

from django.contrib.staticfiles.views import serve as serve_static
from django.views.static import serve

def _static_butler(request, path, **kwargs):
    return serve_static(request, path, insecure=True, **kwargs)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuario/', include('usuarios.urls')),
]
