
from django.contrib import admin
from django.urls import path
from login.views import RegisterView

from  rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    #EDPOINTS

    path('api/auth/register',RegisterView.as_view(), name='auth_register'),
    path('api/auth/login/',TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh',TokenRefreshView.as_view(), name='token_refresh'),
]
