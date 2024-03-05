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
        <p>Разработал веб-приложение платформы автоматизации маркетинга под 1С:</p>
        <ul>
          <li>Настроил сборку и выстроил архитектуру проекта</li>
          <li>Подключил конструктор email-шаблонов</li>
          <li>Сделал конструктор (в виде узлов) сценариев с настройками</li>
          <li>Разработал древовидный фильтр со множеством динамических настроек</li>
        </ul>
        <p>Стек: React, TypeScript, Vite, Zustand, React Flow</p>
        <br />
        <p>Поддержка админ-панели:</p>
        <ul>
          <li>Создание отдельных админ-панелей под клиентов</li>
          <li>Переписывание старых и создание новых компонентов/страниц, исправление багов</li>
        </ul>
        <p>Стек: React, TypeScript, Redux, React Query, Nx</p>
      </>
    ),
  },
  {
    name: 'Фриланс',
    date: 'Июль 2021 - Июль 2022',
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
