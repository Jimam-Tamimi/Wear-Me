
import uuid
from core.settings import store_id, store_passwd, SSLCZ_SESSION_API
import requests

response_url = "http://127.0.0.1:8000/shop/sslcommerz/"


def get_session(order, totalPrice):
    post_data={
    "store_id": store_id,
    "store_passwd": store_passwd,
    "total_amount": totalPrice,
    "currency": "BDT",
    "tran_id":uuid.uuid4(),
    "success_url": f"{response_url}success/",
    "fail_url": f"{response_url}fail/",
    "cancel_url": f"{response_url}cancel/",
    "ipn_url": f"{response_url}ipn/",
    "cus_name": f"{order.fName} {order.lName}",
    "cus_email": order.email,
    "cus_add1": order.address,
    "cus_add2": "Dhaka",
    "cus_city": "Dhaka",
    "cus_state": "Dhaka",
    "cus_postcode": "1000",
    "cus_country": "Bangladesh",
    "cus_phone": order.number,
    "cus_fax": "01711111111",
    "ship_name":  f"{order.fName} {order.lName}",
    "ship_add1": "Dhaka",
    "ship_add2": "Dhaka",
    "ship_city": "Dhaka",
    "ship_state": "Dhaka",
    "ship_postcode": "1000",
    "ship_country": "Bangladesh",
    "multi_card_name": "mastercard,visacard,amexcard",
    "value_a": order.id,
    # "value_b": "ref002_B",
    # "value_c": "ref003_C",
    # "value_d": "ref004_D",
    "shipping_method": "YES",
    "product_name": "T shirts from wear me ",
    "product_category": "general",
    "product_profile": "general"
    }

    response = requests.post(SSLCZ_SESSION_API, post_data)
    return response.json()['GatewayPageURL']
    # return(response.json()["sessionkey"],response.json()["GatewayPageURL"])
