from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .models import Articles
from .forms import NewReleaseForm

# Create your views here.

@login_required(login_url='/')
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

@login_required
def releases(request):
    return render(request, 'home/releases.html')

@login_required
def newRelease(request):
    form = NewReleaseForm()
    data = {
        'form': form
    }
    return render(request, 'home/new-release.html', data)

@login_required
def allReleases(request):
    return render(request, 'home/all-releases.html')

@login_required
def moderationReleases(request):
    return render(request, 'home/moderation-releases.html')

@login_required
def draftsReleases(request):
    return render(request, 'home/drafts-releases.html')

@login_required
def onDeleteReleases(request):
    return render(request, 'home/on-delete-releases.html')



