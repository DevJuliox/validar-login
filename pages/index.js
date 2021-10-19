
import LoginCss from '../styles/Home.module.css'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useState } from 'react'



export default function Login() {

  const [user, setUser] = useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = evento => {
    console.log(evento);

    setTimeout(() => {
      if (evento.password === "123456") {
        setUser(evento)
      } else {
        setUser(null)
      }
    }, 4000);
  }

  return (
    <>
      <div className={LoginCss.contenedor}>

        <div className={LoginCss.container} id="container">
          <div className={LoginCss.loginCentrado}>
            <div className="logo">

            </div>
            <h1>Inicia Sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className={`${LoginCss.inputBonito} ${errors.email && LoginCss.error}`}>
                <label className={LoginCss.labelName} className={LoginCss.textoInput}>
                  <span className={LoginCss.contentName}>
                    Correo
                  </span>
                </label>
                <input type="text" autoComplete="off" name="email" placeholder="ejemplo@gmail.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Necesitas este campo"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto"
                    }
                  })}
                />
                {errors.email && <span className={errors.email && LoginCss.mensajeError}>{errors.email.message}</span>}
              </div>
              <div className={`${LoginCss.inputBonito}  ${errors.password && LoginCss.error}`}>
                <label className={LoginCss.labelName} className={LoginCss.textoInput}>
                  <span className={LoginCss.contentName}>
                    Contraseña
                  </span>
                </label>
                <input type="password" name="password" placeholder="Contraseña"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres"
                    }
                  })}

                />
                {errors.password && <span className={errors.password && LoginCss.mensajeError}>{errors.password.message}</span>}
              </div>
              {/* <div className="aks-input-wrap">
                <input autoComplete="off" className="aks-input" type="checkbox" id="checkbox" name="checkbox" ref={register({ required: false })} />
                <label className="aks-input-label"  >Recordarme por 30 días</label>
            </div> */}

              <button type="submit" value="submit" className={`${LoginCss.btn}`} > Iniciar Sesión</button>

              {!user && <div>Contraseña incorrecta</div>}

            </form>


            <div className="border"></div>
            <p>¿Aún no tienes cuenta?</p>
            <Link href="/registro" as="/registro">
              <a >
                ¡Registrate!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
