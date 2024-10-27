import { useAppSelector } from '@/hooks'
import { EditPerson, EditProfile } from './components'
import { useUserMe } from './hooks'

export const Profile = () => {
  const { me } = useUserMe()
  const { accessToken } = useAppSelector(state => state.user)

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
