from django.urls import path

from .views import *

urlpatterns = [
	path('', home, name='home'),
	path('about/', about, name='about'),
	path('services/', services, name='services'),
	path('projects/', projects, name='projects'),
	path('team/', team, name='team'),
	path('contact/', contact, name='contact'),
]