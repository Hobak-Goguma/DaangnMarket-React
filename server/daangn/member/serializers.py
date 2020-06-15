from django.forms import widgets
from rest_framework import serializers
from member.models import *
# from member.serializers import *

class MemberSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    last_date = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('pk', 'name', 'nick_name', 'user_id', 'user_pw', 'tel', 'birth', 'email', 'gender',  'img', 'udate' ,'last_date')


class MemberReviseSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('pk', 'user_pw', 'udate')


class MemberTouchSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    
    class Meta:
        model = Member
        fields = ('pk', 'nick_name', 'tel', 'birth', 'email', 'img', 'gender', 'udate')
        
class ProductSerializer(serializers.ModelSerializer):
    # id_member_id = serializers.IntegerField(source='id_member')
    # member = serializers.ForeignKey(Member, models.CASCADE, related_name='member_id')
    class Meta:
        model = Product
        fields = ('pk', 'id_member', 'name', 'price', 'info', 'category', 'img', 'views', 'sold_tf', 'addr')


class ProductTouchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'id_member', 'name', 'price', 'info', 'category', 'img', 'views', 'sold_tf', 'addr')
        read_only_fields = ['id_member', 'views', 'sold_tf']


class LoginSerializer(serializers.ModelSerializer):
    last_date = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('pk','user_id', 'user_pw', 'name', 'nick_name', 'tel', 'last_date', 'img')

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('pk', 'id_member', 'name', 'addr', 'tel', 'info', 'category', 'img')


class CompanyTouchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('pk', 'id_member', 'name', 'addr', 'tel', 'info', 'category', 'img')
        read_only_fields = ['id_member']


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = ('pk', 'id_product', 'id_member', 'cdate')

# realdeal api 
class MemberSellerSerializer(serializers.ModelSerializer):
    class Meta:
        id_member = MemberSerializer(read_only= True)
        model = MemberSeller
        fields = ('id_member', 'id_real_deal')


class MemberShopperSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberShopper
        fields = ('id_member', 'id_real_deal')

        
class RealDealSerializer(serializers.ModelSerializer):
    seller = serializers.IntegerField(read_only=True)
    shopper = serializers.IntegerField(read_only=True)
    class Meta:
        model = RealDeal
        fields = ('pk', 'id_product','seller', 'shopper', 'cdate')


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
        fields = ('pk', 'id_real_deal', 'title', 'cdate')


class ShopperReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopperReview
        fields = ('pk', 'id_real_deal', 'title', 'cdate')


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