from django.shortcuts import render,render_to_response,redirect
from django.utils.six import BytesIO
from django.http import JsonResponse
from rest_framework.reverse import reverse
from rest_framework import viewsets
from .forms import *
from .models import *
from .serializers import ProductSerializer,CommentSerializer,RatingSerializer


# Create your views here.

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = products.objects.all()
    serializer_class = ProductSerializer

def getProductDetails(pid):
    product =products.objects.filter(id=pid).first()
    product_serializer = ProductSerializer(product)
    comments =ProductComments.objects.filter(product_id_id=pid).all()
    comment_serializer = CommentSerializer(comments, many=True)
    ProductDetails= {'item': product_serializer.data,'comments':comment_serializer.data}
    return ProductDetails

def addComment(request,pid):
    if request.method == 'POST':
        data=request.POST
        serializer = CommentSerializer(data = {'comment':data['comment'], 'product_id':pid})
        if serializer.is_valid():
            serializer.save()
        else:
            return JsonResponse({'error': serializer.errors})
    data = getProductDetails(pid)
    return JsonResponse({'data': data})

def updateProductRating(request,pid):
    if request.method == 'POST':
        data = request.POST
        serializer = RatingSerializer(data={'id':pid, 'product_rating':data['rating']})
        if serializer.is_valid():
            serializer.update(validated_data = {
                'id':pid,
                'rating':data['rating']
            })
        else:
            return JsonResponse({"error":serializer.errors})
    return redirect("/products/view/"+pid+"/")
    # return JsonResponse({'data': serializer.data})


