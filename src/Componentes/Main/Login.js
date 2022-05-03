import React from "react";
import "./Login2.css";

// {}
const Login = () => {
  return (
    <div className="login">
        <div className="box">
            <img src="assets/user-login4.png" alt="imagem-login" />

            <div className="input-style">
                <input type="text" />
                <div className="line"></div>
                <label>Email</label>
            </div>
          <br />
          <br />

            <div className="input-style2">
                <input type="text" />
                <div className="line"></div>
                <label>Senha</label>
            </div>

          <button href="#" className="neon">Login</button>

          <a href="#"> <h5>Esqueceu a senha ?</h5></a>
          <a href="#"> <h5>Criar conta</h5></a>
        
        </div>
    </div>
  );
};

export default Login;