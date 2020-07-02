from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import *
# from .templates.image import *


# def handle_uploaded_file(f):
#     with open('some/file/name.txt', 'wb+') as destination:
#         for chunk in f.chunks():
#             destination.write(chunk)

def upload_file(request):
    if request.method == 'POST':
        
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # file is saved
            form.save()
            return make_response(200, "Success")
    else:
        form = ModelFormWithFileField()
        return make_response(404, "Failed.")
    return make_response(404, "Failed.")
    # return render(request, 'image/upload.html', {'form': form})