from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import ProductViewSet

router = SimpleRouter()

router.register('api/products', ProductViewSet)

urlpatterns = [
] 


urlpatterns += router.urls
