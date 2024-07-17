import styles from "./avatar.module.css";

export default function AvatarItem({
  selectedAvatar,
  isSelected,
  isLoading,
  handleClick = () => {},
}: {
  selectedAvatar: any;
  isSelected: any;
  isLoading?: boolean;
  handleClick?: any;
}) {
  return (
    <div
      className={
        isSelected
          ? styles["image-container selected"]
          : isLoading
          ? styles["image-container loading"]
          : styles["image-container"]
      }
      onClick={(e) => handleClick(e, selectedAvatar)}
    >
      <img src={selectedAvatar.source} alt={selectedAvatar.label} />
    </div>
  );
}
