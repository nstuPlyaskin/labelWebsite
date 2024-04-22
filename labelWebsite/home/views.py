from django.shortcuts import render
from .models import Articles

# Create your views here.

def home(request):
    news = Articles.objects.order_by('-date')
    return render(request, 'home/home.html', {"news" : news})

def releases(request):
    return render(request, 'home/releases.html')

def newRelease(request):
    return render(request, 'home/new-release.html')

def allReleases(request):
    return render(request, 'home/all-releases.html')

def moderationReleases(request):
    return render(request, 'home/moderation-releases.html')

def draftsReleases(request):
    return render(request, 'home/drafts-releases.html')

def onDeleteReleases(request):
    return render(request, 'home/on-delete-releases.html')



