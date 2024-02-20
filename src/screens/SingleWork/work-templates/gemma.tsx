import { FC } from 'react'
import { CustomImage } from '@/components/ui'
import { classNames } from '@/shared/libs/classNames'
import { imgPath } from '@/shared/libs/helper'
import s from './work-templates.module.scss'

const GemmaTemplate: FC = () => {
  return (
    <>
      <CustomImage
        className={classNames(s.image, s.left)}
        src={imgPath('gemma/home.webp')}
        width={1020}
        height={1020 / 0.43}
        dataScrollSpeed='1'
        alt='Gemma Home'
      />

      <div className={s.row}>
        <div className={s.col}>
          <CustomImage
            className={classNames(s.image, s.left)}
            src={imgPath('gemma/catalog.webp')}
            width={1020}
            height={1020 / 1.25}
            dataScrollSpeed='1'
            alt='Gemma Catalog'
          />
          <CustomImage
            className={classNames(s.image, s.right)}
            src={imgPath('gemma/cart.webp')}
            width={1020}
            height={1020 / 1.97}
            dataScrollSpeed='2'
            alt='Gemma Cart'
          />
          <CustomImage
            className={classNames(s.image, s.right)}
            src={imgPath('gemma/register.webp')}
            width={1020}
            height={1020 / 1.91}
            dataScrollSpeed='2'
            alt='Gemma Register'
          />
        </div>
        <div className={s.col}>
          <CustomImage
            className={classNames(s.image, s.right)}
            src={imgPath('gemma/partners.webp')}
            width={1020}
            height={1020 / 0.41}
            dataScrollSpeed='1'
            alt='Gemma Partners'
          />
        </div>
      </div>

      <div className={s.row}>
        <div className={s.col}>
          <CustomImage
            className={classNames(s.image, s.left)}
            src={imgPath('gemma/single-product.webp')}
            width={1020}
            height={1020 / 0.76}
            dataScrollSpeed='2'
            alt='Gemma Single Product'
          />
        </div>
        <div className={s.col}>
          <CustomImage
            className={classNames(s.image, s.right)}
            src={imgPath('gemma/single-product-reviews.webp')}
            width={1020}
            height={1020 / 1.31}
            dataScrollSpeed='1'
            alt='Gemma Single Product Reviews'
          />
          <CustomImage
            className={classNames(s.image, s.left)}
            src={imgPath('gemma/single-product-details.webp')}
            width={1020}
            height={1020 / 1.31}
            dataScrollSpeed='1'
            alt='Gemma Single Product Details'
          />
        </div>
      </div>
    </>
  )
}

export default GemmaTemplate
