import turtle

# Crear un objeto turtle
pen = turtle.Turtle()

# Definir una función para dibujar la curva del corazón
def curve():
    for i in range(200):
        pen.right(1)
        pen.forward(1)

# Definir una función para dibujar el corazón completo
def heart():
    pen.fillcolor('red')
    pen.begin_fill()
    pen.left(140)
    pen.forward(113)
    curve()
    pen.left(120)
    curve()
    pen.forward(112)
    pen.end_fill()

# Definir una función para escribir texto
def txt():
    pen.up()
    pen.setpos(-68, 95)
    pen.down()
    pen.color('lightgreen')
    pen.write("Te quiero", font=("Verdana", 12, "bold"))

# Dibujar el corazón y escribir el texto
heart()
txt()

# Ocultar el objeto turtle
pen.hideturtle()

# Mantener la ventana abierta
turtle.done()
# Language:Python 
# Copie el código completo y abra la aplicación PyCoder para ejecutarlo. 
# PyCoder APP download link：https://play.google.com/store/apps/details?id=com.ikou.pycoding 