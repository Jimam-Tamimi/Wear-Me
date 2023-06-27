from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import OrderViewSet, ProductViewSet

router = SimpleRouter()

router.register('api/products', ProductViewSet)
router.register('api/order', OrderViewSet)

urlpatterns = [
] 


urlpatterns += router.urls
