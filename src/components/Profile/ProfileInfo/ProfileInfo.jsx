import React from 'react';
import c from './ProfileInfo.module.css';
import Avatar_Description from "../Avatar_Description/Avatar_Description";


const ProfileInfo = () => {
    return(
      <div>
          <Avatar_Description/>
          <div className={c.profileImage}>
              {/*<img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' />*/}
          </div>
    <div className={c.descriptionBlock}>

    </div>
    </div>
    
    )  
}
export default ProfileInfo;