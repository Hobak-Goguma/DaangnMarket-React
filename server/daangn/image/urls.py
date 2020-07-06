from django.urls import path
from image import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('product/<title>', views.productThumbnail, name='productThumbnail'),
    path('upload', views.upload_file, name='imagetest'),
    path('product/<int:id_product>', views.productThumbnail, name='productThumbnail'),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)