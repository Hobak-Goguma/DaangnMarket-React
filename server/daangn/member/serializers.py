from django.forms import widgets
from rest_framework import serializers
from member.models import *
from image.models import ProductImage
from django.http import HttpResponse
from sorl.thumbnail import get_thumbnail
from django.conf import settings

import os

# from member.serializers import *

class MemberSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    last_date = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('id_member', 'name', 'nick_name', 'user_id', 'user_pw', 'tel', 'birth', 'email', 'gender', 'img', 'cdate', 'udate', 'last_date')


class MemberReviseSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('id_member', 'user_pw', 'udate')


class MemberTouchSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('id_member', 'nick_name', 'tel', 'birth', 'email', 'img', 'gender', 'udate')

        
class ProductSerializer(serializers.ModelSerializer):
    # id_member_id = serializers.IntegerField(source='id_member')
    # member = serializers.ForeignKey(Member, models.CASCADE, related_name='member_id')
    class Meta:
        model = Product
        fields = ('id_product', 'id_member', 'name', 'price', 'info', 'category', 'views', 'state', 'addr')

        
class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = ('image',)



class ProductSearchSerializer(serializers.ModelSerializer):
    # thum = serializers.SerializerMethodField()
    thum_first = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ('id_product', 'id_member', 'name', 'price', 'info', 'category', 'views', 'state', 'addr', 'thum_first')
    
    # def get_thum_first(self, obj):
    #     k = ProductImage.objects.filter(id_product = obj.id_product).first()
    #     k2 = ProductImageSerializer(k).data
    #     if k2['image']:
    #         k2 = 'http://127.0.0.1:8000' + '/image' + str(k2['image'])
    #     return k2

    
    def get_thum_first(self, obj):
        Data = ProductImageSerializer(obj.thum.first()).data
        if Data['image']:
            # print('------------------BASE_DIR', settings.MEDIA_URL)
            # print('-----------object', obj.thum.first())
            # print()
            # _PATH = os.path.join(settings.BASE_DIR, str(obj.thum.first()))
            # print(obj.thum)
            # print(_PATH)
            # print(settings.BASE_DIR + str(obj.thum.first()))
            Data['image'] =   '/image' + get_thumbnail(obj.thum.first().image, '1500x1500', crop='center', quality=82).url
        # request.META['HTTP_HOST']+
        # self.context['request'].META.get('HTTP_HOST')
        return Data

    # def get_thum(self, obj):
    #     return  ProductImageSerializer(obj.thum.first()).data


class ProductTouchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id_product', 'id_member', 'name', 'price', 'info', 'category', 'views', 'state', 'addr')
        read_only_fields = ['id_product','id_member', 'views', 'state']

class LoginSerializer(serializers.ModelSerializer):
    last_date = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('id_member','user_id', 'user_pw', 'name', 'nick_name', 'tel', 'last_date', 'img')


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id_company', 'id_member', 'name', 'addr', 'tel', 'info', 'category', 'img')


class CompanyTouchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id_company', 'id_member', 'name', 'addr', 'tel', 'info', 'category', 'img')
        read_only_fields = ['id_member']


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ('id_wishlist', 'id_product', 'id_member', 'cdate')

# # realdeal api 
# class MemberSellerSerializer(serializers.ModelSerializer):
#     class Meta:
#         id_member = MemberSerializer(read_only= True)
#         model = MemberSeller
#         fields = ('id_member', 'id_real_deal')


# class MemberShopperSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MemberShopper
#         fields = ('id_member', 'id_real_deal')

        
class RealDealSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealDeal
        fields = ('id_real_deal', 'id_member','id_review_seller')


class SellerRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerRate
        fields = ('id_review_seller', 'id_rate')


class ShopperRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopperRate
        fields = ('id_review_shopper', 'id_rate')


class SellerReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerReview
        fields = ('id_review_seller', 'id_seller', 'content', 'cdate')


class ShopperReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopperReview
        fields = ('id_review_shopper', 'id_real_deal', 'content', 'cdate')


class memberAddrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Memberaddr
        fields = ('id_member', 'addr', 'distance', 'select')
        # read_only_fields = ['user_id']



# class MemberSerializer(serializers.Serializer):
#     id_member = serializers.AutoField(primary_key=True)
#     name = serializers.CharField(max_length=30)
#     nick_name = serializers.CharField(max_length=30)
#     user_id = serializers.CharField(max_length=30)
#     user_pw = serializers.CharField(max_length=55)
#     tel = serializers.CharField(max_length=20)
#     birth = serializers.DateField()
#     email = serializers.CharField(max_length=30)
#     gender = serializers.CharField(max_length=6)
#     add = serializers.CharField(max_length=200)
#     cdate = serializers.DateTimeField()
#     udate = serializers.DateTimeField()
#     last_date = serializers.DateTimeField()

#     def create(self, validated_data):
#         """
#         검증한 데이터로 새 `Member` 인스턴스를 생성하여 리턴합니다.
#         """
#         return Member.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         """
#         검증한 데이터로 기존 `Member` 인스턴스를 업데이트한 후 리턴합니다.
#         """
#         instance.title = validated_data.get('title', instance.title)
#         instance.code = validated_data.get('code', instance.code)
#         instance.linenos = validated_data.get('linenos', instance.linenos)
#         instance.language = validated_data.get('language', instance.language)
#         instance.style = validated_data.get('style', instance.style)
#         instance.save()
#         return instance