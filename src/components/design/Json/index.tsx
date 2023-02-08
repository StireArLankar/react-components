import { useMemo } from 'react'

import clsx from 'clsx'

import classes from './_classes.css'

type Theme = Partial<typeof classes>

type IProps = {
  json: object
  space?: number
  theme?: Theme
}

export default (props: IProps) => {
  const { json, space = 2, theme = {} } = props

  const __html = useMemo(() => {
    return convertJsonToHMTL(json, space, theme)
  }, [json, space, theme])

  return (
    <div>
      <pre
        className={clsx(classes.main, theme.main)}
        dangerouslySetInnerHTML={{ __html }}
      />
    </div>
  )
}

const convertJsonToHMTL = (obj: object, space: number, theme: Theme) => {
  const regLine =
    /^( *)("[^"]+": )?(".*"|"[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/gm

  const text = JSON.stringify(obj, null, space)

  if (!text) {
    return text
  }

  return text
    .replace(/&/g, '&amp;')
    .replace(/\\"([^,])/g, '\\&quot;$1')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(regLine, (_, ...args) =>
      replaceCapturedStringWithHtml(theme, ...args)
    )
}

const replaceCapturedStringWithHtml = (theme: Theme, ...args: string[]) => {
  const [ind = '', key, val, tra = ''] = args

  const spanEnd = '</span>'
  const keySpan = `<span class="${clsx(classes.key, theme.key)}">`
  const valSpan = `<span class="${clsx(classes.value, theme.value)}">`
  const strSpan = `<span class="${clsx(classes.string, theme.string)}">`
  const booSpan = `<span class="${clsx(classes.boolean, theme.boolean)}">`

  let sps = ind

  if (key) {
    sps = `${sps}"${keySpan}${key.replace(/^"|":\s$/g, '')}${spanEnd}": `
  }

  if (val) {
    if (val === 'true' || val === 'false') {
      sps = sps + booSpan + val + spanEnd
    } else {
      sps = sps + (val[0] === '"' ? strSpan : valSpan) + val + spanEnd
    }
  }

  return sps + tra
}
