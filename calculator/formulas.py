import math
def triangle(*args):
    side_a, side_b, side_c, angle_A, angle_B, angle_C, perimeter = args[0], args[1], args[2], args[3], args[4], args[5], args[6]
    color_field_perimeter = color_field_side_a = color_field_side_b = color_field_side_c = color_field_angle_A = color_field_angle_B = color_field_angle_C = 0

    # side_a, side_b, side_c, angle_A, angle_B = kwargs["side_a"], kwargs["side_b"], kwargs["side_c"], kwargs["angle_A"], kwargs["angle_B"]
    # angle_C, perimeter = kwargs["angle_C"], kwargs["perimeter"]
    # color_field_perimeter, color_field_side_a, color_field_side_b = kwargs["color_field_perimeter"], kwargs["color_field_side_a"], kwargs["color_field_side_b"]
    # color_field_side_c, color_field_angle_A, color_field_angle_B = kwargs["color_field_side_c"], kwargs["color_field_angle_A"], kwargs["color_field_angle_B"]
    # color_field_angle_C = kwargs["color_field_angle_C"]
    def calculate_angles_by_sides(side_a, side_b, side_c):
        ratio_rad_deg = 180 / math.pi
        angle_A = ratio_rad_deg * math.acos(((side_a**2) + (side_c**2) - (side_b**2)) / (2 * side_a * side_c))
        angle_B = ratio_rad_deg * math.acos(((side_a**2) + (side_b**2) - (side_c**2)) / (2 * side_a * side_b))
        angle_C = 180 - (angle_A + angle_B)
        return(angle_A, angle_B, angle_C)

    if perimeter == None and angle_A == None and angle_B == None and angle_C == None:
        perimeter = side_a + side_b + side_c
        angle_A, angle_B, angle_C = calculate_angles_by_sides(side_a, side_b, side_c)
        color_field_perimeter = 1
        color_field_angle_A = color_field_angle_B = color_field_angle_C = 1

    elif side_a == None and angle_A == None and angle_B == None and angle_C == None:
        side_a = perimeter - (side_b + side_c)
        angle_A, angle_B, angle_C = calculate_angles_by_sides(side_a, side_b, side_c)
        color_field_side_a = 1
        color_field_angle_A = color_field_angle_B = color_field_angle_C = 1

    elif side_b == None and angle_A == None and angle_B == None and angle_C == None:
        side_b = perimeter - (side_a + side_c)
        angle_A, angle_B, angle_C = calculate_angles_by_sides(side_a, side_b, side_c)
        color_field_side_b = 1
        color_field_angle_A = color_field_angle_B = color_field_angle_C = 1

    elif side_c == None and angle_A == None and angle_B == None and angle_C == None:
        side_c = perimeter - (side_a + side_b)
        angle_A, angle_B, angle_C = calculate_angles_by_sides(side_a, side_b, side_c)
        color_field_side_c = 1
        color_field_angle_A = color_field_angle_B = color_field_angle_C = 1




    elif side_b == None and angle_B == None and angle_C == None and perimeter == None:
        side_b = math.sqrt(side_a**2 + side_c**2 - 2 * side_a * side_c * math.cos(angle_A/(180/math.pi)))
        angle_C = (180/math.pi)*math.acos((side_b**2 + side_c**2 - side_a**2)/(2*side_b*side_c))
        angle_B = 180 - (angle_A + angle_C)
        perimeter = side_a + side_b + side_c
        color_field_side_b = color_field_perimeter = color_field_angle_B = color_field_angle_C = 1

    elif side_c == None and angle_A == None and angle_C == None and perimeter == None:
        side_c = math.sqrt(side_a**2 + side_b**2 - 2 * side_a * side_b * math.cos(angle_B/(180/math.pi)))
        angle_A = (180/math.pi)*math.acos((side_a**2 + side_c**2 - side_b**2)/(2*side_a*side_c))
        angle_C = 180 - (angle_A + angle_B)
        perimeter = side_a + side_b + side_c
        color_field_side_c = color_field_perimeter = color_field_angle_A = color_field_angle_C = 1

    elif side_a == None and angle_A == None and angle_B == None and perimeter == None:
        side_a = math.sqrt(side_b**2 + side_c**2 - 2 * side_b * side_c * math.cos(angle_C/(180/math.pi)))
        angle_B = (180/math.pi)*math.acos((side_a**2 + side_b**2 - side_c**2)/(2*side_a*side_b))
        angle_A = 180 - (angle_B + angle_C)
        perimeter = side_a + side_b + side_c
        color_field_side_a = color_field_perimeter = color_field_angle_A = color_field_angle_B = 1

    elif side_b == None and angle_A == None and angle_C == None and perimeter == None:
        side_b=angle_A=angle_C=perimeter=0
        color_field_side_b = color_field_perimeter = color_field_angle_A = color_field_angle_C = 1

    elif side_c == None and angle_A == None and angle_B == None and perimeter == None:
        side_c=angle_A=angle_B=perimeter=0
        color_field_side_c = color_field_perimeter = color_field_angle_A = color_field_angle_B = 1

    elif side_a == None and angle_B == None and angle_C == None and perimeter == None:
        side_a=angle_B=angle_C=perimeter=0
        color_field_side_a = color_field_perimeter = color_field_angle_B = color_field_angle_C = 1

    elif side_b == None and angle_A == None and angle_B == None and perimeter == None:
        side_b=angle_A=angle_B=perimeter=0
        color_field_side_b = color_field_perimeter = color_field_angle_A = color_field_angle_B = 1

    elif side_c == None and angle_B == None and angle_C == None and perimeter == None:
        side_c=angle_B=angle_C=perimeter=0
        color_field_side_c = color_field_perimeter = color_field_angle_B = color_field_angle_C = 1

    elif side_a == None and angle_A == None and angle_C == None and perimeter == None:
        side_a=angle_A=angle_C=perimeter=0
        color_field_side_a = color_field_perimeter = color_field_angle_A = color_field_angle_C = 1




    elif side_a == None and side_b == None and angle_B == None and perimeter == None:
        side_a=side_b=angle_B=perimeter=0
        color_field_side_a = color_field_side_b = color_field_angle_B = color_field_perimeter = 1

    elif side_a == None and side_b == None and angle_C == None and perimeter == None:
        side_a=side_b=angle_C=perimeter=0
        color_field_side_a = color_field_side_b = color_field_angle_C = color_field_perimeter = 1

    elif side_a == None and side_b == None and angle_A == None and perimeter == None:
        side_a=side_b=angle_A=perimeter=0
        color_field_side_a = color_field_side_b = color_field_angle_A = color_field_perimeter = 1

    elif side_b == None and side_c == None and angle_C == None and perimeter == None:
        side_b=side_c=angle_C=perimeter=0
        color_field_side_b = color_field_side_c = color_field_angle_C = color_field_perimeter = 1

    elif side_b == None and side_c == None and angle_A == None and perimeter == None:
        side_b=side_c=angle_A=perimeter=0
        color_field_side_b = color_field_side_c = color_field_angle_A = color_field_perimeter = 1

    elif side_b == None and side_c == None and angle_B == None and perimeter == None:
        side_b=side_c=angle_B=perimeter=0
        color_field_side_b = color_field_side_c = color_field_angle_B = color_field_perimeter = 1

    elif side_a == None and side_c == None and angle_A == None and perimeter == None:
        side_a=side_c=angle_A=perimeter=0
        color_field_side_a = color_field_side_c = color_field_angle_A = color_field_perimeter = 1

    elif side_a == None and side_c == None and angle_B == None and perimeter == None:
        side_a=side_c=angle_B=perimeter=0
        color_field_side_a = color_field_side_c = color_field_angle_B = color_field_perimeter = 1

    elif side_a == None and side_c == None and angle_C == None and perimeter == None:
        side_a=side_c=angle_C=perimeter=0
        color_field_side_a = color_field_side_c = color_field_angle_C = color_field_perimeter = 1

    else:
        pass



    calculated_data = (side_a, side_b, side_c, angle_A, angle_B, angle_C, perimeter, color_field_side_a,
    color_field_side_b, color_field_side_c, color_field_angle_A, color_field_angle_B, color_field_angle_C, color_field_perimeter)

    return(calculated_data)
