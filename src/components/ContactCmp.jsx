import ContactLogo from "../components/ContactLogo";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from 'sweetalert'
import AOS from "aos";
import {useEffect} from 'react'

function ContactCmp() {

  useEffect(()=>{
    AOS.init({duration:1000});
  })
  
  const form = useRef();
  const nameref = useRef();
  const emailref = useRef();
  const mensajeref = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4tktwpd",
        "template_i69w669",
        form.current,
        "sCKJ0Wt3SG_C7NQwP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          nameref.current.value="";
          emailref.current.value="";
          mensajeref.current.value="";
          swal({
            text:"Mensaje enviado exitosamente, gracias por contactarnos!",
            icon:"success",
            button:"Aceptar"
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container row p-5  rounded-3">
      <div data-aos="fade-up" className="col-md-7 p-2">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group py-2">
            {/* <label htmlFor="exampleFormControlInput1">Nombre</label> */}
            <h1 className="display-6 text-body-emphasis lh-1 mb-3 py-3">
              Nos gustaría escucharte, escríbenos!
            </h1>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Nombre"
              ref={nameref}
            ></input>
          </div>

          <div className="form-group py-2">
            {/* <label htmlFor="email">Correo electronico</label> */}
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Correo electrónico"
              ref={emailref}
            />
          </div>

          <div className="form-group py-3">
            {/* <label htmlFor="mensaje">Mensaje</label> */}
            <textarea
              className="form-control"
              rows="8"
              name="message"
              placeholder="Mensaje"
              ref={mensajeref}
            ></textarea>
          </div>

          <div className="form-group py-3">
            <button type="submit" value="send" className="btn btn-dark btn-lg">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
      {/* col-md-5 p-3 */}
      <div data-aos="fade-up" className="col-5 col-sm-5 col-lg-5 py-5">
        {/* <p className="display-2 text-center">Nos gustaria escucharte</p> */}
        <svg width={500} height={300}>
          <ContactLogo />
        </svg>
      </div>
    </div>
  );
}

export default ContactCmp;
