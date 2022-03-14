import React from "react";
import './component/Login.css';

const Register = () =>{
    return (
        <div class="kotak_login">
            <center><h2>Form Register</h2></center>
            <center> <h1 class="tulisan_login">Tugas Pertemuan Ketiga</h1></center>
            <form>
            <div class="form-inline">
                    <label>Name</label>
                    <input type="text" name="name" class="form_login" placeholder="Masukkan nama"/>
                </div>                
                <div class="form-inline">
                    <label>Username</label>
                    <input type="text" name="username" class="form_login" placeholder="Masukkan Username"/>
                </div>
                <div class="form-inline">
                    <label>Address</label>
                    <input type="text" name="address" class="form_login" placeholder="Masukkan Alamat"/>
                </div>
                <div class="form-inline">
                    <label>No.Hp</label>
                    <input type="number" name="no_handphone" class="form_login" placeholder="Masukkan No.Handphone"/>
                </div>
                <div class="form-inline">
                    <label>Password</label>
                    <input type="password" name="password" class="form_login" placeholder="Masukkan Password anda"/>
                </div>

                <input type="submit" class="button_login" value="REGISTER"/>

               <center> <p><input type='checkbox' name='remember_me' value='Remember Me' />Remember Me</p></center>

                
                <center><input type="submit" class="button_cancel" value="Cancel"/></center>

                <br/>
                <br/>
               
            </form>
            
        </div>
    );
}
export default Register;