interface Attributes {
  [key: string]: any
}

interface List {
  [key: string]: string
}

interface Cookie {
  get: (name?: string | undefined) => string | object | undefined
  set: (name: string, value: string, attributes: Attributes) => void
  read: (v: string) => string
  write: (v: string) => string
  remove: (name: string, attributes?: Attributes) => void
}

class Cookies implements Cookie {
  public defaultAttributes = {
    path: '/'
  }
  constructor(baseConfig: Attributes) {
    this.defaultAttributes = Object.assign(this.defaultAttributes, baseConfig)
  }
  read(value: string) {
    if (value[0] === '"') {
      value = value.slice(1, -1)
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  }
  write(value: string) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
  get(name?: string | undefined) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }
    var cookies = document.cookie ? document.cookie.split('; ') : []
    var list: List = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=')
      var value = parts.slice(1).join('=')
      try {
        var found = decodeURIComponent(parts[0])
        list[found] = this.read(value)

        if (name === found) {
          break
        }
      } catch (e) { }
    }

    return name ? list[name] : list
  }
  set(name: string, value: string, attributes: Attributes) {
    if (typeof document === 'undefined') {
      return
    }
    attributes = Object.assign({}, this.defaultAttributes, attributes)

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5)
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString()
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape)

    var stringifiedAttributes = ''
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName

      if (attributes[attributeName] === true) {
        continue
      }

      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
    }

    return (document.cookie =
      name + '=' + this.write(value) + stringifiedAttributes)
  }
  remove(name: string, attributes?: Attributes) {
    this.set(
      name,
      '',
      Object.assign({}, attributes, {
        expires: -1
      })
    )
  }
}

export default Cookies;