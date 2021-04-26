from typing import List
from fastapi import FastAPI, Depends
from pydantic import BaseModel,Field
import mysql.connector
import json
import databases
import sqlalchemy
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()



DATABASE_URL = "sqlite:///./myistic.db"
metadata = sqlalchemy.MetaData()


database = databases.Database(DATABASE_URL)

register = sqlalchemy.Table(
     "profil",
     metadata,
     sqlalchemy.Column("nom",sqlalchemy.String(50)),
     sqlalchemy.Column("prenom",sqlalchemy.String(50)),
     sqlalchemy.Column("CIN",sqlalchemy.String(50),primary_key=True),
     sqlalchemy.Column("email",sqlalchemy.String(50)),
     sqlalchemy.Column("filiere",sqlalchemy.String(50)),
     sqlalchemy.Column("Date_de_naissance",sqlalchemy.String(50)),
     sqlalchemy.Column("Genre",sqlalchemy.String(50)),
     sqlalchemy.Column("Mot_de_passe",sqlalchemy.String(50)),
)

engine =sqlalchemy.create_engine(
    DATABASE_URL, connect_args={"check_same_thread":False}

)

metadata.create_all(engine)


app = FastAPI()

@app.on_event("startup")
async def connect():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

class RegisterIn(BaseModel):
    nom: str = Field(...)

class Register(BaseModel):
    nom : str
    prenom :str
    CIN : str
    email:str
    filiere :str
    Date_de_naissance : str
    Genre:str
    Mot_de_passe:str



@app.post('/profil')
async def creater(r: Register = Depends()):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "myistic")
    mycursor = mydb.cursor()
    query="INSERT INTO profil(nom,prenom,CIN,email,filiere,Date_de_naissance,Genre,Mot_de_passe)VALUES (%s,%s,%s,%s,%s,%s,%s,%s)"
    val=(r.nom,r.prenom,r.CIN,r.email,r.filiere,r.Date_de_naissance,r.Genre,r.Mot_de_passe)
    mycursor.execute(query,val)
    mydb.commit()
    mycursor2 = mydb.cursor()
    select_stmt = "SELECT * FROM profil WHERE CIN =%s"
    cin = ("6", )
    mycursor2.execute(select_stmt,cin)
    rv=mycursor2.fetchall()
    json_data=[]
    for result in rv:
        return(result)
    

    
