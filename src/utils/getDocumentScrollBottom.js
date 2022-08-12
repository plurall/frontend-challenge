/**
 * Gets the offset between the current scroll position and the
 * bottom of the document (<html> element)
 * @returns returns an number representing the offset in pixels
 */

const getDocumentScrollBottom = () => {
  const html = document.documentElement
  return html.scrollHeight - html.scrollTop - window.innerHeight
}

export { getDocumentScrollBottom }
