import { SVGProps } from "react";

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12V17H4V19H20V17H18V12C18 9.027 15.8377 6.55904 13 6.08296V4H11V6.08296C8.16229 6.55904 6 9.027 6 12ZM16 12V17H8V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotificationIcon;
