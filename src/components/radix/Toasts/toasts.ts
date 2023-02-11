import { proxy } from 'valtio'

type ToastType = 'success' | 'error' | 'info'
export type ToastItem = {
  type: ToastType
  id: string
  message: string
}

export const state = proxy({ notifications: [] as ToastItem[] })

// function to add toast to notification list
export const addToast = (type: ToastType, message: string) => {
  state.notifications.push({ type, message, id: Math.random().toString() })
}

// function to remove item from notification list
export const removeToast = (id: string) => {
  state.notifications = state.notifications.filter((item) => item.id !== id)
}
