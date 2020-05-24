from django.forms import widgets
from rest_framework import serializers
from member.models import *

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('pk', 'name', 'nick_name', 'user_id', 'user_pw', 'tel', 'birth', 'email', 'gender', 'add')
        #fields = ('pk', 'name', 'nick_name', 'user_id', 'user_pw', 'tel', 'birth', 'email', 'gender', 'addr')

class MemberReviseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('pk', 'nick_name', 'user_pw', 'tel', 'birth', 'email', 'add')
        #fields = ('pk', 'nick_name', 'user_pw', 'tel', 'birth', 'email', 'addr')

class MemberTouchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('pk', 'nick_name', 'add')
        #fields = ('pk', 'nick_name', 'addr', 'user_img')
        
class ProductSerializer(serializers.ModelSerializer):
    # id_member_id = serializers.IntegerField(source='id_member')
    # member = serializers.ForeignKey(Member, models.CASCADE, related_name='member_id')
    class Meta:
        model = Product
        fields = ('pk', 'id_member', 'name', 'price', 'info', 'category', 'img')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('pk', 'user_id', 'name','nick_name', 'tel', 'add')
        #fields = ('pk', 'user_id', 'name','nick_name', 'tel', 'addr')

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('pk', 'id_member', 'name', 'add', 'tel', 'info', 'category', 'img')
        #fields = ('pk', 'id_member', 'name', 'addr', 'tel', 'info', 'category', 'img')


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