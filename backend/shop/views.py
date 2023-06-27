import uuid
from django.http import HttpResponse
from django.shortcuts import redirect, render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt


from .sslcommerz import get_session
from .models import Color, Order, OrderItem,  Product, Size
from .serializers import OrderSerializer, ProductSerializer


# Create your views here.
class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'slug'

    
class OrderViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    lookup_field = 'trackingId'

    def retrieve(self, request, *args, **kwargs):
        order = self.get_object()
        products = []
        
        for orderItem in order.products.all():
            # try:
            # orderItem = OrderItem.objects.get(id=orderItemId.id)
            color = orderItem.color
            size = orderItem.size
            imageSrc = ''
            for image in orderItem.product.images.all():
                if image.color == color.color:

                    imageSrc =request.build_absolute_uri(image.image.url)
                    break
            products.append({
                "id":orderItem.id,
                "color": {"color": color.color, "color_code": color.color_code},
                "size": size.size,
                "imageSrc": imageSrc,
                "product": {
                    'id': orderItem.product.id,
                    'name': orderItem.product.name,
                    'slug': orderItem.product.slug,
                    'price': orderItem.product.price,
                } ,
                "itemCount": orderItem.itemCount
            })
            # except Exception as e:
            #     print(e)
            #     continue
        response = {
            "id": order.id,
            "trackingId": order.trackingId,
            "products": products,
            'fName':order.fName,
            'lName':order.lName,
            'email':order.email,
            'number':order.number,
            'addNumber':order.addNumber,
            'address':order.address,
            'totalPrice':order.totalPrice,
            'payment':order.payment,
            'order_status':order.order_status,
        }
        
        
        return Response(response, status=status.HTTP_200_OK)
        

    
    
    
    
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
        return Response({'gatewayPageURL': payment_gateway}, status=status.HTTP_200_OK)
    
    

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
        order.payment = True
        randStr = str(uuid.uuid4())[0:10]
        trackingId = f"{order.fName}-{order.lName}-{randStr}-{order.id}"
        print(trackingId)
        order.trackingId = trackingId
        order.save()
        return redirect(f'/order-confirmed/{trackingId}/')
    else:
        return redirect('/order-failed/')

        
    


@csrf_exempt
def sslcommerzPaymentFail(request):
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