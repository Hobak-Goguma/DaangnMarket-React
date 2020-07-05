from django.db import models
from django.conf import settings
import os

class UploadFileModel(models.Model):
    def __str__(self):
        return self.title
    title = models.CharField(default='', max_length=50)
    file = models.FileField(null=True, upload_to="product")

    def delete(self, *args, **kargs):
        os.remove(os.path.join(settings.MEDIA_ROOT, self.file.path))
        super(UploadFileModel, self).delete(*args, **kargs)