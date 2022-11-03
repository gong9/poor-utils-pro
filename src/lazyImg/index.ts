/**
 * lazyImg
 * @param imageAttribute
 * @param imageAttributeKey
 * @returns
 */
const lazyImg = (imageAttribute: string, imageAttributeKey: string) => {
  const loadImage = (target: HTMLImageElement) => {
    const realSrc = target.dataset[imageAttributeKey] ?? ''
    target.src = realSrc
  }

  const generateObserver = () => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0)
            loadImage(entry.target as HTMLImageElement)
        })
      },
    )
  }

  const images = document.querySelectorAll(imageAttribute)

  if (!window.IntersectionObserver) {
    images.forEach(image => loadImage(image as HTMLImageElement))
  }
  else {
    const observer = generateObserver()
    images.forEach(image => observer.observe(image))

    return () => {
      images.forEach(image => observer.unobserve(image))
    }
  }
}

export default lazyImg
