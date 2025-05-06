
# Global-Hack-Equipo-Dinamita

## Descripción del Proyecto

**TuGuardian** es una aplicación diseñada para mejorar la oferta de seguros personales, particularmente enfocados en accidentes y seguros de vida. La propuesta incluye el uso de un wearable conectado a la aplicación que permite monitorear la salud y comportamientos seguros del usuario, además de premiar con puntos los hábitos saludables. A través de estos puntos, los usuarios pueden obtener beneficios como descuentos en la póliza, transporte y otros servicios relacionados.

La aplicación permite a los usuarios gestionar sus pólizas, registrar vehículos, consultar sus puntos acumulados y canjear recompensas, todo mientras se monitorean sus hábitos de seguridad en tiempo real.

## ¿Cómo correr el proyecto?

Sigue estos pasos para ejecutar el proyecto de manera local:

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/OscarMURA/Global-Hack-Equipo-Dinamita.git

```

Acede a la ruta del proyecto.

### 2. Instalar dependencias

Instala todas las dependencias necesarias para el proyecto:

```bash
npm install
```

### 3. Correr la aplicación

Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor localmente en `http://localhost:5173/`.

## Funcionalidades Implementadas

- **Pantalla de inicio:** Muestra un resumen del día del usuario, estado de la póliza, y opciones rápidas para ver el plan actual, registrar vehículos, consultar puntos y canjear recompensas.
- **Gestión de pólizas:** Permite ver el plan base y solicitar amparos adicionales como incapacidad total y permanente, renta diaria por hospitalización, y renta diaria por incapacidad temporal.
- **Recompensas:** Los usuarios acumulan puntos por comportamientos seguros y saludables, que se pueden canjear por descuentos y beneficios.
- **Wearable:** Monitorea datos como aceleración, pulso cardiaco, y ubicación, enviando alertas en caso de emergencias o comportamientos riesgosos.
- **Pantalla de vehículos:** Los usuarios pueden registrar vehículos y vincularlos a su póliza.
- **Perfil de usuario:** Los usuarios pueden gestionar sus beneficiarios y ver su historial de pólizas y recompensas.
- **Ubicación:** Muestra la ubicación actual del usuario y si está en una zona de riesgo.

## Contribuir

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios: `git checkout -b feature/mi-nueva-caracteristica`.
3. Realiza tus cambios y haz commit: `git commit -am 'Agregada nueva característica'`.
4. Haz push a la rama: `git push origin feature/mi-nueva-caracteristica`.
5. Abre un Pull Request.


