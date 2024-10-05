import { EditPerson, EditProfile } from "./components";
import { useUserMe } from "./hooks";

export const Profile = () => {

  const {me} = useUserMe();

  if(!me) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-12 gap-4 p-10 w-full mt-10 mx-24 bg-primary-foreground">
      <h3 className="text-2xl font-bold text-center col-span-12">Cuenta</h3>
      <EditProfile profile={me.profile} />
      <EditPerson person={me.person} />
    </div>
  );
};

export default Profile;
