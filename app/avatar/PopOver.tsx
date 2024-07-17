import { AVATARS } from "./constants";
import AvatarItem from "./AvatarItem";
import { setAvatar } from "./utils";
import { useState } from "react";

export default function PopOver({
  selectedAvatar,
  setSelectedAvatar,
  setIsPopOverVisible,
}: {
  selectedAvatar: any;
  setSelectedAvatar: any;
  setIsPopOverVisible: any;
}) {
  const [currentAvatar, setCurrentAvatar] = useState(selectedAvatar);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: any, item: any) => {
    e.stopPropagation();
    void (async () => {
      try {
        setIsLoading(true);
        setCurrentAvatar(item);
        // @ts-ignore
        await setAvatar();
        setSelectedAvatar(item);
        setIsPopOverVisible(false);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="avatar-items">
      {AVATARS.map((item) =>
        item.label === currentAvatar.label ? (
          <AvatarItem
            selectedAvatar={item}
            isLoading={isLoading}
            isSelected={!isLoading}
          />
        ) : (
          // @ts-ignore
          <AvatarItem selectedAvatar={item} handleClick={handleClick} />
        )
      )}
    </div>
  );
}
