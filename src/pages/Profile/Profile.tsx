import { useSelector } from "react-redux";
import { EditPerson, EditProfile } from "./components";
import { useUserMe } from "./hooks";
import { AppStore } from "@/redux/store";

export const Profile = () => {
  const { me } = useUserMe();
  const { accessToken } = useSelector((state: AppStore) => state.user);

  if (!me) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-12 gap-4 p-10 w-full mt-10 mx-24 bg-primary-foreground">
      <h3 className="text-2xl font-bold text-center col-span-12">Cuenta</h3>
      <EditProfile accessToken={accessToken} user={me} />
      <EditPerson person={me.person} />
    </div>
  );
};

export default Profile;
