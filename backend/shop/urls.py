from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import OrderViewSet, ProductViewSet, sslcommerzPaymentCancel, sslcommerzPaymentFail, sslcommerzPaymentIpn, sslcommerzPaymentSuccess

router = SimpleRouter()

router.register('api/products', ProductViewSet)
router.register('api/order', OrderViewSet)

urlpatterns = [
    path('sslcommerz/success/', sslcommerzPaymentSuccess),
    path('sslcommerz/fail/', sslcommerzPaymentFail),
    path('sslcommerz/cancel/', sslcommerzPaymentCancel),
    path('sslcommerz/ipn/', sslcommerzPaymentIpn),
] 


urlpatterns += router.urls
