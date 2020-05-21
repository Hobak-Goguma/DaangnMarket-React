from django.db import models
from django.utils import timezone
now = timezone.now()

class Company(models.Model):
    id_company = models.AutoField(primary_key=True)
    id_member = models.ForeignKey('Member', models.DO_NOTHING, db_column='id_member')
    name = models.CharField(max_length=50)
    add = models.CharField(max_length=200)
    tel = models.CharField(max_length=20, blank=True, null=True)
    info = models.CharField(max_length=3000, blank=True, null=True)
    category = models.CharField(max_length=15, blank=True, null=True)
    img = models.CharField(max_length=500, blank=True, null=True)
    cdate = models.DateTimeField(auto_now_add=True)
    udate = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'company'


class Log(models.Model):
    id_log = models.AutoField(primary_key=True)
    id_member = models.ForeignKey('Member', models.DO_NOTHING, db_column='id_member')
    search = models.CharField(max_length=60)

    class Meta:
        managed = False
        db_table = 'log'


class Manner(models.Model):
    id_manner = models.AutoField(primary_key=True)
    id_member = models.ForeignKey('Member', models.DO_NOTHING, db_column='id_member')
    score = models.IntegerField()
    reviewer = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'manner'


class Member(models.Model):
    
    id_member = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    nick_name = models.CharField(max_length=30)
    user_id = models.CharField(max_length=30)
    user_pw = models.CharField(max_length=55)
    tel = models.CharField(max_length=20)
    birth = models.DateField()
    email = models.CharField(max_length=30)
    gender = models.CharField(max_length=6)
    addr = models.CharField(max_length=200)
    cdate = models.DateTimeField(auto_now_add=True)
    udate = models.DateTimeField(auto_now=False)
    last_date = models.DateTimeField(auto_now=False)

    # def login(i):
    #     LOGIN_YN = i
    #     print(LOGIN_YN)
    #     print(Member.last_date)
    class Meta:
        managed = False
        db_table = 'member'


class Product(models.Model):
    id_product = models.AutoField(primary_key=True)
    id_member = models.ForeignKey(Member, models.CASCADE, db_column='id_member')
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    info = models.CharField(max_length=3000)
    category = models.CharField(max_length=15, blank=True, null=True)
    img = models.CharField(max_length=500, blank=True, null=True)
    cdate = models.DateTimeField(auto_now_add=True)
    udate = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'product'


class RealDeal(models.Model):
    id_real_deal = models.AutoField(primary_key=True)
    id_product = models.ForeignKey(Product, models.DO_NOTHING, db_column='id_product')
    id_seller = models.ForeignKey(Member, models.DO_NOTHING, db_column='id_seller')
    id_shopper = models.IntegerField()
    cdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'real_deal'


class SellerReview(models.Model):
    id_review = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    cdate = models.DateTimeField(auto_now_add=True)
    id_real_deal = models.ForeignKey(RealDeal, models.DO_NOTHING, db_column='id_real_deal')

    class Meta:
        managed = False
        db_table = 'seller_review'


class ShopperReview(models.Model):
    id_review = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    cdate = models.DateTimeField(auto_now_add=True)
    id_real_deal = models.ForeignKey(RealDeal, models.DO_NOTHING, db_column='id_real_deal')

    class Meta:
        managed = False
        db_table = 'shopper_review'


class Wishlist(models.Model):
    id_wishlist = models.AutoField(primary_key=True)
    id_product = models.ForeignKey(Product, models.DO_NOTHING, db_column='id_product')
    id_member = models.ForeignKey(Member, models.DO_NOTHING, db_column='id_member')

    class Meta:
        managed = False
        db_table = 'wishlist'