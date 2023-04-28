import { FC } from 'react'
import { CustomImage } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import { imgPath } from '@/shared/libs/helper'
import s from './work-templates.module.scss'

const RampTemplate: FC = () => {
  return (
    <>
      <CustomImage
        className={classNames(s.image, s.center)}
        src={imgPath('ramp/ramp-single.webp')}
        width={1020}
        height={1020 / 2.1}
        dataScrollSpeed='2'
        alt='Ramp Single Page Preview'
      />

      <CustomImage
        className={classNames(s.image, s.left)}
        src={imgPath('ramp/single.webp')}
        width={1020}
        height={1020 / 2.1}
        dataScrollSpeed='1'
        alt='Ramp Single Page'
      />

      <CustomImage
        className={classNames(s.image, s.right)}
        src={imgPath('ramp/single-episodes.webp')}
        width={1020}
        height={1020 / 2.1}
        dataScrollSpeed='2'
        alt='Ramp Single Episodes'
      />

      <CustomImage
        className={classNames(s.image, s.left)}
        src={imgPath('ramp/single-details.webp')}
        width={1020}
        height={1020 / 2.1}
        dataScrollSpeed='2'
        alt='Ramp Single Details'
      />

      <CustomImage
        className={classNames(s.image, s.center)}
        src={imgPath('ramp/player.webp')}
        width={1020}
        height={1020 / 2.1}
        dataScrollSpeed='1'
        alt='Ramp Single Player'
      />
    </>
  )
}

export default RampTemplate
