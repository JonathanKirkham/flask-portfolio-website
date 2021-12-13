from flask import Flask, render_template, request, redirect
import csv
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/<string:page_name>')
def page(page_name):

    title = 'Jonathan Kirkham | Developer'
    submitted = 'Thank you'
    msg = "Message received. Thank you!"
    return render_template(page_name, title=title, msg=msg, submitted=submitted)


def write_to_csv(data):
    with open('db.csv', mode='a') as db:
        email = data['email']
        subject = data['subject']
        message = data['message']
        csv_writer = csv.writer(
            db, delimiter=',', quotechar='|', newline='', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email, subject, message])


@app.route('/submit_form', methods=["GET", "POST"])
def submit_form():
    if request.method == "POST":
        data = request.form.to_dict()
        write_to_csv(data)
        return redirect('/submitted.html')
    else:
        return "Error"
