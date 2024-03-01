import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
// if using solid style icon
// import { faUser as faUserSolid } from "@fortawesome/free-solid-svg-icons";

const IconUserProfile = () => {
  return (
    <div className='bg-red-400 text-xl'>
      <FontAwesomeIcon icon={faUserRegular} />
    </div>
  );
};

export default IconUserProfile;
