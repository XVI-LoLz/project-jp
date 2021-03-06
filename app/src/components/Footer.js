/** @jsx jsx */
import { jsx } from "@emotion/core"
import { footer, Note } from "../styling"

import LolzSocial from "./LolzSocial"
import { ReactComponent as Logo } from "../utils/icons/logo.svg"

export default function Footer() {
  return (
    <div id="footer" css={footer}>
      <Note>
        La información que se encuentra en este sitio no es creada ni revisada
        por expertos, algunos elementos han sido traducidos de fuentes en
        inglés, por lo que puede o no resultar imprecisa. Lamento los
        inconvenientes que esto pueda provocar.
      </Note>
      <Note>
        Para comentarios sobre correcciones en la información, accesibilidad de
        la página, contribuciones u otros asuntos no dudes en contactarme.
      </Note>
      <LolzSocial />
      <Logo className="logo" />
    </div>
  )
}
