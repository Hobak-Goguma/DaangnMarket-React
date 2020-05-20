from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from member.models import *
from member.serializers import *
from django.http import HttpResponse
from django.utils import timezone
import json
from django.http import JsonResponse

now = timezone.now()

@api_view(['GET', 'POST'])
def member_list(request):
    """
    코드 조각을 모두 보여주거나 새 코드 조각을 만듭니다.
    """
    if request.method == 'GET':
        member = Member.objects.all()
        serializer = MemberSerializer(member, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def member_detail(request, pk):
    """
    코드 조각 조회, 업데이트, 삭제
    """
    try:
        member = Member.objects.get(pk=pk)
    except Member.DoesNotExist:
        content = {
            "message" : "없는 사용자 입니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MemberSerializer(member)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MemberSerializer(member, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def member_search(request):
    """
    특정유저를 아이디로 검색합니다.
    """
    try:
        User_id = request.GET['user_id']
        member = Member.objects.get(user_id = User_id)
    except Member.DoesNotExist:
        content = {
            "message" : "유저를 찾을 수 없습니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    serializer = MemberSerializer(member)
    return Response(serializer.data)



@api_view(['GET'])
def member_overlap(request):
    """
    아이디값이 중복되는지 확인해줍니다.
    """
    try:
        User_id = request.GET['user_id']
        member = Member.objects.get(user_id = User_id)
    except Member.DoesNotExist:
        content = {
            "message" : "중복아이디가 없습니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_200_OK)
        
    content = {
            "message" : "중복아이디가 있습니다.",
            "result" : {}
                }
    return Response(content, status=status.HTTP_409_CONFLICT)

@api_view(['GET'])
def nick_name_overlap(request):
    """
    닉네임 값이 중복되는지 확인해줍니다.
    """
    try:
        Nick_name = request.GET['nick_name']
        member = Member.objects.get(nick_name = Nick_name)
    except Member.DoesNotExist:
        content = {
            "message" : "중복닉네임이 없습니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_200_OK)
        
    content = {
            "message" : "중복닉네임이 있습니다.",
            "result" : {}
                }
    return Response(content, status=status.HTTP_409_CONFLICT)

@api_view(['POST'])
def member_login(request):
    """
    멤버 테이블 로그인
    """
    try:
        Data = json.loads(request.body)
        user_id = Data['user_id']
        user_pw = Data['user_pw']
        member = Member.objects.get(user_id = user_id, user_pw = user_pw)
    except Member.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # if request.method == 'POST':
    #     # serializer = LoginSerializer(member)
    #     return Response(status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = LoginSerializer(member)
        return Response(serializer.data)
    
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    # user_pw = Data['user_pw']
    # if Member.user_pw == user_pw:
    #     if request.method == 'POST':
    #         serializer = LoginSerializer(member)
    #         return Response(serializer.data)
    # else:
    #     return HttpResponse('비밀번호가 틀렸습니다.')


@api_view(['GET', 'POST'])
def product_list(request):
    """
    상품을 모두 보여주거나 새 상품리스트를 만듭니다.
    """
    if request.method == 'GET':
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, pk):
    """
    코드 조각 조회, 업데이트, 삭제
    """
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        content = {
            "message" : "없는 물품리스트 입니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)
    # except Product.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
def product_search(request):
    """
    제목에 검색어가 포함된 물건들 리스트
    """
    try:
        Search = request.GET['q']
        product = Product.objects.filter(name__contains = Search)
        # product = Product.objects.get(name = Search)
    except Product.DoesNotExist:
        #검색 결과 없음.
        return Response(status=status.HTTP_404_NOT_FOUND)
    #검색결과 있음.
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)
    # return HttpResponse(product)


@api_view(['GET'])
def product_category(request):
    """
    제목에 검색어가 포함된 물건들 리스트
    """
    Search = request.GET['q']
    product = Product.objects.filter(category = Search)
    
    if not product:
        #검색 결과 없음.
        content = {
            "message" : "잘못된 카테고리 입니다.",
            "result" : {"입력한 검색어" : Search}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)
    else:
        #검색결과 있음.
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def company_list(request):
    """
    업체리스트를 모두 보여주거나 새 업체리스트를 만듭니다.
    """
    if request.method == 'GET':
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    """
    특정 업체리스트를 조회, 수정, 삭제 합니다.
    """
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        content = {
            "message" : "없는 업체 입니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET'])
def test(request):
    """
    테스트용 api
    """
    return Response(status=status.HTTP_200_OK)
