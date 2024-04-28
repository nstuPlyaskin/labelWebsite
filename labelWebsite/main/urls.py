from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),       # This pattern matches the root URL
    path('login/', views.login), # This pattern matches the '/login' URL
    path('about/', views.about)  # This pattern matches the '/about' URL
]


