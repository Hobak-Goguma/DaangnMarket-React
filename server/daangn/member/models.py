from django.db import models
from django.utils import timezone
now = timezone.now()

class Company(models.Model):
    id_company = models.AutoField(primary_key=True)
    id_member = models.ForeignKey('Member', models.DO_NOTHING, db_column='id_member')
    name = models.CharField(max_length=50)
    addr = models.TextField()
    tel = models.CharField(max_length=20, blank=True, null=True)
    info = models.CharField(max_length=3000, blank=True, null=True)
    category = models.CharField(max_length=15, blank=True, null=True)
    img = models.CharField(max_length=2000, blank=True, null=True)
    cdate = models.DateTimeField(auto_now_add=True)
    udate = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'company'


class Log(models.Model):
    id_log = models.AutoField(primary_key=True)
    id_member = models.ForeignKey('Member', models.DO_NOTHING, db_column='id_member')
    search = models.CharField(max_length=60)
    cdate = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'log'


class Manner(models.Model):
    id_manner = models.AutoField(primary_key=True)
    id_member = models.ForeignKey('Member', models.DO_NOTHING, db_column='id_member')
    score = models.IntegerField()
    cdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'manner'

class MannerReviewer(models.Model):
    id_manner = models.ForeignKey(Manner, models.DO_NOTHING, db_column='id_manner')
    reviewer = models.ForeignKey('Member', models.DO_NOTHING, db_column='reviewer')

    class Meta:
        managed = False
        db_table = 'manner_reviewer'


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
    addr = models.TextField()
    cdate = models.DateTimeField(auto_now_add=True)
    udate = models.DateTimeField(auto_now=False)
    last_date = models.DateTimeField(auto_now=False)
    img = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'member'


class MemberSeller(models.Model):
    id_member = models.ForeignKey(Member, models.DO_NOTHING, db_column='id_member')
    id_real_deal = models.ForeignKey('RealDeal', models.DO_NOTHING, db_column='id_real_deal')

    class Meta:
        managed = False
        db_table = 'member_seller'


class MemberShopper(models.Model):
    id_member = models.ForeignKey(Member, models.DO_NOTHING, db_column='id_member')
    id_real_deal = models.ForeignKey('RealDeal', models.DO_NOTHING, db_column='id_real_deal')

    class Meta:
        managed = False
        db_table = 'member_shopper'



class Product(models.Model):
    id_product = models.AutoField(primary_key=True)
    id_member = models.ForeignKey(Member, models.CASCADE, db_column='id_member')
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    info = models.CharField(max_length=3000)
    category = models.CharField(max_length=15, blank=True, null=True)
    img = models.CharField(max_length=2000, blank=True, null=True)
    views = models.IntegerField(default=0)
    cdate = models.DateTimeField(auto_now_add=True)
    udate = models.DateTimeField(auto_now=True)
    sold_tf = models.IntegerField(db_column='sold_TF')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'product'


class Rate(models.Model):
    id_rate = models.IntegerField(primary_key=True)
    field = models.CharField(max_length=8)
    detail = models.CharField(max_length=50)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'rate'


class RealDeal(models.Model):
    id_real_deal = models.AutoField(primary_key=True)
    id_product = models.ForeignKey(Product, models.DO_NOTHING, db_column='id_product')
    cdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'real_deal'


class SellerRate(models.Model):
    id_review_seller = models.ForeignKey('SellerReview', models.DO_NOTHING, db_column='id_review_seller')
    id_rate = models.ForeignKey(Rate, models.DO_NOTHING, db_column='id_rate')

    class Meta:
        managed = False
        db_table = 'seller_rate'


class SellerReview(models.Model):
    id_review_seller = models.AutoField(primary_key=True)
    id_real_deal = models.ForeignKey(RealDeal, models.DO_NOTHING, db_column='id_real_deal')
    title = models.CharField(max_length=50)
    cdate = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        managed = False
        db_table = 'seller_review'


class ShopperRate(models.Model):
    id_review_shopper = models.ForeignKey('ShopperReview', models.DO_NOTHING, db_column='id_review_shopper')
    id_rate = models.ForeignKey(Rate, models.DO_NOTHING, db_column='id_rate')

    class Meta:
        managed = False
        db_table = 'shopper_rate'


class ShopperReview(models.Model):
    id_review_shopper = models.AutoField(primary_key=True)
    id_real_deal = models.ForeignKey(RealDeal, models.DO_NOTHING, db_column='id_real_deal')
    title = models.CharField(max_length=50)
    cdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'shopper_review'


class Wishlist(models.Model):
    id_wishlist = models.AutoField(primary_key=True)
    id_product = models.ForeignKey(Product, models.DO_NOTHING, db_column='id_product')
    id_member = models.ForeignKey(Member, models.DO_NOTHING, db_column='id_member')
    cdate = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'wishlist'