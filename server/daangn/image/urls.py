from django.urls import path
from image import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('upload', views.upload_file, name='imagetest'),
]
