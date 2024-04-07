from django.urls import path
from . import views

urlpatterns = [
    path('quiz/<str:pk>/', views.QuizViewSet.as_view({'post': 'create', 'get': 'retrieve'}), name='create_quiz'),
]


