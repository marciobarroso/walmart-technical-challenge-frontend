import React, { FC } from 'react'

const Image : FC<{className?: string, alt?: string, src: string}> = ({className, alt, src}) => {
  return (
    <img className={className} alt={alt} src={src} />
  )
}

export default Image