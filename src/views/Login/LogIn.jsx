import './LogIn.css';

function LogIn () {
  return (
    <div className="login-container">
      <h3>Iniciar sesión</h3>
      <form>
        <div className='input-container'>
            <p>Mail</p>
            <input type="email" placeholder="Email" />
        </div>
        <div className='input-container'>
            <p>Contraseña</p>
            <input type="password" placeholder="Password" />
            <a href=""> ¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit">Sign In</button>
      </form>
        <p>¿No tenés una cuenta?</p>
        <a href="">Crear una cuenta</a>
    </div>
  );
}

export default LogIn;