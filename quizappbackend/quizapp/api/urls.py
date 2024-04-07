from django.urls import path
from . import views

urlpatterns = [
    path('quiz/', views.QuizViewSet.as_view({'post': 'create'}), name='create_quiz'),
]


