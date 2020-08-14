export const grammaticalTypes = {
  es: {
    adj: "adjetivo",
    adv: "adverbio",
    art: "artículo",
    aux: "verbo auxiliar",
    conj: "conjunción",
    interj: "interjección",
    n: "sustantivo",
    parti: "partícula",
    prep: "preposición",
    pron: "pronombre",
    vb: "verbo",
  },
  en: {
    adj: "adjective",
    adv: "adverb",
    art: "article",
    aux: "auxiliary verb",
    conj: "conjunction",
    interj: "interjection",
    n: "noun",
    parti: "particle",
    prep: "preposition",
    pron: "pronoun",
    vb: "verb",
  },
}

export const generateGridAreas = (rows, columns) => {
  let areas = []
  for (let i = 0; i < columns; i++) {
    let row = []
    for (let j = 0; j < rows; j++) {
      row.push(`x${j}-y${i}`)
    }
    areas.push("'" + row.join(" ") + "'")
  }
  return areas.join(" ")
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const scrollTo = (elementId) => {
  const element = document.getElementById(`${elementId}`)
  if (element !== null) {
    window.scrollTo({
      top: element.offsetTop - 60,
    })
  }
}

export const kanaOrKanji = (char) => {
  const hiragana = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "ざ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
    "きゃ",
    "きゅ",
    "きょ",
    "しゃ",
    "しゅ",
    "しょ",
    "ちゃ",
    "ちゅ",
    "ちょ",
    "にゃ",
    "にゅ",
    "にょ",
    "ひゃ",
    "ひゅ",
    "ひょ",
    "みゃ",
    "みゅ",
    "みょ",
    "りゃ",
    "りゅ",
    "りょ",
    "ぎゃ",
    "ぎゅ",
    "ぎょ",
    "じゃ",
    "じゅ",
    "じょ",
    "ぢゃ",
    "ぢゅ",
    "ぢょ",
    "びゃ",
    "びゅ",
    "びょ",
    "ぴゃ",
    "ぴゅ",
    "ぴょ",
  ]
  const katakana = [
    "ア",
    "イ",
    "ウ",
    "エ",
    "オ",
    "カ",
    "キ",
    "ク",
    "ケ",
    "コ",
    "サ",
    "シ",
    "ス",
    "セ",
    "ソ",
    "タ",
    "チ",
    "ツ",
    "テ",
    "ト",
    "ナ",
    "ニ",
    "ヌ",
    "ネ",
    "ノ",
    "ハ",
    "ヒ",
    "フ",
    "ヘ",
    "ホ",
    "マ",
    "ミ",
    "ム",
    "メ",
    "モ",
    "ヤ",
    "ユ",
    "ヨ",
    "ラ",
    "リ",
    "ル",
    "レ",
    "ロ",
    "ワ",
    "ヲ",
    "ン",
    "ガ",
    "ギ",
    "グ",
    "ゲ",
    "ゴ",
    "ザ",
    "ジ",
    "ズ",
    "ゼ",
    "ゾ",
    "ダ",
    "ヂ",
    "ヅ",
    "デ",
    "ド",
    "バ",
    "ビ",
    "ブ",
    "ベ",
    "ボ",
    "パ",
    "ピ",
    "プ",
    "ペ",
    "ポ",
    "キャ",
    "キュ",
    "キョ",
    "シャ",
    "シュ",
    "ショ",
    "チャ",
    "チュ",
    "チョ",
    "ニャ",
    "ニュ",
    "ニョ",
    "ヒャ",
    "ヒュ",
    "ヒョ",
    "ミャ",
    "ミュ",
    "ミョ",
    "リャ",
    "リュ",
    "リョ",
    "ギャ",
    "ギュ",
    "ギョ",
    "ジャ",
    "ジュ",
    "ジョ",
    "ヂャ",
    "ヂュ",
    "ヂョ",
    "ビャ",
    "ビュ",
    "ビョ",
    "ピャ",
    "ピュ",
    "ピョ",
    "イェ",
    "ウィ",
    "ウェ",
    "ウォ",
    "ヴァ",
    "ヴィ",
    "ヴ",
    "ヴェ",
    "ヴォ",
    "シェ",
    "ジェ",
    "チェ",
    "ティ",
    "トゥ",
    "ディ",
    "ドゥ",
    "ツァ",
    "ツィ",
    "ツェ",
    "ツォ",
    "ファ",
    "フィ",
    "フェ",
    "フォ",
    "ヴャ",
    "ヴュ",
    "ヴョ",
    "フュ",
  ]
  if (hiragana.some((e) => e === char)) return "hiragana"
  if (katakana.some((e) => e === char)) return "katakana"
  return "kanji"
}

export const noOp = () => {}

//https://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
export const slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
  var to = "aaaaaeeeeeiiiiooooouuuunc------"
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes

  return str
}
