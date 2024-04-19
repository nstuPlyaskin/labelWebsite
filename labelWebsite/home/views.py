from django.shortcuts import render
from .models import Articles

# Create your views here.

def home(request):
    news = Articles.objects.order_by('-date')
    return render(request, 'home/home.html', {"news" : news})

def releases(request):
    return render(request, 'home/releases.html')