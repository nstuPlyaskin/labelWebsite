from django.shortcuts import render, redirect
from .models import Articles
from .forms import NewReleaseForm

# Create your views here.

def home(request):
    news = Articles.objects.order_by('-date')

    error = ''
    if request.method == "POST":
        form = NewReleaseForm(request.POST)
        if form.is_valid():
            form.save() 
            print('Данные успешно сохранены в базу данных.')
            # js for popup
            return redirect('/home')
        else:
            error = 'Ошибка при заполнении формы'
            print('Ошибка валидации формы:', form.errors)


    return render(request, 'home/home.html', {"news" : news})

def releases(request):
    return render(request, 'home/releases.html')

def newRelease(request):
    form = NewReleaseForm()
    data = {
        'form': form
    }
    return render(request, 'home/new-release.html', data)

def allReleases(request):
    return render(request, 'home/all-releases.html')

def moderationReleases(request):
    return render(request, 'home/moderation-releases.html')

def draftsReleases(request):
    return render(request, 'home/drafts-releases.html')

def onDeleteReleases(request):
    return render(request, 'home/on-delete-releases.html')



