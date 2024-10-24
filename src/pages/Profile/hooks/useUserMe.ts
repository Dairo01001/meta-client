import { AppStore } from '@/redux/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserProfile } from '../models'
import { getMe } from '../services'

export const useUserMe = () => {
  const user = useSelector((state: AppStore) => state.user)
  const navigate = useNavigate()
  const [me, setMe] = useState<UserProfile | null>(null)

  useEffect(() => {
    getMe(user)
      .then(setMe)
      .catch(() => navigate('/'))
  }, [user])

  return { me }
}
