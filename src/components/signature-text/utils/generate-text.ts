import loadFont from './load-font'

export interface GenerateOptions {
  text: string,
  font: string,
  width: number,
  height: number,
  color: string,
}

function createCanvas (width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')

  canvas.width  = width
  canvas.height = height

  return canvas
}

export default async function generate (options: GenerateOptions): Promise<string> {
  await loadFont(options.font)

  const text    = options.text
  const width   = options.width
  const height  = options.height
  const color   = options.color
  const font    = options.font
  const canvas  = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.fillStyle    = color
  context.font         = `100px ${font}`
  context.textBaseline = 'middle'

  let size    = 100
  let measure = context.measureText(text)

  if (measure.width > width) {
    size         = Math.floor((size / measure.width) * (width - 16))
    context.font = `${size}px ${font}`
    measure      = context.measureText(text)
  } else if (size >= height) {
    size         = height - 16
    context.font = `${size}px ${font}`
    measure      = context.measureText(text)
  }

  context.fillText(text, (width - measure.width) / 2, (height / 2) + 16)

  return canvas.toDataURL()
}