/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import { jsx } from "@emotion/core"
import { PageStyled, H, K, Kj, R, Callout, Example, Note } from "../styling"

import Sidebar from "./Sidebar"
import CharAnimation from "./CharAnimation"
import CiteSource from "./CiteSource"
import Bibliography from "./Bibliography"
import useScrollOnLoad from "../hooks/useScrollOnLoad"
import RadicalsSubpage from "./RadicalsSubpage"

const KanjiSubpage = React.lazy(() => import("./KanjiSubpage"))

export default function KanjiPage() {
  const { url } = useRouteMatch()

  useScrollOnLoad()

  return (
    <PageStyled id="kanji-page">
      <Sidebar>
        <Route exact path={`${url}/`}>
          <Link to={`${url}/cartas`}>Cartas de kanji</Link>
          <Link to={`${url}/radicales`}>Cartas de radicales</Link>
        </Route>
      </Sidebar>

      <div className="main-content">
        <div className="content">
          <Route exact path={`${url}`}>
            <Content />
          </Route>
          <Route exact path={`${url}/cartas`}>
            <KanjiSubpage />
          </Route>
          <Route exact path={`${url}/radicales`}>
            <RadicalsSubpage />
          </Route>
          <Bibliography>
            <p>
              Las animaciones de trazado están basadas en datos proporcionados
              por <CiteSource source="kanjiVG" />
            </p>
            <p>
              Parte de la información encontrada esta página puede consultarse
              en las siguientes referencias:
            </p>
            <ul>
              <li>
                <CiteSource source="practicalKanji" />
              </li>
              <li>
                <CiteSource source="kanjiForBeginners" />
              </li>
              <li>
                <CiteSource source="guideToJapaneseKanji" />
              </li>
            </ul>
          </Bibliography>
        </div>
      </div>
    </PageStyled>
  )
}

