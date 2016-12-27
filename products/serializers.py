from rest_framework import serializers
from products.models import products,ProductComments,CartTable
from rest_framework.serializers import HyperlinkedModelSerializer



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model =  ProductComments
        fields = ( 'product_id','comment','created')


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = products
        fields = ('id','product_name', 'price', 'image','comments','product_rating','product_desc')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model =  products
        fields = ( 'id','product_rating')

    def update(self, validated_data):
        product = products.objects.filter(id=validated_data['id']).first()
        product.product_rating = validated_data['rating']
        product.save()
        return product
