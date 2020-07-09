from django.db import models
from member.models import Product
from django.conf import settings
import os
from sorl.thumbnail import ImageField
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill


class Product_image(models.Model):
    def __str__(self):
        return self.image.url
    id_product = models.ForeignKey(Product, models.CASCADE, db_column='id_product')
    id_product_img = models.AutoField(primary_key=True)
    title = models.CharField(default='', max_length=50)
    image = ProcessedImageField(
        null=True, 
        upload_to="product",
        format = 'JPEG'
        )
# TODO 확장자 화이트 리스트 함수 작성 

    # def image_tag(self):
    #     return u'<img src="%s" width="300"/>' % self.image.url #Not bad code
    # image_tag.allow_tags = True

    def delete(self, *args, **kargs):
        os.remove(os.path.join(settings.MEDIA_ROOT, self.file.path))
        super(Product_image, self).delete(*args, **kargs)