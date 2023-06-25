from django.urls import path, include
from rest_framework.routers import SimpleRouter
from account.views import UserViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
router = SimpleRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    # jwt
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        
]



urlpatterns += router.urls
