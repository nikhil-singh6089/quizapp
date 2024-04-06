from django.db import models

# Create your models here.

class Topic(models.Model):
    name = models.CharField(max_length=100)

class Question(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    question_text = models.TextField()

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=100)
    is_correct = models.BooleanField(default=False)

class Quiz(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    level = models.CharField(max_length=100)
    total_questions = models.IntegerField()
    per_question_score = models.IntegerField()