# Generated by Django 3.2 on 2021-04-27 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CalculationsLogs',
            fields=[
                ('id_db', models.IntegerField(primary_key=True, serialize=False)),
                ('side_a_log', models.FloatField()),
                ('side_b_log', models.FloatField()),
                ('side_c_log', models.FloatField()),
                ('angle_A_log', models.FloatField()),
                ('angle_B_log', models.FloatField()),
                ('angle_C_log', models.FloatField()),
                ('perimeter_log', models.FloatField()),
                ('area_log', models.FloatField()),
                ('colorings_logs', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='FeedbackRecordings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('message', models.CharField(max_length=50)),
            ],
        ),
    ]