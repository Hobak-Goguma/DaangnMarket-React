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
from drf_yasg.utils import swagger_auto_schema

now = timezone.now()

# 'method' can be used to customize a single HTTP method of a view
@swagger_auto_schema(method='get', responses={200:'OK'})
# 'methods' can be used to apply the same modification to multiple methods
@swagger_auto_schema(methods=['post'], request_body=MemberSerializer)
@api_view(['GET', 'POST'])
def member_list(request):
    """
    모든 유저 조회, 유저 등록
    ---
    모든 유저의 정보를 보여주거나 새 유저 정보를 등록합니다.
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
        serializer = MemberReviseSerializer(member, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def member_touch(request, pk):
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

    if request.method == 'PUT':
        serializer = MemberTouchSerializer(member, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    #     serializer = LoginSerializer(member, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #     return Response(serializer.data)

    if request.method == 'POST':
        serializer = LoginSerializer(member)
        return Response(serializer.data)

    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


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


@api_view(['GET', 'POST'])
def wishlist_list(request):
    """
    찜리스트를 모두 보여주거나 새 찜을 추가합니다.
    """
    if request.method == 'GET':
        wishlist = Wishlist.objects.all()
        serializer = WishlistSerializer(wishlist, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = WishlistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def wishlist_detail(request, pk):
    """
    특정 유저의 찜리스트를 조회, 삭제 합니다.
    """
    try:
        wishlist = Wishlist.objects.filter(id_member = pk)
    except Wishlist.DoesNotExist:
        content = {
            "message" : "찜한 상품이 없습니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WishlistSerializer(wishlist, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        wishlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def location_search(request):
    '''
    사용자의 위치에 따른 product 검색
    '''
    # GET방식으로 데이터 address, distance 그리고 검색어를 보냄.
    addr = request.GET['addr']
    dis = request.GET['dis']
    Search = request.GET['q']

    # request 한 정보들 토대로 nearby_locations 에서 거리에 따른 인접동을 가져오고,
    # 그 동들 위치에 해당하는 물품을을 화면에 뿌려준다. 단, 제목에 검색에가 포함되어야 함. 
    location = nearby_locations.objects.filter(dong = addr, distance = dis)
    product = Product.objects.filter(addr = nearby_locations.nearby_dong and addr = nearby_locations.dong, name__contains = Search )

    # 성공적으로 가져왔다면 뿌린다.
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def test(request):
    """
    테스트용 api
    """
    return Response(status=status.HTTP_200_OK)
