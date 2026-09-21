from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')


def about(request):
    return render(request, 'pages/about.html')


def services(request):
    return render(request, 'pages/services.html')


def projects(request):
    return render(request, 'pages/projects.html')


def team(request):
    return render(request, 'pages/team.html')


def contact(request):
    return render(request, 'pages/contact.html')