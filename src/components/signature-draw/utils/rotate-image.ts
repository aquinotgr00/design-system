import loadImage from '../../avatar/utils/load-image'

/**
 * Rotate base64 image
 * @param url base64 url
 * @param degrees rotate degress
 */
export default async function rotateImage (url: string, degrees: number): Promise<string> {
  const canvas  = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const image   = await loadImage(url)

  canvas.width  = degrees % 180 === 0 ? image.width : image.height
  canvas.height = degrees % 180 === 0 ? image.height : image.width

  context.translate(canvas.width / 2, canvas.height / 2)
  context.rotate(degrees * Math.PI / 180)
  context.drawImage(image, image.width / -2, image.height / -2)

  return canvas.toDataURL()
}
