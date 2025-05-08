from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import os
import json
import matplotlib.pyplot as plt
import io

app = Flask(__name__)
CORS(app)

NOMBRE_ARCHIVO = "json/calificaciones.json"

if not os.path.exists(NOMBRE_ARCHIVO):
    with open(NOMBRE_ARCHIVO, "w") as txt:
        json.dump([], txt, indent=4)

def leer_datos():
    with open(NOMBRE_ARCHIVO, "r") as txt:
        return json.load(txt)

def guardar_datos(calificacion):
    with open(NOMBRE_ARCHIVO, "w") as txt:
        json.dump(calificacion, txt, indent=4)

@app.route('/insertar', methods=["POST"])
def insertar():
    datos = request.json
    print(datos)
    calificaciones = leer_datos()
    calificaciones.append(datos)
    guardar_datos(calificaciones)
    return {"mensaje": "OK"}

@app.route('/consultar', methods=["GET"])
def consultar_calificaciones():
    calificaciones = leer_datos()
    return jsonify(calificaciones)

@app.route("/grafica")
def grafica_ciudad():
    calificaciones = leer_datos()  # Aquí debes usar leer_datos()

    conteo = {}
    for i in calificaciones:
        ciudad = i.get("ciudadFavorita")
        if ciudad:
            if ciudad in conteo:
                conteo[ciudad] += 1
            else:
                conteo[ciudad] = 1

    ciudades = list(conteo.keys())
    cantidades = list(conteo.values())

    plt.figure(figsize=(10, 6))
    plt.bar(ciudades, cantidades, color="#3399ff", edgecolor="blue")
    plt.title("Ciudad Favorita", fontsize=20, color="#000000", fontweight="bold", fontname="Arial")
    plt.xlabel("Ciudad", fontsize=10, color="#000000", fontweight="bold", fontname="Arial") 
    plt.ylabel("Cantidad", fontsize=10, color="#000000", fontweight="bold", fontname="Arial")
    plt.xticks(rotation=90)  # Gira las etiquetas del eje X para que no se encimen
    plt.tight_layout()
    plt.figtext(0.5, -0.05,
            "Este gráfico muestra cuántas veces fue elegida cada ciudad como destino favorito, a través del formulario.",
            ha='center', fontsize=15, fontname="Arial", wrap=True, color="#000000")

    img = io.BytesIO()
    plt.savefig(img, format="png", bbox_inches='tight')
    plt.close()
    img.seek(0)
    return Response(img.getvalue(), mimetype="image/png")


if __name__ == "__main__":
    app.run(debug=True, port=5000)



