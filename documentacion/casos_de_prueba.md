# 📋 Casos de Prueba – SauceDemo

## Caso 1: Login exitoso
- **Objetivo**: Verificar login con credenciales válidas
- **Datos**: usuario: standard_user, contraseña: secret_sauce
- **Pasos**:
  1. Ingresar al sitio
  2. Completar usuario y contraseña
  3. Clic en "Login"
- **Resultado esperado**: Redirecciona al inventario

---

## Caso 2: Usuario bloqueado
- **Objetivo**: Verificar que usuario bloqueado no puede loguearse
- **Datos**: usuario: locked_out_user, contraseña: secret_sauce
- **Resultado esperado**: Aparece mensaje de error

---

## Caso 3: Agregar productos al carrito
- **Pasos**:
  1. Iniciar sesión
  2. Clic en "Add to cart" en 2 productos
  3. Ir al carrito
- **Resultado esperado**: Hay 2 productos agregados
