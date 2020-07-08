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
from PIL import Image
import os, sys
from django.forms import modelformset_factory

@api_view(('POST', 'DELETE'))
def upload_file(request):
    """
    Product 사진 업로드 API

    ---
    # 내용
        - title : 저장 할 파일이름
        - id_product : Product 외래키
        - image : 업로드 할 이미지
    """
    # 이미지 업로드 제한갯수 최대 10개 (try)
    # ImageFormSet = modelformset_factory(UploadFileModel, form=UploadFileForm, extra=10)

    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # file is saved
            fileURL = form.save()

            return Response(request, status=status.HTTP_200_OK)
   
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


'''
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
'''

@api_view(('GET',))
def productThumbnail(request, id_product):
    """
    물품 상세페이지의 썸네일을 리스트로 주는 API

    ---
    # 내용
        - s : 사진픽셀 크기 ex)500x500
        - q : 사진품질 0~100 ex)82 당근마켓 기본값 
    """
    if request.method == 'GET':
        s = request.GET['s']
        q = int(request.GET['q'])
        Data = UploadFileModel.objects.filter(id_product=id_product)
        imageList=[]
        for i in range(Data.count()):
            imageList.append(request.META['HTTP_HOST'] + '/image' + get_thumbnail(Data[i].image, s, crop='center', quality=q).url)
        return Response(imageList, status=status.HTTP_200_OK)




# @api_view(('GET',))
# def productThumbnail(request, id_product):
#     if request.method == 'GET':
#         print("----------------1-------------------")
#         Data = UploadFileModel.objects.get(id_product=id_product)
#         print("----------------2-------------------")
#         # print(Data[0].image)
#         print("----------------2-1-----------------")
#         s = request.GET['s']
#         print("----------------3-------------------")
#         # print(get_thumbnail(Data[0].image, s, crop='center', quality=82))
#         return redirect('/image' + get_thumbnail(Data.image, s, crop='center', quality=82).url)



'''
# template 활용
@api_view(('GET',))
def productThumbnail(request, title):
    if request.method == 'GET':
        Data = UploadFileModel.objects.get(title=title)
        s = request.GET['s']
        return render(request, 'image/product.html', {"Data":Data} )
'''

