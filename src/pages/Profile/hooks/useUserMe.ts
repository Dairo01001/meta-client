import { useAppDispatch, useAppSelector } from '@/hooks'
import { createFullUser } from '@/redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../services'

export const useUserMe = () => {
  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()
  const fullUser = useAppSelector(state => state.fullUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getMe(user)
      .then(data => dispatch(createFullUser(data)))
      .catch(() => navigate('/'))
  }, [user])

  return { me: fullUser }
}
