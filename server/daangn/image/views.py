from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
import json
from django.http import JsonResponse
from sorl.thumbnail import get_thumbnail
from sorl.thumbnail import delete

@api_view(('POST', 'DELETE'))
def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # file is saved
            form.save()
            return Response(status=status.HTTP_200_OK)
    # else:
    #     form = ModelFormWithFileField()
    #     return Response(status=status.HTTP_404_NOT_FOUND)
    # return Response(status=status.HTTP_404_NOT_FOUND)

    # return render(request, 'image/upload.html', {'form': form})

    
    elif request.method == 'DELETE':
        data = request.body.decode('utf-8')
        received_json_data = json.loads(data)
        Title = received_json_data['title']
        q = UploadFileModel.objects.get(title = Title)
        q.delete()
        content = {
            "message" : "삭제 완료",
            "result" : {"title" : Title}
                }
        return Response(content ,status=status.HTTP_204_NO_CONTENT)


@api_view(('GET',))
def productThumbnail(request, title):
    if request.method == 'GET':
        Data = UploadFileModel.objects.get(title=title)
        s = request.GET['s']
        return redirect('/image' + get_thumbnail(Data.image, s, crop='center', quality=82).url)



'''
# template 활용
@api_view(('GET',))
def productThumbnail(request, title):
    if request.method == 'GET':
        Data = UploadFileModel.objects.get(title=title)
        s = request.GET['s']
        return render(request, 'image/product.html', {"Data":Data} )
'''

