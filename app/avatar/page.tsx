"use client";

import styles from "./avatar.module.css";
import { useState } from "react";
import { AVATARS } from "./constants";
import PopOver from "./PopOver";
import AvatarItem from "./AvatarItem";
import clsx from "clsx";

export default function AvatarApp() {
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [isPopOverVisible, setIsPopOverVisible] = useState(false);

  const handleClick = () => {
    setIsPopOverVisible((isPopOverVisible) => !isPopOverVisible);
  };

  const handleMainClick = () => {
    if (isPopOverVisible) setIsPopOverVisible(false);
  };

  return (
    <main className={styles.main} onClick={handleMainClick}>
      <div className={styles.container}>
        <AvatarItem
          selectedAvatar={selectedAvatar}
          isSelected={true}
          handleClick={handleClick}
        />
        <div
        // className={clsx(styles.avatarItemsContainer, {
        //   [styles.visible]: isPopOverVisible,
        // })}
        >
          <PopOver
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
            setIsPopOverVisible={setIsPopOverVisible}
          />
        </div>
      </div>
    </main>
  );
}
