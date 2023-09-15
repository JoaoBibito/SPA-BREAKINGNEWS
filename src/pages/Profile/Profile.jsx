import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
import {
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileUser,
  ProfileActions,
} from "./ProfileStyled.jsx";

export function Profile() {
  const {user} = useContext(UserContext);
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className='bi bi-pencil-square' />
        </ProfileIconEdit>
        <ProfileBackground src={user.background} alt='' />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt='Foto do usuário' />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>
        <ProfileActions>
          <ProfileIconAdd>
            <i className='bi bi-plus-circle' />
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>
    </ProfileContainer>
  );
}
