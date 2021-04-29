from .models import CalculationsLogs

def trianglemakelog(do, co):
    c = 1
    d = 0
    while True:
        try:
            db = CalculationsLogs.objects.get(id_db=c)
            d = db.id_db
            c += 1
        except:
            break
    logs = CalculationsLogs.objects.create(id_db=d + 1,
    side_a_log=do[0],
    side_b_log=do[1],
    side_c_log=do[2],
    angle_A_log=do[3],
    angle_B_log=do[4],
    angle_C_log=do[5],
    perimeter_log=do[6],
    area_log=0,
    colorings_logs=co)
    logs.save()
