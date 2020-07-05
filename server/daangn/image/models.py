from django.db import models
from member.models import Product
from django.conf import settings
import os
from sorl.thumbnail import ImageField

class UploadFileModel(models.Model):
    def __str__(self):
        return self.title
    id_productImg = models.AutoField(primary_key=True)
    id_product = models.ForeignKey(Product, on_delete = models.CASCADE, db_column='id_product')
    title = models.CharField(default='', max_length=50)
    image = models.ImageField(null=True, upload_to="product")


    def delete(self, *args, **kargs):
        os.remove(os.path.join(settings.MEDIA_ROOT, self.file.path))
        super(UploadFileModel, self).delete(*args, **kargs)