import { ButtonHTMLAttributes, FC } from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({ children, onClick }) => {
  let color: string;

  if (children === "삭제") {
    color = "red";
  } else if (children === "완료") {
    color = "green";
  } else if (children === "취소") {
    color = "#505050";
  } else {
    color = "blue";
  }

  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
