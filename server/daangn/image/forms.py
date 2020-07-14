from django import forms
from .models import ProductImage

class ProductUploadFileForm(forms.ModelForm):
    class Meta:
        model = ProductImage
        fields = ('title', 'image', 'id_product')

    def __init__(self, *args, **kwargs):
        super(ProductUploadFileForm, self).__init__(*args, **kwargs)
        self.fields['image'].required = False