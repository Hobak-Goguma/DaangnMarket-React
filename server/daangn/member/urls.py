from django.urls import path
from member import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('member', views.member_list, name='member_list'),
    path('member/login', views.member_login, name='login'),
    path('member/overlap', views.member_overlap, name='member_overlap'),
    path('member/overlap/nick-name', views.nick_name_overlap, name='nick_name_overlap'),
    path('member/search', views.member_search, name='member_search'),
    path('member/<pk>', views.member_detail, name='member_detail'),
    path('member/touch/<pk>', views.member_touch, name='member_touch'),
    path('product/search', views.product_search, name='prduct_search'),
    path('product/search/category', views.product_category, name='product_category'),
    path('product', views.product_list, name='prduct_list'),
    path('product/<pk>', views.product_detail, name='prduct_detail'),
    path('test', views.test, name='test'),
    path('company', views.company_list, name='company_list'),
    path('company/<pk>', views.company_detail, name='company_detail'),
    path('wishlist', views.wishlist_list, name='wishlist_list'),
    path('wishlist/<pk>', views.wishlist_detail, name='wishlist_detail'),
    path('product/selling/<id_member>', views.selling_product_list, name='selling_product_list'),
    path('realdeal', views.realdeal_list, name='realdeal_list'),
    path('realdeal/<pk>', views.realdeal_detail, name='realdeal_detail'),
    path('sellerreview', views.seller_review, name='seller_review_list'),
    path('shopperreview', views.shopper_review, name='shopper_review_list'),
]

urlpatterns = format_suffix_patterns(urlpatterns)