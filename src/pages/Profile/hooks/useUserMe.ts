import { useAppDispatch, useAppSelector } from '@/hooks'
import { createFullUser } from '@/redux'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../services'

export const useUserMe = () => {
  const [cookie] = useCookies(['user'])
  const navigate = useNavigate()
  const fullUser = useAppSelector(state => state.fullUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getMe(cookie.user)
      .then(data => dispatch(createFullUser(data)))
      .catch(() => navigate('/'))
  }, [cookie.user])

  return { me: fullUser }
}
