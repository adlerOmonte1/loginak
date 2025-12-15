from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Usuario(AbstractUser):
    #El AbstracUser ya tiene la logica "encriptar", "grupos", "permisos"
    #Se hace el cambio para que la validacion sea por email.
    email = models.EmailField(unique=True)
    #telefono = models.CharField(max_length=9)
    #dni = models.Charfield(max_length=8)
    USERNAME_FIELD = 'email' # por defecto esta el username, pero esto hace el cambio
    REQUIRED_FIELDS = ["username", "first_name","last_name"]
    def __str__(self):
        return self.email
    

