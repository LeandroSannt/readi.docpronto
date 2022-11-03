import React, { ReactElement } from 'react'

import Button from '../../components/Button'
import { Container } from './styles'

interface SubHeaderProps{
  buttonProps:{
    text:string
    path:string
    icon:ReactElement
  }
}

const SubHeader:React.FC<SubHeaderProps> = ({buttonProps}) =>{
  const {icon,path,text} = buttonProps

  return(
    <Container>
      <img src="https://readi.com.br/_next/image?url=%2FlandingPageImages%2Fheader%2FLogo.svg&w=1920&q=75" alt="" />
      <Button icon={icon} path={path} text={text} />
    </Container>
  )
}
export default SubHeader