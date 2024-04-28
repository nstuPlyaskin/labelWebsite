from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),       # This pattern matches the root URL
    path('login/', views.index, name="login"), # This pattern matches the '/login' URL
    path('logout/', views.logout_user, name="logout"), # This pattern matches the '/logout' URL
    path('about/', views.about)  # This pattern matches the '/about' URL
]


