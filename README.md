# twitter

Crear en pgadmin la base de datos twitter
Ir a la carpeta api y levantar el backend con el comando npm i y después npm start 
Ir a la carpeta client e instalar la carpeta node modules con npm install y luego npm start

Una vez situado en el http://localhost:3000/ se puede registrar un usuario o acceder 
a Login con un usuario predeterminado ( archivo data.population.js)

Después de crear el usuario se dirige a Login para iniciar sesión

Solo es posible acceder a http://localhost:3000/home si el usuario está registrado en la base de datos
y tiene su respectivo token para acceder

En la ruta /home se puede visualizar los tweets correspondientes de cada usuario
