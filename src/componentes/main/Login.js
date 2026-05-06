export default Login;

function Login (props){

     const envioFormulario = (event) =>{
        event.preventDefault();
        const login = event.target;
        props.onLogin(login.email.value, login.password.value);
    };

    return(
        <div>
            <form onSubmit = {envioFormulario}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required/>
                <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required/>
                </div>
            
                
                
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
        </div>
    )
}

                /*<div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>*/