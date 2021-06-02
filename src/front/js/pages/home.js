import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
            <div className="header container">
                <div className="information">
                    <h1>¿Quienes somos?</h1>
                    <p>Somos el google de la enfermedades autoinmunes, una red social que acerca los profesionales a los que estan en busqueda de ayuda tan valiosa como la suya. </p>
                    <p>Nos encargamos que todos nuestros usuarios ya sea profesional o paciente, tenga un trato rapido, eficaz y staisfastorio.</p>
                </div>
                <div className="img information">
                    <img src="">
                </div>
            </div>

            <div className="work container">
                <div classname="statement">
                    <h2>¿Nuevo en Autodoctor?</h2>
                    <p>Conecta con los mejores profesionales y la mejor comunidad en unos sencillos pasos</p>
                </div>
                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                             <p class="card-text">Create una cuenta o haz login.</p>
                        </div>
                    </div>
                    <div class="card">
                         <img class="card-img-top" src="..." alt="Card image cap">
                         <div class="card-body">
                             <p class="card-text">Encuentra el profesional que más se adapte a tí.</p>
                         </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="..." alt="Card image cap">
                        <div class="card-body">
                             <p class="card-text">Te ayudaran con tus problemas.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="resources container">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                             <img class="d-block w-100" src="..." alt="First slide">
                        </div>
                        <div class="carousel-item">
                             <img class="d-block w-100" src="..." alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide">
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="sr-only">Next</span>
                     </a>
                </div>
            </div>
        
	);
};
