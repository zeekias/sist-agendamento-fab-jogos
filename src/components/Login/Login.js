import './Login.css';
const logo = require('../../images/IFMA-LOGO.png');

function Login() {
    return (
        <div className="d-flex justify-content-around align-items-center gap-3">
            <div className="w-50"><img src={logo} alt="" id="im" /></div>
            <main className="w-50">
                <p id="title">AGGENDER</p>
                <button className="btn shadow-sm">Login com o Google</button><br />
                <input className="form d-flex form-control" type="text" placeholder="Email ou nome de usuário" size="25px"></input><br />
                <input className="form d-flex form-control" type="password" placeholder="Senha" size="25px"></input><br />
                <div className="d-flex align-items-center">
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check" className="ml-1">Manter-se conectado</label>
                    <a href="" className="ml-3">Esqueceu sua senha?</a>
                </div>
                <button className="btn cor">Login</button><br />
                <a href="">Crie sua conta</a>
            </main>
        </div>
    );
}

export default Login