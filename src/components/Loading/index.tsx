import React, { FC } from 'react'
import Image from '../Image'

import './loading.css'

const Loading: FC<{loading: boolean}> = ({ loading }) => {
  if (loading) {
    return (
      <div className='loading'>
        <Image src='images/spinner.gif' />
      </div>
    )  
  } else {
    return null
  }
}

export default Loading