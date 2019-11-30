from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.index),  #the path for our index view
]