function Content() {
  const { url } = useRouteMatch()

  return (
    <>
      <h1>Introducción</h1>
      <p>
        El sistema de escritura japonés hace uso extenso de los caracteres
        llamados <b>kanji</b>. Son caracteres que fueron creados en China hace
        más de 3,000 años. Fueron introducidos en Japón junto con el budismo en
        el siglo III. Antes de eso Japón no tenía un sistema de escritura.
      </p>
      <p>
        El hiragana y el katakana están basados en el kanji. Fueron
        desarrollados entre el siglo VIII y el siglo X con el propósito de hacer
        más rápida y fácil la escritura de palabras en japonés. Mientras que el
        hiragana es resultado de la simplificación de trazos usados en los
        kanji, el katakana surgió de tomar secciones particulares de los mismos.
      </p>
      <p>
        A diferencia del chino, los kanji japoneses usualmente tienen más de una
        pronunciación, la cual depende del contexto en el que se encuentre en
        una oración. Existen 2,136 kanjis de &quot;uso regular&quot;, los cuales
        son combinados para crear las decenas de miles de palabras del idioma
        japonés.
      </p>
      <Callout>
        Cada kanji posee su propia forma, sonido(s) y significado(s).
      </Callout>
      <h2>Radicales</h2>
      <p>
        Los kanji están compuestos de una serie de trazos predefinidos llamados{" "}
        <b>radicales</b>. En japonés cada uno de estos trazos tienen un nombre
        específico, aunque para su enseñanza en otro idioma suelen tener nombres
        arbitrarios para facilitar su memorización.
      </p>
      <Callout>
        Casi todos los kanji en realidad son una combinación de dos o más
        radicales.
      </Callout>
      <Note>
        <b>Aviso: </b>En el futuro se planea incluir una sección exclusiva para
        los radicales.
      </Note>
      <h2>Pronunciaciones</h2>
      <p>
        Hay dos formas básicas en las que los kanjis pueden ser leídos: la
        pronunciación <b>onyomi</b> o china, y la pronunciación <b>kunyomi</b> o
        japonesa.
      </p>
      <Example>
        <Kj>石</Kj> → onyomi: <K>セキ、シャク</K> <R>SEKI, SHAKU</R> kunyomi:{" "}
        <H>いし</H> <R>ishi</R>
      </Example>
      <p>
        En gran cantidad de diccionarios por convención se utiliza katakana o
        rōmaji en mayúsculas para indicar la pronunciación china y hiragana o
        rōmaji en minúsculas para indicar la pronunciación japonesa. En otro
        tipo de textos se utiliza exclusivamente el hiragana para indicar las
        pronunciaciones.
      </p>
      <Note>
        <b>Nota: </b>Dependiendo de la fuente que sea consultada se puede
        encontrar el mismo o un formato distinto.
      </Note>{" "}
      <h2>Furigana</h2>
      <p>
        Es el acompañamiento del hiragana para indicar la pronunciación de un
        kanji. Suelen ser utilizados cuando el kanji escrito es poco común. Los
        libros de texto para aprender japonés incluyen furigana con más
        frecuencia que cualquier otro tipo de textos.
      </p>
      <Example>
        <div style={{ display: "inline-block", verticalAlign: "bottom" }}>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                }}
              >
                たけ
              </span>
              <Kj>竹</Kj>
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <H>の</H>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                }}
              >
                こ
              </span>
              <Kj>子</Kj>
            </span>
          </span>
        </div>{" "}
        [brote de bambú]
      </Example>
      <h2>Okurigana</h2>
      <p>
        Es el uso de hiragana en combinación con el kanji para formar una
        palabra distinta. Usualmente son conjugaciones de verbos.
      </p>
      <Example>
        <Kj>勉強</Kj> [estudio] → <Kj>勉強</Kj>
        <H>しましょう</H> [estudiemos]
      </Example>
      <h2>Tipos de kanji</h2>
      <p>Los kanji japoneses pueden ser divididos en 4 tipos básicos:</p>
      <ul>
        <li>
          Pictogramas (imágenes de objetos):　
          <Example>
            <Kj>山</Kj> [montaña], <Kj>田</Kj> [campo de arroz], <Kj>川</Kj>{" "}
            [río]
          </Example>
        </li>
        <li>
          Ideogramas simples (imágenes de ideas):　
          <Example>
            <Kj>三</Kj> [tres], <Kj>上</Kj> [arriba], <Kj>中</Kj> [en medio]
          </Example>
        </li>
        <li>
          Ideogramas compuestos (varios pictogramas que forman uno solo):　
          <Example>
            <Kj>森</Kj> [bosque]: formado por tres <Kj>木</Kj> [árbol]
          </Example>
        </li>
        <li>
          Ideogramas de sonido (una combinación de caracteres: unos usados por
          su significado y otros por su sonido):　
          <Example>
            <Kj>語</Kj> <R>go</R> [lenguaje]: formado por <Kj>言</Kj> [palabra],{" "}
            <Kj>口</Kj> [boca] y <Kj>五</Kj> <R>go</R>
          </Example>
        </li>
      </ul>
      <Callout>
        Alrededor del 80% de los kanjis son ideogramas de sonido compuestos.
      </Callout>
      <h1>Escritura</h1>
      <p>
        En la lengua japonesa el orden, número y tipo de trazos utilizados al
        escribir un caracter tienen una gran importancia para la estética y
        correcta escritura del mismo.
      </p>
      <p>
        Existe una serie de reglas que nos ayudan a escribir correctamente los
        caracteres sin necesidad de estudiar cada uno de ellos, aunque no
        siempre se siguen las mismas reglas. Existen caracteres que pueden
        diferir en el orden de los trazos a pesar de que usen aparentemente la
        misma estructura que otros.
      </p>
      <Callout>
        La tipografía puede cambiar el aspecto de los trazos facilitando o
        complicando su lectura, incluyendo los escritos a mano.
      </Callout>
      <h2>Tipos de trazos</h2>
      <p>
        Hacen referencia al flujo que debe seguir la herramienta de escritura
        para lograr la fidelidad del trazo.
      </p>
      <ul>
        <li>Línea doblada</li>
        <div className="anim-example">
          <CharAnimation name="bent-line" isKanji={false} />
        </div>
        <li>Línea horizontal</li>
        <div className="anim-example">
          <CharAnimation name="horizontal-line+stop" isKanji={false} />
        </div>
        <li>Línea vertical + paro</li>
        <div className="anim-example">
          <CharAnimation name="vertical-line+stop" isKanji={false} />
        </div>
        <li>Línea vertical + giro hacia arriba</li>
        <div className="anim-example">
          <CharAnimation name="vertical-line+upward-turn" isKanji={false} />
        </div>
        <li>Línea doblada + trazo barrido</li>
        <div className="anim-example">
          <CharAnimation name="bent-line+sweep" isKanji={false} />
        </div>
        <li>Barrido a la izquierda</li>
        <div className="anim-example">
          <CharAnimation name="left-sweep" isKanji={false} />
        </div>
        <li>Barrido a la derecha</li>
        <div className="anim-example">
          <CharAnimation name="right-sweep" isKanji={false} />
        </div>
        <li>Punto</li>
        <div className="anim-example">
          <CharAnimation name="dot" isKanji={false} />
        </div>
        <li>Curva + giro hacia arriba</li>
        <div className="anim-example">
          <CharAnimation name="curve-upward" isKanji={false} />
        </div>
      </ul>
      <h2>Reglas generales</h2>
      <p>Hacen referencia al orden en que se deben realizar los trazos.</p>
      <ul>
        <li>Los trazos son escritos de izquierda a derecha.</li>
        <div className="anim-example">
          <CharAnimation name="5ddd" />
        </div>
        <li>Los trazos son escritos de arriba hacia abajo.</li>
        <div className="anim-example">
          <CharAnimation name="4e09" />
        </div>
        <li>
          Cuando una línea horizontal y una vertical se cruzan, la horizontal se
          dibuja primero.
        </li>
        <div className="anim-example">
          <CharAnimation name="5341" />
        </div>
        <li>
          Cuando una línea horizontal está unida a una vertical, la vertical se
          dibuja primero
        </li>
        <div className="anim-example">
          <CharAnimation name="4e0a" />
        </div>
        <li>
          Cuando hay un arreglo de tres trazos izquierda-en medio-derecha, el
          trazo central se dibuja primero si es el más largo.
        </li>
        <div className="anim-example">
          <CharAnimation name="5c0f" />
        </div>
        <li>
          Cuando las partes izquierda y derecha tienen trazos inclinados, la
          parte izquierda se dibuja primero.
        </li>
        <div className="anim-example">
          <CharAnimation name="4eba" />
        </div>
        <li>Cuando hay líneas exteriores, estas son dibujadas primero.</li>
        <div className="anim-example">
          <CharAnimation name="6708" />
        </div>
        <li>
          Cuando el centro de un kanji es rodeado por una caja, el centro es
          dibujado primero antes de la línea inferior de la caja.
        </li>
        <div className="anim-example">
          <CharAnimation name="7530" />
        </div>
        <li>Cuando una línea atraviesa el centro, es dibujada al final.</li>
        <div className="anim-example">
          <CharAnimation name="4e2d" />
        </div>
      </ul>
      <Note>
        <b>Nota: </b>Dependiendo de la referencia que se consulte se pueden
        encontrar más reglas o menos reglas.
      </Note>
      <Link className="link-to" to={`${url}/cartas`}>
        Ir a Cartas de kanji.
      </Link>
    </>
  )
}
