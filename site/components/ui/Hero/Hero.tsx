import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
      <Container>
        <div className={s.root}>
          <h2 className={s.title}>{headline}</h2>
        </div>
      </Container>
  )
}

export default Hero
