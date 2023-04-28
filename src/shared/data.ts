import { ILinks, ISkill, IWork } from './types'

export const links: ILinks = {
  'maxim-zasss@yandex.ru': 'mailto:maxim-zasss@yandex.ru',
  'GitHub': 'https://github.com/maximzassdeveloper',
  'Freelance': 'https://freelance.ru/maximzass',
  'LinkedIn': 'https://www.linkedin.com/in/maxim-zass-4b4949263/',
}

export const skills: ISkill[] = [
  {
    title: 'Основное',
    list: `TypeScript, React, Redux, Redux Toolkit, Next.js, Node.js, React Testing Library, Loki, Storybook, Jest, HTML, CSS, SCSS`,
  },
  {
    title: 'Сборка',
    list: `Webpack, Vite, Git, Eslint, Prettier`,
  },
  {
    title: 'Дополнительно',
    list: `GSAP, Three.js, WordPress`,
  },
]

export const works: IWork[] = [
  {
    id: 1,
    slug: 'ramp',
    name: 'Ramp',
    desc: 'Стриминговый сервис фильмов и сериалов.',
    preview: 'ramp/single.webp',
    color: '#C63636',
    role: ['Дизайн', 'Фронтенд'],
    stack: ['TypeScript', 'React'],
    links: {
      GitHub: 'https://github.com/maximzassdeveloper/ramp',
    },
  },
  {
    id: 2,
    slug: 'gemma-russia',
    name: 'Gemma Russia',
    desc: 'Интернет-магазин корейской продукции премиум-класса в России.',
    preview: 'gemma/preview.webp',
    color: '#6A4242',
    role: ['Дизайн', 'Фронтенд', 'Бэкенд'],
    stack: ['TypeScript', 'Next.js', 'Node.js', 'PosgreSQL'],
  },
  {
    id: 3,
    slug: 'business-course',
    name: 'Сайт бизнес-курса',
    desc: 'Бизнес-курс “Искусство личных продаж МЛМ-предпринимателя 2022”.',
    preview: 'business-course/preview.webp',
    color: 'radial-gradient(#FFA53C, #FF3C3C)',
    role: ['Дизайн', 'Разработка'],
  },
]
