from django.urls import path
from member import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('member', views.member_list, name='member_list'),
    path('member/login', views.member_login, name='login'),
    path('member/<pk>', views.member_detail, name='member_detail'),
    path('member/overlap', views.member_overlap, name='member_overlap'),
    path('member/overlap/nick-name', views.nick_name_overlap, name='nick_name_overlap'),
    path('product', views.product_list, name='prduct_list'),
    path('product/<pk>', views.product_detail, name='prduct_detail'),
    path('product/search', views.product_search, name='prduct_search'),
    path('test', views.test, name='test'),
]

urlpatterns = format_suffix_patterns(urlpatterns)