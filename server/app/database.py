import psycopg2

mydb = psycopg2.connect(
    host="db",
    user="postgres",
    password="pass",
    database="postgres"
)

def checkUserOverEmail(email, password):
    myCursor = mydb.cursor()
    myCursor.execute("select username, password from users where email = %s and password = %s", (email, password))

    colums = ("username, password")

    counter = []
    for row in myCursor.fetchall():
        counter.append(dict(zip(colums, row)))

    if len(counter) == 0:
        return {"isValid" : False}

    return {"isValid" : True}

def checkUserOverUsername(username, password):
    myCursor = mydb.cursor()
    myCursor.execute("select username, password from users where username = %s and password = %s", (username, password))

    colums = ("username, password")

    counter = []
    for row in myCursor.fetchall():
        counter.append(dict(zip(colums, row)))


    if len(counter) == 0:
        return {"isValid" : False}
    
    return {"isValid" : True}
