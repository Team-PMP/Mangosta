import React from "react";
import { validate } from "webpack";


class FormApp extends React.Component{
    constructor(args){
        super(args)
        this.state={
            username='',
            name='',
            surname='',
            email='',
            password='',
            repeatPassword='',
            specialty='',
            services='',
            message='',
            acept='',

        }
    }
    onChange(e){
        if(e.target.name==='acept'){
            this.setState({
                [e.target.name]:e.target.checked
            })
        }
        else{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    save(e){
        if(!this.validate()){
            return;
        }
        this.setState({
            message:'Enviado correctamente'
        })
    }

    validate(){
        if(this.state.acept != true){
            this.setState({
                message:'Acepte los terminos y condiciones'
            })
            return false
        }
            return true
    }
    render(){
        return (
            <div>
                <label htmlFor="typeOfUser">Tipo de usuario</label>
                <input type="radio" name="typeOfUser" value="Pro" onChange={this.onChange.bind(this)}/>Profesional
                <input type="radio"  name="typeOfUser" value="U" onChange={this.onChange.bind(this)}/>Usuario

                <label htmlFor="username">Nombre de usuario</label>
                <input
                value={this.state.username} onChange={this.onChange.bind(this)}
                name="username" id="username" type="text"/>

                <label htmlFor="name">Nombre</label>
                <input 
                value={this.state.name} onChange={this.onChange.bind(this)}
                name="name" id="name" type="text"/>

                <label htmlFor="surname">Apellidos</label>
                <input 
                value={this.state.surname} onChange={this.onChange.bind(this)}
                name="surname" id="surname" type="text"/>

                <label htmlFor="email">E-mail</label>
                <input 
                value={this.state.email} onChange={this.onChange.bind(this)}
                name="email" id="email" type="text"/>

                <label htmlFor="password">Contraseña</label>
                <input 
                value={this.state.password} onChange={this.onChange.bind(this)}
                name="password" id="password" type="text"/>

                <label htmlFor="repeatPassword">Repetir contraseña</label>
                <input 
                value={this.state.repeatPassword} onChange={this.onChange.bind(this)}
                name="repeatPassword" id="repeatPassword" type="text"/>

                <label htmlFor="specialty">Especialidad</label>
                <select 
                id="specialty" name="specialty"
                value={this.state.specialty} onChange={this.onChange.bind(this)}>
                    <option value="Esp">Seleccione una especialidad</option>
                    <option value="End">Endocrinología</option>
                    <option value="Inm">Inmunología</option>
                    <option value="Der">Dermatología</option>
                    <option value="Reu">Reumatología</option>
                </select>

                <label htmlFor="services">Servicios</label>
                <select 
                id="services" name="services"
                value={this.state.services} onChange={this.onChange.bind(this)}>
                    <option value="Ser">Seleccione un servicio</option>
                    <option value="Ac">Acupuntura</option>
                    <option value="Nat">Naturopatía</option>
                    <option value="MC">Medicina china</option>
                    <option value="Med">Meditación</option>
                </select>

                <div>
                    <input 
                        type="checkbox" id="acept" name="acept"
                        value={this.state.acept}
                        onChange={this.onChange.bind(this)}/>Acepto términos y condiciones
                </div>

                <div>
                    <button onClick={this.save.bind(this)}>Registrarse</button>
                    <span style="({color:'green'})">{this.state.message}</span>
                </div>

                <div>
                    <span>{JSON.stringify(this.state)}</span>
                </div>

            </div>
        )
    }
}