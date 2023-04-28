import { gsap, Expo } from 'gsap'
import styles from './header.module.scss'

export const headerAnimations = () => {
  const animations = {
    logo() {
      gsap.to(`.${styles.logo}`, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        ease: Expo.easeIn,
      })
    },
    navLinks() {
      gsap.to(`.${styles.menu} li a span`, {
        duration: 0.2,
        y: 0,
        delay: 0.1,
        ease: Expo.easeIn,
        stagger: 0.1,
      })
    },
    button() {
      gsap.to(`.${styles.button}`, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        delay: 0.4,
        ease: Expo.easeIn,
      })
    },
    burger() {
      const $burger = document.querySelector(`.${styles.burger}`)
      gsap.to($burger, {
        duration: 0.3,
        delay: 0.2,
        onStart: () => $burger?.classList.add(styles.animated),
      })
    },

    // Mobile menu animations
    openMobileMenu() {
      gsap.to(`.${styles.mobile}`, {
        duration: 0.2,
        x: 0,
        ease: Expo.easeIn,
      })
      gsap.to(`.${styles.mobile} li a`, {
        duration: 0.2,
        y: 0,
        delay: 0.2,
        ease: Expo.easeIn,
        stagger: 0.1,
      })
      gsap.to(`.${styles.mobile} .${styles.button}`, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        delay: 0.6,
        ease: Expo.easeIn,
      })
      const $burger = document.querySelector(`.${styles.burger}`)
      gsap.to($burger, {
        onStart: () => $burger?.classList.add(styles.close),
      })
    },
    closeMobileMenu() {
      gsap.to(`.${styles.mobile}`, {
        duration: 0.2,
        delay: 0.4,
        x: '100%',
        ease: Expo.easeIn,
      })
      gsap.to(`.${styles.mobile} li a`, {
        duration: 0.2,
        y: '100%',
        ease: Expo.easeIn,
        stagger: 0.1,
      })
      gsap.to(`.${styles.mobile} .${styles.button}`, {
        duration: 0.3,
        y: 10,
        opacity: 0,
        ease: Expo.easeIn,
      })
      const $burger = document.querySelector(`.${styles.burger}`)
      gsap.to($burger, {
        onStart: () => $burger?.classList.remove(styles.close),
      })
    },
  }

  return animations
}
