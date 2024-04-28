from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# login page
def index(request):
    if request.user.is_authenticated:
        return redirect('/home')
    else:
    
        if request.method == "POST":
            username = request.POST['email_field']
            password = request.POST['password_field']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                print('USER LOGIN:', request.user.username)
                return redirect('home/')
            else:
                messages.success(request, ("Wrong username or password."))
                return redirect('/')
        else:
            return render(request, 'main/index.html', {})

def logout_user(request):
    print('USER LOGOUT:', request.user.username)
    logout(request)
    return redirect('/')

def about(request):
    return render(request, 'main/index.html')

