from .models import CalculationsLogs

#This function checks triangle for errors. Here are two types of errors:
#first if sum of all sides of triangle do not equal to perimeter.
#second if sum of all angles do not equal to 180 degree.
def error_check_triangle():
    error_perimeter_found = False
    id_error_perimeter = None
    count_id_db = 1
    while True:
        try:
            d = CalculationsLogs.objects.get(id_db=count_id_db)
            if (d.side_a_log+d.side_b_log+d.side_c_log<d.perimeter_log*0.95 or
            d.side_a_log+d.side_b_log+d.side_c_log>d.perimeter_log*1.05):
                error_perimeter_found = True
                which_id_count = count_id_db
            count_id_db += 1
        except:
            break
        if error_perimeter_found == True:
            id_error_perimeter = which_id_count

    error_angles_sum_found = False
    id_error_angles = None
    count_id_db_ang = 1
    while True:
        try:
            d2 = CalculationsLogs.objects.get(id_db=count_id_db_ang)
            if (d2.angle_A_log + d2.angle_B_log + d2.angle_C_log < 175 or
            d2.angle_A_log + d2.angle_B_log + d2.angle_C_log > 185):
                error_angles_sum_found = True
                which_id_count_ang = count_id_db_ang
            count_id_db_ang += 1
        except:
            break
        if error_angles_sum_found == True:
            id_error_angles = which_id_count_ang

    showing_errors = {"show_error_of_perimeter_n": error_perimeter_found,
    "id_of_perimeter_error_n": id_error_perimeter,
    "show_error_of_angles_n": error_angles_sum_found,
    "id_of_angle_error_n": id_error_angles}
    return (showing_errors)
