import { ISignInFx, ISignUpFx } from '@/types/auth'
import { createEffect } from 'effector-next'
import { toast } from 'react-toastify'
import api from '../axiosClient'

export const signUpFx = createEffect(
  async ({ url, username, password, email }: ISignUpFx) => {
    const { data } = await api.post(url, { username, password, email })

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }

    toast.success('Регистрация прошла успешно')
    return data
  }
)

export const signInFx = createEffect(
  async ({ url, username, password }: ISignInFx) => {
    const { data } = await api.post(url, { username, password })

    toast.success('Вход выполнен')
    return data
  }
)
