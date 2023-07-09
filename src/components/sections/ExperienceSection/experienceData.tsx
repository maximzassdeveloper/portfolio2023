import { ReactNode } from 'react'

export interface IExperience {
  name: string
  date: string
  position: string
  desc: ReactNode
}

export const blocks: IExperience[] = [
  {
    name: 'Osmi cards',
    date: 'Сентябрь 2022 - настоящее время',
    position: 'Frontend-разработчик',
    desc: (
      <>
        <p>
          Разработал веб-приложение конструктора сценариев под 1С (похоже на сценарии в mindbox):
        </p>
        <ul>
          <li>Древовидную фильтрация со множеством параметров</li>
          <li>Совместимость с браузерами вплоть до Safari 11</li>
          <li>Настроил сборку и выстроил архитектуру проекта</li>
        </ul>
        <p>Стек: React, TypeScript, Vite, Zustand, React Flow</p>
        <br />
        <p>Поддержка админ-панели:</p>
        <ul>
          <li>Разработал универсальный drag-and-drop компонент с множеством условий</li>
          <li>Переписывание старых и создание новых компонентов/страниц, исправление багов</li>
        </ul>
        <p>Стек: React, TypeScript, Redux, React Query, Nx</p>
      </>
    ),
  },
  {
    name: 'Gemma Cosmetics',
    date: 'Апрель 2022 - Август 2022',
    position: 'Fullstack-разработчик',
    desc: (
      <>
        <p>Разработал клиентскую и серверную части для интернет-магазина корейской косметики:</p>
        <ul>
          <li>Настроил CI/CD с Docker, Nginx</li>
          <li>Сделал авторизацию с 2-мя JWT-токенами</li>
        </ul>
        <p>Стек на клиенте: Next.js, TypeScript, Redux, Docker</p>
        <p>Стек на сервере: Express, TypeScript, PostgreSQL, Docker</p>
      </>
    ),
  },
  {
    name: 'Фриланс',
    date: 'Июль 2021 - Март 2022',
    position: 'Frontend-разработчик',
    desc: (
      <>
        <ul>
          <li>Разработка/Поддержка веб-приложений</li>
          <li>Создание универсальных компонентов</li>
        </ul>
        <p>Стек: React, TypeScript, Redux</p>
      </>
    ),
  },
  {
    name: 'Фриланс',
    date: 'Август 2019 - Май 2021',
    position: 'WordPress-разработчик',
    desc: (
      <>
        <ul>
          <li>
            Разработка сайтов на WordPress (Итернет-магазины, корпоративные сайта, лендинги,
            LMS-системы)
          </li>
          <li>Адаптивная, кроссбраузерная вёрстка</li>
        </ul>
        <p>Стек: WordPress, HTML, SCSS, CSS, JQuery</p>
      </>
    ),
  },
]
