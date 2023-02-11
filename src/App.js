import React from "react";
import img from "./assets/imagenes.js";
import Form from "./components/Form.jsx";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="elemento-fondo-container py-1">
        <div className="fondo-inicio-container">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEhUPDw8VFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsdHR0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAKIBNgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EABwQAQEBAQEAAwEAAAAAAAAAAAABEQIxgaHwQf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAQEAAgMAAAAAAAAAAAAAAAABEUEhMYH/2gAMAwEAAhEDEQA/AOKdIdJVbCoqIgCgCIKlAQBMBUAAAAQBRAFAAVAFEUBUAaEBVxWVBVZUVRFBYYhIouhQGemW+mQwIpREAQQVBEFAQABFQFQAAAABAAVQAAAXCACwICgKACgQFAAVRFoGDplekEEVAAQABEEAAABAAAEAAAAAAABVABQAFRRQAFAgLKQVQ+SEUU1ABKmr0giBRAQBCggAACKgAAAAgAAAAAAAKKiwBUAUAFIgKpoAq6igsqxAVUakQGeqi9MqgACGlEQRUAAAEAABAAAAAAAAAABUBVEWAogCrEgCrEIKsVFiiyrEVFS0UBnr1F6RUQpRASgIYioAAAgAAAACAAAAAAoAAqAKIoCoAqoCqqKCqhBVaZUFQovAz0i9RBEAAQMEEVEAACotQAAAAQAAAAAAAFAAFABUigKiiiooKqRRSNRFAwAwrPTNXpNVlAAAQAAQRUQAFBFRAAAAEABQAQAFFAAAFEUFIEFVUXQURoVYsZUVcDQHn16jVZVAARAEBFAQKCIKgAACKAgoCAoIKAigAAARQBQFFRQWEooosRrARRRUotBKx0yvXqKBUVEEVAAQFRUEAAEAAwwAAAAAAABQRUUDCCigAKuMqCxUNFVplQXFZ1RVEA8Z6/rIKgQA2cpVBNItBEiIALUqijICAoAJQAAAgAC0ACACgKLEURVq1AUJ6AjX77UCtRKsBZ0i9AMVt//Z"
            alt="fondo"
            className="fondo-inicio"
          />
        </div>
        <div className="elemento-fondo">
          <div class="text-center logo-container">
            <div className="logo"> </div>
          </div>
          <div className="text-center inicio-container">
            <div className="texto-inicio-container">
              <span className="bienvenido">Bienvenido a</span>
            </div>
            <div className="text-center texto-inicio-container">
              <div>
                <span className="titulo-color nombre-restaurante">
                  La Dolce Vita Ristorante
                </span>
              </div>
              <div className="d-container1">
                <span className="descripcion1">
                  Donde la calidad es nuestra mas grande prioridad
                </span>
              </div>
              <br></br>
              <div className="d-container2">
                <div className="descripcion-container">
                  <span className="descripcion2">
                    Asientos disponibles en el jardín trasero climatizado
                  </span>
                </div>
              </div>
            </div>
            <div className="btn-container text-center">
              <button className="btn btn-inicio">Descubre mas</button>
            </div>
          </div>
        </div>
      </div>
      <div id="acerca">
        <div className="limite">
          <div className="row sobre-nosotros-container">
            <div className="sobre-nosotros col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <div className="sobre-nosotros-text">
                <div className="fondo-sobre-nostros"></div>
                <div className="h1-sobre-nostros-container">
                  <hr></hr>
                  <h1 className="h1-sobre-nostros">Sobre nosotros</h1>
                </div>
                <p className="p-sobre-nostros">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  dolorum consequuntur aliquid distinctio aliquam quaerat ipsa
                  quam facilis quidem, laboriosam quod ipsum est hic voluptatem
                  illum rerum, explicabo mollitia asperiores.
                </p>
              </div>
            </div>
            <div className="spaguethi text-center col-sm-6 col-md-6 col-lg-6 col-xl-6">
              {/* <img className="img-spaguethi" src={img.spaguethi} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="img-fixed-container"></div>
      <div id="menu">
        <div className="limite">
          <div className="row menu-container">
            <div className="spaguethi text-center col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img className="img-spaguethi2" src={img.plato1} alt="" />
            </div>
            <div className="sobre-nosotros col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="sobre-nosotros-text">
                <div className="h1-sobre-nostros-container">
                  <hr style={{ position: "relative", zIndex: "3" }}></hr>
                  <div className="fondo-menu"></div>
                  <h1 className="h1-sobre-nostros">Visita nuestro menú</h1>
                </div>
                <p className="p-sobre-nostros">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  dolorum consequuntur aliquid distinctio aliquam quaerat ipsa
                  quam facilis quidem, laboriosam quod ipsum est hic voluptatem
                  illum rerum, explicabo mollitia asperiores.
                </p>
                <button className="btn btn-menu">Ir al menu</button>
              </div>
            </div>
          </div>
        </div>
        <div className="limite">
          <div className="dato-curioso-container px-4">
            <div className="dato-curioso">
              <div style={{ width: "40%" }}>
                <hr style={{ position: "relative", zIndex: "3" }}></hr>
                <div className="fondo-menu"></div>
                <h1 className="h1-sobre-nostros">Datos curiosos</h1>
              </div>
              <h3 className="h3-dato-curioso">
                Manejamos gran variedad de pastas y platillos
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                dolorum consequuntur aliquid distinctio aliquam quaerat ipsa
                quam facilis quidem, laboriosam quod ipsum est hic voluptatem
                illum rerum, explicabo mollitia asperiores. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Modi dolorum
                consequuntur aliquid distinctio aliquam quaerat ipsa quam
                facilis quidem, laboriosam quod ipsum est hic voluptatem illum
                rerum, explicabo mollitia asperiores.
              </p>
            </div>
            <div className="text-center mb-3">
              <div style={{ width: "100%" }}>
                <div className="sabias">
                  <hr style={{ position: "relative", zIndex: "3" }}></hr>
                  <div className="fondo-sabias"></div>
                  <h1 className="h1-sobre-nostros">Sabias que...</h1>
                </div>
              </div>
            </div>
            <div className="sabias-container row">
              <div className=" col-sm-6 col-md-4 text-center pastas-container mb-5">
                <img className="espaguitis" src={img.fetuchinni} alt="" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore nihil dignissimos, rem commodi molestias qui neque,
                  corrupti enim doloremque aliquid.
                </p>
              </div>
              <div className=" col-sm-6 col-md-4 text-center pastas-container mb-5">
                <img className="espaguitis" src={img.tubos} alt="" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore nihil dignissimos, rem commodi molestias qui neque,
                  corrupti enim doloremque aliquid.
                </p>
              </div>
              <div className=" col-sm-6 col-md-4 text-center pastas-container mb-5">
                <img className="espaguitis" src={img.mac} alt="" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore nihil dignissimos, rem commodi molestias qui neque,
                  corrupti enim doloremque aliquid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-fixed-container2"></div>
      </div>
      <div id="contacto">
        <div style={{ width: "100%" }}>
          <div className="sabias">
            <hr style={{ position: "relative", zIndex: "3" }}></hr>
            <div className="fondo-sabias"></div>
            <h1 className="h1-sobre-nostros">Contacto</h1>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}

export default App;
