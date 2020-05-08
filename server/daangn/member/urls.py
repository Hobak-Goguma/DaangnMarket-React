from django.urls import path
from member import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.member_list, name='member'),
    path('login/', views.member_login, name='login'),
    path('overlap/', views.member_overlap, name='overlap'),
    path('<pk>/', views.member_detail, name='member'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
