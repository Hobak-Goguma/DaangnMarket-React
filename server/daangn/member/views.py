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
def member_detail(request, id_member):
    """
    코드 조각 조회, 업데이트, 삭제
    """
    try:
        member = Member.objects.get(pk=id_member)
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
        content = {
            "message" : "pk :" + id_member + " 삭제 완료",
            "result" : {}
                }
        return Response(content ,status=status.HTTP_204_NO_CONTENT)



@api_view(['POST'])
def member_addr_create(request):
    """
    멤버 주소 생성
    """
    #  Data = json.loads(request.body)
    #     user_id = Data['user_id']
    #     user_pw = Data['user_pw']
    #     member = Member.objects.get(user_id = user_id, user_pw = user_pw)

    if request.method == 'POST':
        data = request.body.decode('utf-8')
        received_json_data = json.loads(data)
        id_member = received_json_data['id_member']
        addr = received_json_data['addr']
        Person = Memberaddr.objects.filter(id_member = id_member)
        if Person.count() < 2 :
            try:
                overlap = Person.get(addr = addr)
                content = {
                "message" : "중복된 주소가 있습니다.",
                "result" : {"id_member = " + str(id_member) : addr}
                }
            except Memberaddr.DoesNotExist:
                serializer = memberAddrSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(content, status=status.HTTP_409_CONFLICT)
                    # return Response(serializer.data, status=status.HTTP_201_CREATED)


        elif Person.count() >= 2 : 
            content = {
            "message" : "허용된 주소의 갯수는 2개입니다.",
            "result" : {}
                }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def member_addr(request, id_member):
    """
    멤버 주소 조회 수정, 삭제
    """
    # try:
    memberAddr = Memberaddr.objects.filter(id_member=id_member)
    if memberAddr.count() == 0:
        content = {
            "message" : "없는 사용자 입니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = memberAddrSerializer(memberAddr, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        # 파라미터 get방식
        # Addr = request.GET['addr']

        # 제이슨 방식
        data = request.body.decode('utf-8')
        received_json_data = json.loads(data)
        Addr = received_json_data['addr']
        q = memberAddr.get(addr = Addr)
        q.delete()
        content = {
            "message" : "삭제 완료",
            "result" : {"addr" : Addr}
                }
        return Response(content ,status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def member_touch(request, id_member):
    """
    코드 조각 조회, 업데이트, 삭제
    Modifiable List : nick_name, tel, email, birth, img, gender
    """
    try:
        member = Member.objects.get(pk=id_member)
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
def product_detail(request, id_product):
    """
    코드 조각 조회, 업데이트, 삭제
    """
    try:
        product = Product.objects.get(pk=id_product)
    except Product.DoesNotExist:
        content = {
            "message" : "없는 물품리스트 입니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)
    # except Product.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        product.views += 1
        product.save()
        product = Product.objects.get(pk=id_product)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductTouchSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        content = {
            "message" : "pk :" + id_product + " 삭제 완료",
            "result" : {}
                }
        content = "" 
        return Response(content, status=status.HTTP_204_NO_CONTENT)


    
@api_view(['GET'])
def product_search(request):
    """
    제목에 검색어가 포함된 물건들 리스트
    """
    Search = request.GET['q']
    product = Product.objects.filter(name__contains = Search)
    # product = Product.objects.get(name = Search)
    if product.count() == 0:
        #검색 결과 없음.
        content = {
            "message" : "검색한 제품이 없습니다.",
            "result" : {"입력한 검색어" : Search}
                }
        return Response(content, status=status.HTTP_204_NO_CONTENT)
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
def company_detail(request, id_company):
    """
    특정 업체리스트를 조회, 수정, 삭제 합니다.
    """
    try:
        company = Company.objects.get(pk=id_company)
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
        serializer = CompanyTouchSerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        content = {
            "message" : "pk :" + id_company + " 삭제 완료",
            "result" : {}
        }
        return Response(content, status=status.HTTP_204_NO_CONTENT)


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
        q = request.data.dict()
        try:
            # 자신이 등록한 상품인지 확인한다.
            product = Product.objects.get(id_product=q['id_product'], id_member=q['id_member'])
        except Product.DoesNotExist:
            # 이미 내가 등록한 찜리스트에 있는지 확인한다.
            try:
                wishlist = Wishlist.objects.get(id_product=q['id_product'], id_member=q['id_member'])
            except Wishlist.DoesNotExist:
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
            content = {
                "message" : "이미 찜리스트에 등록된 상품입니다.",
                "result" : {}
                    }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
        content = {
            "message" : "멤버 본인이 등록한 상품입니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET', 'DELETE'])
def wishlist_detail(request, id_member):
    """
    특정 유저의 찜리스트를 조회, 삭제 합니다.
    """
    wishlist = Wishlist.objects.filter(id_member = id_member)
    if wishlist.count() == 0:
        content = {
            "message" : "찜한 상품이 없습니다.",
            "result" : {}
                }
        return Response(content, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WishlistSerializer(wishlist, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        q = request.data.dict()
        qid_product = q['id_product']
        wishlist_delete = Wishlist.objects.filter(id_member = id_member).filter(id_product = qid_product)
        wishlist_delete.delete()
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
    try :
        Location.objects.get(dong = addr)
    except Location.DoesNotExist:
        content = {
            "message" : "없는 주소입니다",
            "result" : {}
                }
        return Response(content, status=status.HTTP_400_BAD_REQUEST) 
    location = NearbyLocation.objects.filter(dong = addr).filter(distance = dis)
    if location.count() == 0:
        content = {
            "message" : "없는 거리값입니다",
            "result" : {}
                }
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    product_sum = Product.objects.filter(name__contains = Search).filter(addr = addr)
    for i in location :
        product = Product.objects.filter(name__contains = Search).filter(addr = i.nearby_dong)
        product_sum = product_sum | product
    if product_sum.count() == 0 :
        content = {
            "message" : "검색한 제품이 없습니다.",
            "result" : {"입력한 검색어" : Search}
                }
        return Response(content,status=status.HTTP_204_NO_CONTENT)
    serializer = ProductSerializer(product_sum, many =True)
    return Response(serializer.data)

@api_view(['GET'])
def selling_product_list(request, id_member):
    """
    특정 유저의 판매 상품 리스트를 조회합니다.
    """
    # objects.get은 단건을 조회하기 위한 용도이고, 없을 경우 DoesNotExist에러를 발생시킨다.
    # objects.filter는 여러 건의 객체를 조회하기 위한 용도이고, 없을 경우 빈 queryset을 리턴한다.
    # 즉, filter를 할 때 DoesNotExist Exception을 체크하는 것은 의미가 없다.
    product = Product.objects.filter(id_member = id_member)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def test(request):
    """
    테스트용 api
    """
    return Response(status=status.HTTP_200_OK)


@api_view(['POST'])
def seller_review(request):
    """
    판매자의 리뷰를 봅니다(판매자 -> 구매자)
    """
    if request.method == 'GET':
        sellerreview = SellerReview.objects.all()
        serializer = SellerReviewSerializer(sellerreview, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        Data = json.loads(request.body)
        serializer = SellerReviewSerializer(data=request.data)
        if serializer.is_valid():
            #json 확인
            if Data.get('id_shopper'):
                if Data.get('rate'):
                    #seller review 저장
                    serializer.save()
                    shopper = Data['id_shopper']
                    review = int(serializer.data['id_review_seller'])
                    product = Data['id_product']
                    temp_shopper = Member.objects.get(id_member=shopper)
                    temp_review = SellerReview.objects.get(id_review_seller=review)
                    temp_product = Product.objects.get(id_product = product)
                    #realdeal 저장
                    RealDeal.objects.create(id_shopper = temp_shopper, id_review_seller = temp_review,id_product = temp_product)
                    #rate 저장
                    rate = Data['rate'].split(',')
                    for i in rate:
                        temp_rate = Rate.objects.get(id_rate=i)
                        SellerRate.objects.create(id_review_seller = temp_review, id_rate =temp_rate)
                    content = {
                                "message" : "후기등록 완료", 
                                "result"  : {
                                                "review" : serializer.data, 
                                                "rate" : rate, 
                                                "shopper" : shopper,
                                                "id_product" : product
                                            }
                              }
                    return Response(content, status=status.HTTP_201_CREATED)
                else :
                    content =   {
                        "message" : "rate 필드는 필수입니다.",
                        "result" : {}
                            }
                    return Response(content, status=status.HTTP_400_BAD_REQUEST)
            else :
                content =   {
                        "message" : "id_shopper 필드는 필수입니다.",
                        "result" : {}
                            }
                return Response(content, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def shopper_review(request):
    """
    구매자의 리뷰를 봅니다(구매자 -> 판매자)
    """
    if request.method == 'GET':
        shopperreview = ShopperReview.objects.all()
        serializer = ShopperReviewSerializer(shopperreview, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        Data = json.loads(request.body)
        serializer = ShopperReviewSerializer(data=request.data)
        if serializer.is_valid():
                if Data.get('rate'):
                    #seller review 저장
                    serializer.save()
                    review = int(serializer.data['id_review_shopper'])
                    temp_review = SellerReview.objects.get(id_review_seller=review)
                    #rate 저장
                    rate = Data['rate'].split(',')
                    for i in rate:
                        temp_rate = Rate.objects.get(id_rate=i)
                        ShopperRate.objects.create(id_review_shopper = temp_review, id_rate =temp_rate)
                    content = {
                                "message" : "후기등록 완료", 
                                "result"  : {
                                                "review" : serializer.data, 
                                                "rate" : rate
                                            }
                              }
                    return Response(content, status=status.HTTP_201_CREATED)
                else :
                    content =   {
                        "message" : "rate 필드는 필수입니다.",
                        "result" : {}
                            }
                    return Response(content, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#특정 실거래의 구매자 리뷰
def shopper_review_list(id_real_deal) :
    shopperreview = ShopperReview.objects.filter(id_real_deal = id_real_deal)
    serializer = ShopperReviewSerializer(shopperreview, many=True)
    return serializer.data


#특정 실거래의 구매자 리뷰
def seller_review_list(id_real_deal) :
    sellerreview = ShopperReview.objects.filter(id_real_deal = id_real_deal)
    serializer = ShopperReviewSerializer(sellerreview, many=True)
    return serializer.data

