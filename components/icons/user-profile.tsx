import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const IconUserProfile = () => {
  return (
    // TODO: Tailwindcssの記述に直す、分かりやすいように色付けする
    <>
      <div className='w-full bg-green-700'>
        <div
          style={{ margin: "10px", fontSize: "x-large" }}
          className='p-10px bg-red-400'
        >
          <FontAwesomeIcon icon={faGamepad} />
        </div>
      </div>
    </>
  );
};

export default IconUserProfile;
