from django.urls import path
from member import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.member_list, name='member_list'),
    path('login/', views.member_login, name='login'),
    path('product/search/', views.product_search, name='prduct_search'),
    path('product/', views.product_list, name='prduct_list'),
    path('product/<pk>', views.product_detail, name='prduct_detail'),
    path('overlap/', views.member_overlap, name='overlap'),
    path('<pk>/', views.member_detail, name='member_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
