from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import *
from rest_framework.response import Response
from rest_framework import status
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
            return Response(status=status.HTTP_200_OK)
    else:
        form = ModelFormWithFileField()
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(status=status.HTTP_404_NOT_FOUND)
    # return render(request, 'image/upload.html', {'form': form})