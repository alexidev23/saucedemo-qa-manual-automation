# 🔍 Proyecto QA Manual + Automation – SauceDemo

Este repositorio contiene un desafío práctico para aplicar conocimientos de **Testing QA Manual** y **Automated Testing** utilizando la web [SauceDemo](https://www.saucedemo.com/). Es un proyecto orientado a la práctica personal y al desarrollo de habilidades como QA Analyst y QA Automation Trainee.

---

## 📁 Estructura del Repositorio

```
📂 documentacion
   ├── casos_de_prueba.md
   ├── casos_de_prueba.xlsx
   ├── reporte_bugs.md
   └── evidencias/
📂 cypress/ (o carpeta de tu framework de automatización)
   └── integration/
       └── saucedemo_tests.spec.js
README.md
```

---

## ✅ QA Manual

### Objetivo
Verificar el comportamiento funcional de la aplicación [SauceDemo](https://www.saucedemo.com/) en base a los requerimientos esperados y documentar posibles errores.

### Lo trabajado:
- Análisis funcional de la plataforma.
- Casos de prueba funcionales (login, filtros, carrito, etc).
- Ejecución de pruebas y registro de resultados.
- Reporte de bugs con evidencias.
- Documentación en `.md` y `.xlsx`.

📸 Capturas de pantalla en la carpeta `documentacion/evidencias`.

---

## 🤖 QA Automation

### Herramienta utilizada:
- [Cypress](https://www.cypress.io/) (JavaScript)

### Endpoints/funcionalidades automatizadas:
[✅] Login válido e inválido.

[✅] Agregar productos y remover productos al carrito.

[✅] Verificación de filtros de productos.

[✅] Navegación entre secciones.

### Cómo ejecutar los tests:
1. Cloná el repo:
   ```bash
   git clone https://github.com/tu-usuario/saucedemo-qa-manual-automation.git
   ```
2. Instalá dependencias (si usás Cypress):
   ```bash
   npm install
   ```
3. Ejecutá Cypress:
   ```bash
   npx cypress open
   ```

---

## 📌 Conocimientos aplicados

| QA Manual | QA Automation |
|-----------|---------------|
| Análisis de requerimientos | Cypress – E2E Testing |
| Diseño de casos de prueba | Selectores CSS/XPath |
| Reporte de bugs | Validación de datos esperados |
| Evidencia de pruebas | Automatización de flujos |
| Prioridad y severidad | Buenas prácticas de testing |

---

## 📸 Evidencia

   - 🎥 [Login test valido](./documentacion/evidencias/test_login_200.mp4)

   - 🎥 [Login invalido usuario](./documentacion/evidencias/test_login_invalido_usuario.mp4)

   - 🎥 [Login invalido contraseña](./documentacion/evidencias/test_login_invalido_password.mp4)

   - 🎥 [Login invalido usuario y contraseña](./documentacion/evidencias/test_login_invalido_usuario_password.mp4)

   - 🎥 [Agregar productos del carrito](./documentacion/evidencias/test_agregar_productos.mp4)

   - 🎥 [Quitar productos del carrito](./documentacion/evidencias/test_quitar_productos.mp4)   

   - 🎥 [Probando los distintos tipos de filtros](./documentacion/evidencias/test_quitar_productos.mp4)     
---

## 🧠 Aprendizajes

- Practicar el ciclo completo del testing manual y automatizado.
- Mejorar habilidades de documentación.
- Uso profesional de herramientas de testing y control de versiones.

---

## 💬 Autor

**Alexis Escobar** – QA Manual & Automation Jr.  
[LinkedIn](https://www.linkedin.com/in/alexis-escobar-95b491184/) | [Portafolio](https://portafolio-alexisdev.vercel.app/)
