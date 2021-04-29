from django.db import models

class FeedbackRecordings(models.Model):
    title = models.CharField(max_length=20)
    message = models.CharField(max_length=50)

class CalculationsLogs(models.Model):
    id_db = models.IntegerField(primary_key=True)
    side_a_log = models.FloatField()
    side_b_log = models.FloatField()
    side_c_log = models.FloatField()
    angle_A_log = models.FloatField()
    angle_B_log = models.FloatField()
    angle_C_log = models.FloatField()
    perimeter_log = models.FloatField()
    area_log = models.FloatField()
    colorings_logs = models.CharField(max_length=50)




# Create your models here.
