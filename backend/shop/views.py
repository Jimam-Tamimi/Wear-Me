from django.http import HttpResponse
from django.shortcuts import redirect, render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from .sslcommerz import get_session
from .models import Color, Order, OrderItem, Product, Size
from .serializers import OrderSerializer, ProductSerializer


# Create your views here.
class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'slug'

    
class OrderViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    
    
    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
        products = []
        totalPrice = 0
        for cartItem in data['products']:
            try:
                product = Product.objects.get(id=cartItem['id'])
                size = Size.objects.get(id=cartItem['size']['id'])
                color = Color.objects.get(id=cartItem['color']['id'])
                orderItem = OrderItem.objects.create(product=product, size=size, color=color, itemCount=cartItem['itemCount'])
                products.append(orderItem)
                totalPrice += product.price * cartItem['itemCount']
            except Exception:
                continue
        order = Order.objects.create(
            fName=data['firstName'],
            lName=data['lastName'],
            email=data['email'],
            number=data['mobileNumber'],
            addNumber=data['additionalMobileNumber'],
            address=data['address'],
            totalPrice=(totalPrice+60),
            )
        order.products.set(products)
        order.save()

        
        # sslcommerz payment
        payment_gateway = get_session(order, order.totalPrice)
        print(payment_gateway)
        return Response({'success': payment_gateway})
    
    


from django.views.decorators.csrf import csrf_exempt

# sslcommerz payment response views


@csrf_exempt    
def sslcommerzPaymentSuccess(request):
    data = request.POST
    print(data)
    if data['status'] =='VALID':
        try:
            order = Order.objects.get(id=data['value_a']) # order id is passed in value_a
        except Exception as e:
            print(e )        
        return redirect(f'/order-confirmed/{order.id}/')
    else:
        return redirect('/order-failed/')

        
    


@csrf_exempt
def sslcommerzPaymentFail(request):
    print(request.POST)
    data = request.POST
    try:
        order = Order.objects.get(id=data['value_a']) # order id is passed in value_a
        return redirect(f'/order-failed/{order.id}/')
    except Exception as e:
        return redirect('/order-failed/')
    

@csrf_exempt    
def sslcommerzPaymentCancel(request):
    print(request.POST)
    data = request.POST
    return redirect('/checkout/')

        
        


@csrf_exempt    
def sslcommerzPaymentIpn(request):
    print(request.POST)
    return HttpResponse('ipn')