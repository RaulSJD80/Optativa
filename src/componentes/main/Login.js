export default Login;

function Login (props){

     const envioFormulario = (event) =>{
        event.preventDefault();
        const login = event.target;
        props.inicioSesion(login.email.value, login.password.value);
    };

    return(
        <div>
            <form onSubmit = {envioFormulario}>
                <h2>Inicio Sesion</h2>
                <input type="email" placeholder = "Correo" name = "email" required />
                <input type = "password" placeholder = "Contraseña" name = "password" required/>
                <button type = "submit">Entrar</button>            
            </form>
        </div>
    )
}