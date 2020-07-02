from django.db import models
from django.conf import settings
# Create your models here.

class UploadFileModel(models.Model):
    title = models.CharField(default='')
    file = models.FileField(null=True)