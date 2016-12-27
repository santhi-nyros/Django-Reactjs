from django.shortcuts import render,render_to_response,redirect
from django.http import HttpResponse
from django.template import RequestContext
from .models import *
from employee.serializers import EmpSerializer,UpdatedEmpSerializer
from django.utils.six import BytesIO
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import viewsets
from django.http import JsonResponse
from .forms import Employeeform
# Create your views here.
from django.views.decorators.csrf import csrf_protect

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


#view all products
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = employinfo.objects.all()
    serializer_class = EmpSerializer

@csrf_protect
def AddEmployee(request):
    if request.method == 'POST':
        serializer = EmpSerializer(data=request.POST)
        print ""
        print serializer.is_valid()
        print "++++++++++++++"
        if serializer.is_valid():
            serializer.save()
        else:
            print serializer.errors
            return JsonResponse({'error': serializer.errors})
    return JsonResponse({'data': serializer.data})


@csrf_protect
def UpdateEmployee(request):
    if request.method == 'POST':
        data = request.POST
        serializer = UpdatedEmpSerializer(data = data)
        if serializer.is_valid():
            serializer.update(validated_data = {
                'id':data['id'],
                'performance':data['performance'],
                'team_work':data['team_work'],
                'behavioral_skill':data['behavioral_skill']
            })
        else:
            return JsonResponse({"error":serializer.errors})
        return JsonResponse({'data': serializer.data})
