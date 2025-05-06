from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import os
import json
import matplotlib.pyplot as plt
import io

app=Flask(__name__)
CORS(app)

NOMBRE_ARCHIVO="json/calificaciones.json"

if not os.path.exists(NOMBRE_ARCHIVO):
    with open(NOMBRE_ARCHIVO,"w") as txt:
        json.dump([],txt, indent=4)

def leer_datos():
    with open(NOMBRE_ARCHIVO, "r") as txt:
        return json.load(txt)
    
def guardar_datos(calificacion):
    with open(NOMBRE_ARCHIVO, "w") as txt:
        json.dump(calificacion, txt, indent=4)

@app.route('/insertar', methods=["POST"])
def insertar():
    datos=request.json
    print(datos)
    calificaciones=leer_datos()
    calificaciones.append(datos)
    guardar_datos(calificaciones)
    return{"mensaje":"OK"}

@app.route('/consultar', methods=["GET"])
def consultar_calificaciones():
    calificaciones=leer_datos()
    return jsonify(calificaciones)

if __name__ == "__main__":
    app.run(debug=True, port=5000)



