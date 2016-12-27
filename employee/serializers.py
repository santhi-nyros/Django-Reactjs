from rest_framework import serializers
from employee.models import employinfo
from rest_framework.serializers import HyperlinkedModelSerializer


class EmpSerializer(serializers.ModelSerializer):
    class Meta:
        model = employinfo
        fields = ('id','emp_name', 'email', 'profile', 'designation', 'created', 'updated', 'performance', 'team_work', 'behavioral_skill')



class UpdatedEmpSerializer(serializers.ModelSerializer):
    class Meta:
        model = employinfo
        fields = ('id', 'performance', 'team_work', 'behavioral_skill')

    def update(self, validated_data):
        emp = employinfo.objects.filter(id=validated_data['id']).first()
        emp.performance = validated_data['performance']
        emp.team_work = validated_data['team_work']
        emp.behavioral_skill = validated_data['behavioral_skill']
        emp.save()
        return emp
