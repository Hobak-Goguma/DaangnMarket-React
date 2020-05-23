from django.forms import widgets
from rest_framework import serializers
from member.models import *
# from member.serializers import *

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        # fields = ('pk', 'name', 'nick_name', 'user_id', 'user_pw', 'tel', 'birth', 'email', 'gender')
        fields = ('pk', 'name', 'nick_name', 'user_id', 'user_pw', 'tel', 'birth', 'email', 'gender', 'addr')

class MemberReviseSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        # 추후 주소 수정 시 addr 넣어야 함. 현재는 udate 수정 확인을 위해 빼 놓았음
        fields = ('pk', 'nick_name', 'user_pw', 'tel', 'birth', 'email', 'udate')

class MemberTouchSerializer(serializers.ModelSerializer):
    udate = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        # fields = ('pk', 'nick_name', 'add')
        fields = ('pk', 'nick_name', 'addr', 'user_img', 'udate')
        
class ProductSerializer(serializers.ModelSerializer):
    # id_member_id = serializers.IntegerField(source='id_member')
    # member = serializers.ForeignKey(Member, models.CASCADE, related_name='member_id')
    class Meta:
        model = Product
        fields = ('pk', 'id_member', 'name', 'price', 'info', 'category', 'img')

class LoginSerializer(serializers.ModelSerializer):
    last_date = serializers.DateTimeField(default=timezone.now)
    class Meta:
        model = Member
        fields = ('user_id', 'user_pw', 'last_date')

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