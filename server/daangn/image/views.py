from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import *
# from .templates.image import *


def handle_uploaded_file(f):
    with open('some/file/name.txt', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

def upload_file(request):
    if request.method == 'POST':
        # print('----------------------------------------------------')
        # print(request.FILES)
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # handle_uploaded_file(request.FILES['file'])
            print('----------------------------------------------------')
            print(request.FILES['file'])
            return HttpResponseRedirect('/success/url/')
    else:
        form = UploadFileForm()
    return render(request, 'image/upload.html', {'form': form})