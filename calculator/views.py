from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
import json
from calculator.formulas import triangle as tri
from .models import FeedbackRecordings, CalculationsLogs
from calculator.logmaker import trianglemakelog
from calculator.errorchecker import error_check_triangle

import os
from onlinecalc.settings import BASE_DIR

#This is path to json file where triangle described.
path_t = os.path.join(BASE_DIR, "static/json/triangle.json")

def main_page(request, *args, **kwargs):
    try:
        if request.method == "POST":
            #Getting instructions of what the type of shape the
            #program work with(How to processing the data.).
            with open(path_t) as shape:
                shape_data = json.load(shape)
                excdatalistcombs = shape_data["excdata_list_combinations"]
                list_fields_combs = shape_data["list_fields_combinations"]
                number_of_fields = shape_data["number_of_fields"]

            #Getting data from form(data a user has input).
            sumdata_fromfront = json.loads(request.body.decode("ascii"))
            fields_list = []
            c = 0
            while c < number_of_fields:
                fields_list.append(None)
                c += 1
            c = 0
            for getting_data in fields_list:
                getting_data = str(sumdata_fromfront[c])
                space_check = getting_data.isspace()
                if space_check:
                    getting_data = ""
                if getting_data != "":
                    fields_list[c] = float(getting_data)
                else:
                    fields_list[c] = None
                c += 1
            excessed_data = sumdata_fromfront[number_of_fields]

            #Describing the initial state of fields when the
            #submit button has been pressed. Which fields of
            #the form has been empty, which not.
            #Value False means empty.
            inis_inp = fields_list.copy()
            c = 0
            for det_inis in inis_inp:
                if det_inis == None:
                    inis_inp[c] = False
                c += 1

            #Decide which fields are redundant, if they are
            #has been input.
            list_fi_exc = fields_list.copy()
            def assign_exc(x):
                for i in x:
                    list_fi_exc[i] = None
            c = 0
            for i in excdatalistcombs:
                if excessed_data == i:
                    assign_exc(list_fields_combs[c])
                    break
                c += 1
            fields_list = list_fi_exc.copy()

            #Calculating of shape.
            calculated_data = tri(*fields_list)
            c = 0
            while c < number_of_fields:
                fields_list[c] = calculated_data[c]
                c += 1
            colorings = [None] * 7
            c = number_of_fields
            while c < number_of_fields+number_of_fields:
                colorings[c-number_of_fields] = calculated_data[c]
                c += 1

            #Deciding which fields in output mustn't be colored.
            c = 0
            for i in inis_inp:
                if i != False:
                    colorings[c] = 0
                c += 1

            #........
            datatoout = fields_list.copy()
            iniinpdata = inis_inp.copy()
            c = 0
            for x in iniinpdata:
                if x != False:
                    datatoout[c] = x
                c += 1

            #Logging of results to track errors.
            try:
                trianglemakelog(datatoout, colorings)
            except:
                pass

            jsontofront = json.dumps(datatoout + colorings)

            return HttpResponse(jsontofront)
        else:
            dtn = datetime.now().strftime("%Y-%m-%d.%H:%M:%S")
            context = {"dt": dtn}
            return render(request, "main_page.html", context)
    except:
        return HttpResponse("<h1>Page lost.</h1>")


def about(request, *args, **kwargs):
    try:
        return render(request, "about.html", {})
    except:
        return HttpResponse("<h1>Page lost.</h1>")


def feedback(request, *args, **kwargs):
    try:
        return render(request, "feedback.html", {})
    except:
        return HttpResponse("<h1>Page lost.</h1>")


def faq(request, *args, **kwargs):
    try:
        return render(request, "faq.html", {})
    except:
        return HttpResponse("<h1>Page lost.</h1>")


def save_data(request):
    if request.method == "POST":
        feedback_request = json.loads(request.body.decode("utf-8"))
        try:
            rec = FeedbackRecordings.objects.create(title=feedback_request[0],
            message=feedback_request[1])
            rec.save()
            rec_response = "Good, feedback saved to database."
        except:
            rec_response = "Unnown error."
        rec_resp_to_front = [rec_response]
        total_rec_resp_to_front = json.dumps(rec_resp_to_front)

        return HttpResponse(total_rec_resp_to_front)
    else:
        return HttpResponse('''<h1>The page does not exists.<br>
        La page n'existe pas.<br>Страница не существует.</h1>''')


def error_check(request):
    try:
        showing_errors = error_check_triangle()
        return render(request, "errors_check.html", showing_errors)
    except:
        return HttpResponse("<h1>Something went wrong.</h1>")


def mobile(request, *args, **kwargs):
    try:
        return render(request, "mobile.html", {})
    except:
        return HttpResponse("<h1>Page lost.</h1>")


# Create your views here.
