import React from "react";
import c from "./ProfileInfo.module.css";
import Avatar_Description from "../Avatar_Description/Avatar_Description";

const ProfileInfo = () => {
  return (
    <div>
      <Avatar_Description />
      <div className={c.profileImage}></div>
      <div className={c.descriptionBlock}></div>
    </div>
  );
};
export default ProfileInfo;
