import { defineStore } from "pinia";

export const useDialogoConfirmaStore=defineStore('DialogoConfirmaStore', () => {
    const visible = ref(false)
    const mensaje = ref('')
    let resolver = null
  
    const confirmar = () => {
      visible.value = false
      resolver?.(true)
    }
  
    const cancelar = () => {
      visible.value = false
      resolver?.(false)
    }
  
    const solicitarConfirmacion = async (msg) => {
      mensaje.value = msg
      visible.value = true
      return new Promise((resolve) => {
        resolver = resolve
      })
    }
  
    return {
      visible,
      mensaje,
      solicitarConfirmacion,
      confirmar,
      cancelar
    }
  })