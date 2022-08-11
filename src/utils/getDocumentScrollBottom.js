const getDocumentScrollBottom = () => {
  const html = document.documentElement
  return html.scrollHeight - html.scrollTop - window.innerHeight
}

export { getDocumentScrollBottom }
