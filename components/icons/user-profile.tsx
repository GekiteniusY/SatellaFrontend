import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const IconUserProfile = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ margin: "10px", fontSize: "x-large" }}>
          <FontAwesomeIcon icon={faGamepad} />
        </div>
      </div>
    </>
  );
};

export default IconUserProfile;
