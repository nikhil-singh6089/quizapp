from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, QuestionViewSet, ChoiceViewSet, QuizListCreateAPIView

post_router = DefaultRouter()
post_router.register(r'quiz', QuizListCreateAPIView)


