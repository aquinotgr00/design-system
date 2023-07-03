import { useSingleton } from '../global/use-singleton'

export type ToastTypeVariant = 'info' | 'success' | 'warning' | 'error'

export type ToastStyleVariant = 'simple' | 'filled'

export interface ToastOption {
  type?: ToastTypeVariant,
  variant?: ToastStyleVariant,
  title: string,
  text: string,
  duration?: number,
  toastClass?: string | string[],
}

export type ToastPositionVariant = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export default async function showToast (option: ToastOption) {
  const { default: ToastContainer } = await import('./ToastContainer.vue')
  const toast                       = await useSingleton(ToastContainer)

  toast.add(option)
}
