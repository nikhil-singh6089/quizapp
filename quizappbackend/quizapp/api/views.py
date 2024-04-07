from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from ..models import Quiz, Question
from .serializers import QuizSerializer, QuestionSerializer

class QuizViewSet(viewsets.ViewSet):
    def create(self, request):
        quiz_data = request.data
        serializer = QuizSerializer(data=quiz_data)
        if serializer.is_valid():
            quiz = serializer.save()
            questions_data = quiz_data.pop('questions')
            for question_data in questions_data:
                question_data['quiz'] = quiz.id
                question_serializer = QuestionSerializer(data=question_data)
                if question_serializer.is_valid():
                    question_serializer.save()
                else:
                    return Response(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




