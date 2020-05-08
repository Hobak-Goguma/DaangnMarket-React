from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from member.models import Member
from member.serializers import *
from django.http import HttpResponse
import json



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
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MemberSerializer(member)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MemberSerializer(member, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def member_overlap(request):
    """
    아이디값이 중복되는지 확인해줍니다.
    """
    try:
        User_id = request.GET['user_id']
        member = Member.objects.get(user_id = User_id)
    except Member.DoesNotExist:
        #중복아이디 없음
        return Response(status=status.HTTP_200_OK)
    #중복아이디 있음
    return Response(status=status.HTTP_400_BAD_REQUEST)


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

    if request.method == 'POST':
        # serializer = LoginSerializer(member)
        return Response(status=status.HTTP_200_OK)
    
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    # user_pw = Data['user_pw']
    # if Member.user_pw == user_pw:
    #     if request.method == 'POST':
    #         serializer = LoginSerializer(member)
    #         return Response(serializer.data)
    # else:
    #     return HttpResponse('비밀번호가 틀렸습니다.')






    
