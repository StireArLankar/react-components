import * as React from 'react'

interface ITheme {
  [key: string]: string
}

interface IProps extends React.HTMLAttributes<HTMLElement> {
  json?: any
  data?: any
  space?: number | string
  themeClassName?: string
  theme?: ITheme
  silent?: boolean
  onJSONPrettyError?: (e: Error) => void
  mainStyle?: string
  keyStyle?: string
  stringStyle?: string
  valueStyle?: string
  booleanStyle?: string
  errorStyle?: string
}

type kees = 'main' | 'key' | 'string' | 'value' | 'boolean' | 'error'

type Styles = {
  [K in kees as `${K}Style`]?: string
}

const getStyleValue = (name: kees, theme: ITheme, styles: Styles): string => {
  const _kee = `${name}Style` as const
  const extra = styles[_kee] || ''
  const style = theme ? theme[name] || '' : ''
  return extra ? `${extra};${style}` : style
}

const getStyle = (name: kees, theme: ITheme, styles: Styles): string => {
  const value = getStyleValue(name, theme, styles)
  return value ? ` style="${value}"` : ''
}

const defaultTheme = {
  main: 'line-height:1.3;color:#66d9ef;background:#272822;width:max-content;margin: 0',
  error:
    'line-height:1.3;color:#66d9ef;background:#272822;width:max-content;margin: 0',
  key: 'color:#f92672;',
  string: 'color:#fd971f;',
  value: 'color:#a6e22e;',
  boolean: 'color:#ac81fe;',
}

const xssmap: { [key: string]: string } = {
  '"': '&quot;',
  "'": '&apos;',
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt',
  ',': '&sbquo;',
}

const xss = (s: string): string =>
  Boolean(s) ? s.replace(/<|>|&|"|'/g, (m) => xssmap[m]) : s

export class JSONPretty extends React.Component<IProps, {}> {
  public render() {
    const {
      json = '',
      data = '',
      space = 2,
      themeClassName = '__json-pretty__',
      theme = defaultTheme,
      onJSONPrettyError,
      onError,
      silent = true,
      mainStyle,
      keyStyle,
      valueStyle,
      stringStyle,
      booleanStyle,
      errorStyle,
      ...rest
    } = this.props

    const styles = {
      mainStyle,
      keyStyle,
      valueStyle,
      stringStyle,
      booleanStyle,
      errorStyle,
    }

    let obj = data || json

    // See https://facebook.github.io/react/warnings/unknown-prop.html
    if (typeof obj === 'string') {
      try {
        obj = JSON.parse(obj)
      } catch (e: any) {
        if (!silent) {
          console.warn(`[react-json-pretty]: ${e.message}`)
        }

        if (onJSONPrettyError) {
          onJSONPrettyError(e)
        }

        if (!onJSONPrettyError && onError) {
          onError(e)
          console.warn(
            'JSONPretty#onError is deprecated, please use JSONPretty#onJSONPrettyError instead'
          )
        }

        return (
          <div
            {...rest}
            dangerouslySetInnerHTML={{
              __html: `<pre class="__json-pretty-error__"${getStyle(
                'error',
                theme,
                styles
              )}>${xss(obj)}</pre>`,
            }}
          />
        )
      }
    }

    return (
      <div
        {...rest}
        dangerouslySetInnerHTML={{
          __html: `<pre class="${themeClassName}"${getStyle(
            'main',
            theme,
            styles
          )}>${this._pretty(theme, obj, +space, styles)}</pre>`,
        }}
      />
    )
  }

  private _pretty(theme: ITheme, obj: any, space: number, styles: any) {
    const regLine =
      /^( *)("[^"]+": )?(".*"|"[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/gm

    const text = JSON.stringify(obj, null, isNaN(space) ? 2 : space)

    if (!text) {
      return text
    }

    return text
      .replace(/&/g, '&amp;')
      .replace(/\\"([^,])/g, '\\&quot;$1')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(regLine, this._replace.bind(null, theme, styles))
  }

  private _replace(
    theme: ITheme,
    styles: any,
    match: any,
    ind: string,
    key: string,
    val: string,
    tra: string
  ) {
    const spanEnd = '</span>'
    const keySpan = `<span class="__json-key__"${getStyle(
      'key',
      theme,
      styles
    )}>`
    const valSpan = `<span class="__json-value__"${getStyle(
      'value',
      theme,
      styles
    )}>`
    const strSpan = `<span class="__json-string__"${getStyle(
      'string',
      theme,
      styles
    )}>`
    const booSpan = `<span class="__json-boolean__"${getStyle(
      'boolean',
      theme,
      styles
    )}>`

    let sps = ind || ''

    if (key) {
      sps = sps + '"' + keySpan + key.replace(/^"|":\s$/g, '') + spanEnd + '": '
    }

    if (val) {
      if (val === 'true' || val === 'false') {
        sps = sps + booSpan + val + spanEnd
      } else {
        sps = sps + (val[0] === '"' ? strSpan : valSpan) + val + spanEnd
      }
    }

    return sps + (tra || '')
  }
}
