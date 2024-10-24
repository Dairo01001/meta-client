import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { EditPerson, EditProfile } from './components'
import { useUserMe } from './hooks'

export const Profile = () => {
  const { me } = useUserMe()
  const { accessToken } = useSelector((state: AppStore) => state.user)

  if (!me) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-primary-foreground">
      <EditProfile accessToken={accessToken} user={me} />
      <EditPerson person={me.person} />
    </div>
  )
}

export default Profile
