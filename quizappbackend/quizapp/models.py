from django.db import models

# Create your models here.

class Quiz(models.Model):
    topic = models.CharField(max_length=100)
    level = models.CharField(max_length=50)
    total_questions = models.PositiveIntegerField()
    per_question_score = models.PositiveIntegerField()

    def __str__(self):
        return self.topic

class Question(models.Model):
    QUESTION_TYPES = (
        ('MCQs', 'Multiple Choice'),
        ('TF', 'True/False'),
        ('SA', 'Short Answer'),
    )

    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    question_type = models.CharField(max_length=4, choices=QUESTION_TYPES)
    choices = models.JSONField(null=True, blank=True)
    correct_answer = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text
