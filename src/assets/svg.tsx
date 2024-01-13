import { Icon } from '@chakra-ui/react';
import { HtmlHTMLAttributes, SVGProps } from 'react';

export const World = (props: any) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      fill="#5C6370"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M10 19.5A9.6 9.6 0 0 1 .5 10a9.2 9.2 0 0 1 2.8-6.7A9.6 9.6 0 0 1 10 .5a9.2 9.2 0 0 1 6.7 2.8 9.7 9.7 0 0 1 2.8 6.7 9.2 9.2 0 0 1-2.8 6.7 9.7 9.7 0 0 1-6.7 2.8Zm0-1.5a12 12 0 0 0 2.2-4.3H7.9A13.1 13.1 0 0 0 10 18Zm-2-.3a11 11 0 0 1-1.7-4H3a8 8 0 0 0 2 2.6 7 7 0 0 0 3 1.4Zm4 0a7 7 0 0 0 3-1.4 8 8 0 0 0 2-2.6h-3.3a17 17 0 0 1-1.8 4Zm-9.7-5.5H6a12.6 12.6 0 0 1 0-4.4H2.3A6.9 6.9 0 0 0 2 10a8.3 8.3 0 0 0 .3 2.2Zm5.2 0h5a12.8 12.8 0 0 0 0-4.4h-5a12.8 12.8 0 0 0 0 4.4Zm6.5 0h3.7A6.9 6.9 0 0 0 18 10a8.3 8.3 0 0 0-.3-2.2H14a12.6 12.6 0 0 1 0 4.4Zm-.3-5.9H17c-.6-1-1.3-1.9-2.1-2.6a7.6 7.6 0 0 0-3-1.4 12.6 12.6 0 0 1 1.7 4Zm-5.8 0h4.3A12.7 12.7 0 0 0 10 2a12 12 0 0 0-2.2 4.3Zm-5 0h3.4a13.8 13.8 0 0 1 1.8-4 7.5 7.5 0 0 0-5.2 4Z" />
    </Icon>
  );
};

export const SocialFacebook = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      {...props}
    >
      <g clip-path="url(#SocialFacebook)">
        <path
          d="M27.8 0H5.4A4.8 4.8 0 0 0 .6 4.8v22.4A4.8 4.8 0 0 0 5.4 32h22.4a4.8 4.8 0 0 0 4.8-4.8V4.8A4.8 4.8 0 0 0 27.8 0Z"
          fill="#1877F2"
        />
        <path
          d="m22.83 20.63.7-4.63H19.1v-3c0-1.26.62-2.5 2.6-2.5h2.03V6.56s-1.84-.31-3.59-.31c-3.65 0-6.04 2.21-6.04 6.22V16h-4.06v4.63h4.06V32h5V20.62h3.73Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="SocialFacebook">
          <path fill="#fff" transform="translate(.6)" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SocialXClear = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#010101"
        d="m2.297 3 7.53 9.928L2.25 21h1.705l6.633-7.067L15.948 21h5.802l-7.953-10.486L20.85 3h-1.705l-6.108 6.509L8.1 3H2.297Zm2.508 1.239h2.666l11.771 15.522h-2.666L4.806 4.24Z"
      />
    </svg>
  );
};

export const SocialX = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      {...props}
    >
      <g clip-path="url(#social)">
        <mask
          id="b"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="33"
          height="32"
        >
          <path d="M32.8 0H.8v32h32V0Z" fill="#fff" />
        </mask>
        <g mask="url(#socialB)">
          <path
            d="M29.05 0H4.55A3.75 3.75 0 0 0 .8 3.75v24.5A3.75 3.75 0 0 0 4.55 32h24.5a3.75 3.75 0 0 0 3.75-3.75V3.75A3.75 3.75 0 0 0 29.05 0Z"
            fill="#000"
          />
          <path
            d="M23.04 6.25h3.31l-7.22 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H6.48l7.73-8.84L6.05 6.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.84L11.88 8.13H9.92l11.96 15.64Z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <clipPath id="social">
          <path fill="#fff" transform="translate(.8)" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SocialReddit = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clip-path="url(#Reddita)" {...props}>
        <path
          d="M27.2 0H4.8A4.8 4.8 0 0 0 0 4.8v22.4A4.8 4.8 0 0 0 4.8 32h22.4a4.8 4.8 0 0 0 4.8-4.8V4.8A4.8 4.8 0 0 0 27.2 0Z"
          fill="#F40"
        />
        <path
          d="M16 26.5c5.73 0 10.38-3.27 10.38-7.31 0-4.04-4.65-7.32-10.38-7.32S5.62 15.15 5.62 19.2c0 4.04 4.65 7.31 10.38 7.31Z"
          fill="#fff"
        />
        <path
          d="M6.63 18.63a2.63 2.63 0 1 0 0-5.26 2.63 2.63 0 0 0 0 5.26ZM25.44 18.63a2.63 2.63 0 1 0 0-5.26 2.63 2.63 0 0 0 0 5.26ZM23.44 9.13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill="#fff"
        />
        <path
          d="m16 12.25 1.44-6.31 4.56.93"
          stroke="#fff"
          stroke-width=".97"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.94 22.44c2.06 1.56 6.06 1.62 8.12 0"
          stroke="#F40"
          stroke-width=".79"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.94 19.88a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM20.06 19.88a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88Z"
          fill="#F40"
        />
      </g>
      <defs>
        <clipPath id="Reddita">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MimeViewClose = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16 28a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-13.7-3.4-3.4-1.7 1.7 3.4 3.4-3.4 3.4 1.7 1.7 3.4-3.4 3.4 3.4 1.7-1.7-3.4-3.4 3.4-3.4-1.7-1.7-3.4 3.4Z"
        fill="#868C98"
      />
    </svg>
  );
};

export const Download = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 489.7 489.7"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M244.9 0c-9.5 0-17.1 7.7-17.1 17.2v312.3l-77.6-77.6a17.2 17.2 0 0 0-24.3 0 17.2 17.2 0 0 0 0 24.3l106.9 106.9c3.2 3.2 7.6 5 12.1 5 4.6 0 8.9-1.8 12.1-5l106.9-107c6.7-6.7 6.7-17.6 0-24.3s-17.6-6.7-24.3 0L262 329.4V17.2c.1-9.5-7.6-17.2-17.1-17.2zM455.8 472.6c0-9.5-7.7-17.2-17.2-17.2H51.1c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.1 17.2 17.1h387.6c9.5.1 17.1-7.6 17.1-17.1z" />
    </svg>
  );
};

export const CopyLink = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      {...props}
    >
      <g clip-path="url(#CopyLink)">
        <path
          d="M16.2.06a15.94 15.94 0 1 1 0 31.88 15.94 15.94 0 0 1 0-31.88Z"
          fill="#53E261"
        />
        <path
          d="M11.97 25.27a4.8 4.8 0 0 1-3.4-1.4l-.24-.24a4.82 4.82 0 0 1 0-6.8l3.06-3.06a4.82 4.82 0 0 1 2.04-1.21 1 1 0 1 1 .56 1.9c-.45.14-.86.38-1.2.72l-3.05 3.05a2.8 2.8 0 0 0 0 4l.24.23a2.8 2.8 0 0 0 3.99 0l3.05-3.06a2.82 2.82 0 0 0 0-4l-.23-.22a1 1 0 1 1 1.4-1.41l.24.23a4.81 4.81 0 0 1 0 6.81l-3.05 3.05a4.8 4.8 0 0 1-3.4 1.41Z"
          fill="#E8E3F0"
        />
        <path
          d="M18.69 19.49a1 1 0 0 1-.28-1.96c.45-.13.86-.37 1.2-.7l3.05-3.06a2.8 2.8 0 0 0 0-4l-.24-.23a2.8 2.8 0 0 0-3.99 0l-3.05 3.06a2.82 2.82 0 0 0 0 4l.23.22a1 1 0 0 1-1.4 1.41l-.24-.23a4.81 4.81 0 0 1 0-6.81l3.05-3.05a4.82 4.82 0 0 1 6.81 0l.24.23a4.82 4.82 0 0 1 0 6.8L21 18.24c-.56.57-1.27.99-2.04 1.21a1 1 0 0 1-.28.05Z"
          fill="#FBF3F3"
        />
      </g>
      <defs>
        <clipPath id="CopyLink">
          <path fill="#fff" transform="translate(.2)" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Picture = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 83"
      {...props}
    >
      <g clipPath="url(#picture)">
        <path
          d="M81.7 41.8 35.1 14.9c-.8-.5-1.8-.2-2.2.6L11.1 53.1c-.5.8-.2 1.8.6 2.2l46.6 26.9c.8.5 1.8.2 2.2-.6L82.3 44c.4-.8.2-1.7-.6-2.2Z"
          fill="#DFE1E0"
        />
        <path
          d="m45.6 50.5 21.9-5.3L70 56.3l7.2-12.5-41.6-24-13 22.4 19.8-2.1 3.2 10.4Z"
          fill="#43B763"
        />
        <path
          d="m34.2 46 4.1-2.8-1.6 4.3 3.4-3.3.9 3.1.6-3 2.9 2.7-2.1-6.9-10.3 1.1 2.7.7-.6 4.1Zm26.3 6 4-2.4-.4 3.7 2.6-1.9 1.4 4.9 1.2-3.1-1.8-8L56 48l6.6.4-2.1 3.6Z"
          fill="#DFE1E0"
        />
        <path
          d="m69.3 53.2-1.2 3.1-1.4-4.9-2.6 1.9.4-3.7-4 2.4 2.1-3.6L56 48l-10.4 2.5-1.1-3.5-2.9-2.7-.6 3-.9-3.1-3.4 3.3 1.6-4.3-4.1 2.8.6-4.1-2.7-.7-9.5 1-3.6 6.3 41.6 24L70 56.3l-.7-3.1Z"
          fill="#5993CE"
        />
        <path
          d="M68.5 5.3 6.4.5c-1-.1-1.9.7-2 1.7L.5 52.4c-.1 1 .7 1.9 1.7 2l62.1 4.8c1 .1 1.9-.7 2-1.7l3.9-50.2c.1-1-.6-1.9-1.7-2Z"
          fill="#EFF4F5"
        />
        <path
          d="m35.2 32.4 20.2-16.5 8.1 10.4 1.3-16.6L9.4 5.4 7.1 35.3l19.6-12.2 8.5 9.3Z"
          fill="#5993CE"
        />
        <path
          d="m21 33.5 2.9-5.1.5 5.4 2-5.2 2.4 2.9-.9-3.5 4.4 1.3-5.6-6.2-10.2 6.4 3.1-.6 1.4 4.6Zm30.5-7 3-4.5 1.4 4.1 1.7-3.3 4 4.5-.3-3.9-5.9-7.5-10.6 8.7 7.1-2.8-.4 4.7Z"
          fill="#DFE1E0"
        />
        <path
          d="m61.3 23.4.3 3.9-4-4.5-1.7 3.3-1.4-4.1-3 4.5.4-4.7-7.1 2.8-9.6 7.8-2.9-3.1-4.4-1.3.9 3.5-2.4-2.9-2 5.2-.5-5.4-2.9 5.1-1.4-4.6-3.1.6-9.4 5.8-.7 8.3 55.5 4.3 1.6-21.6-2.2-2.9Z"
          fill="#505251"
        />
      </g>
      <defs>
        <clipPath id="picture">
          <path fill="#fff" d="M0 0h83v83H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SocialInstagram = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="url(#SocialInstagrama)"
        d="M17.18 8.08a2.06 2.06 0 0 0-.498-.764 2.058 2.058 0 0 0-.764-.497c-.234-.091-.586-.2-1.234-.228-.7-.032-.91-.04-2.685-.04h-.597c-1.24 0-1.476.01-2.09.037-.647.029-.999.137-1.233.228-.31.12-.531.265-.764.497a2.059 2.059 0 0 0-.497.765c-.091.234-.2.585-.228 1.234-.032.7-.039.91-.039 2.684 0 1.776.007 1.986.039 2.687.029.648.138 1 .228 1.234.12.31.265.531.497.764.233.233.454.377.764.497.234.091.586.2 1.234.23.7.032.91.039 2.686.039 1.774 0 1.985-.007 2.685-.039.648-.03 1-.137 1.234-.229.31-.12.532-.264.764-.497.233-.232.377-.452.497-.763.091-.234.2-.585.229-1.233.031-.701.038-.912.038-2.685 0-1.774-.007-1.985-.039-2.685-.029-.648-.138-1-.228-1.234V8.08Zm-5.181 7.334a3.413 3.413 0 1 1 0-6.826 3.413 3.413 0 0 1 0 6.826Zm3.546-6.163a.798.798 0 1 1 .001-1.596.798.798 0 0 1 0 1.596Z"
      />
      <path
        fill="url(#SocialInstagramb)"
        d="M17.18 8.08a2.06 2.06 0 0 0-.498-.764 2.058 2.058 0 0 0-.764-.497c-.234-.091-.586-.2-1.234-.228-.7-.032-.91-.04-2.685-.04h-.597c-1.24 0-1.476.01-2.09.037-.647.029-.999.137-1.233.228-.31.12-.531.265-.764.497a2.059 2.059 0 0 0-.497.765c-.091.234-.2.585-.228 1.234-.032.7-.039.91-.039 2.684 0 1.776.007 1.986.039 2.687.029.648.138 1 .228 1.234.12.31.265.531.497.764.233.233.454.377.764.497.234.091.586.2 1.234.23.7.032.91.039 2.686.039 1.774 0 1.985-.007 2.685-.039.648-.03 1-.137 1.234-.229.31-.12.532-.264.764-.497.233-.232.377-.452.497-.763.091-.234.2-.585.229-1.233.031-.701.038-.912.038-2.685 0-1.774-.007-1.985-.039-2.685-.029-.648-.138-1-.228-1.234V8.08Zm-5.181 7.334a3.413 3.413 0 1 1 0-6.826 3.413 3.413 0 0 1 0 6.826Zm3.546-6.163a.798.798 0 1 1 .001-1.596.798.798 0 0 1 0 1.596Z"
      />
      <path
        fill="url(#SocialInstagramc)"
        d="M11.999 14.216a2.215 2.215 0 1 0-.001-4.43 2.215 2.215 0 0 0 0 4.43Z"
      />
      <path
        fill="url(#SocialInstagramd)"
        d="M11.999 14.216a2.215 2.215 0 1 0-.001-4.43 2.215 2.215 0 0 0 0 4.43Z"
      />
      <path
        fill="url(#SocialInstagrame)"
        d="M20.983 6.9c-.056-.722-.18-1.208-.433-1.722a3.578 3.578 0 0 0-.771-1.055c-.595-.57-1.323-.915-2.192-1.04-.42-.06-.503-.079-2.655-.083h-2.93c-3.757 0-4.856.004-5.069.022-.771.064-1.251.186-1.773.446a3.57 3.57 0 0 0-1.034.757c-.572.593-.918 1.322-1.043 2.19-.06.42-.079.507-.083 2.656v2.925c0 3.756.004 4.854.022 5.067.062.75.18 1.223.43 1.74a3.792 3.792 0 0 0 2.457 2.007c.37.096.78.149 1.307.173.222.01 2.494.017 4.767.017 2.274 0 4.547-.003 4.764-.014.61-.029.964-.076 1.354-.177a3.769 3.769 0 0 0 2.457-2.012c.244-.504.369-.994.425-1.706.013-.155.017-2.628.017-5.097 0-2.47-.006-4.938-.018-5.093h.001Zm-2.38 7.841c-.033.708-.145 1.19-.308 1.613a3.26 3.26 0 0 1-.767 1.177c-.37.37-.74.597-1.177.767-.422.165-.907.277-1.614.31-.709.031-.934.04-2.74.04-1.805 0-2.03-.009-2.74-.04-.707-.033-1.19-.145-1.612-.31a3.259 3.259 0 0 1-1.177-.767c-.37-.37-.597-.74-.767-1.177-.165-.422-.276-.905-.309-1.613-.032-.709-.04-.935-.04-2.74 0-1.806.008-2.032.04-2.74.032-.708.144-1.192.309-1.614a3.26 3.26 0 0 1 .767-1.177c.37-.37.74-.597 1.177-.766.422-.164.905-.277 1.613-.308.708-.032.935-.04 2.738-.04h.003c1.803 0 2.03.008 2.738.04.707.031 1.19.144 1.614.308.438.17.807.396 1.177.766s.597.74.767 1.177c.163.422.275.906.309 1.613.031.71.04.936.04 2.74 0 1.805-.009 2.032-.04 2.741Z"
      />
      <path
        fill="url(#SocialInstagramf)"
        d="M20.983 6.9c-.056-.722-.18-1.208-.433-1.722a3.578 3.578 0 0 0-.771-1.055c-.595-.57-1.323-.915-2.192-1.04-.42-.06-.503-.079-2.655-.083h-2.93c-3.757 0-4.856.004-5.069.022-.771.064-1.251.186-1.773.446a3.57 3.57 0 0 0-1.034.757c-.572.593-.918 1.322-1.043 2.19-.06.42-.079.507-.083 2.656v2.925c0 3.756.004 4.854.022 5.067.062.75.18 1.223.43 1.74a3.792 3.792 0 0 0 2.457 2.007c.37.096.78.149 1.307.173.222.01 2.494.017 4.767.017 2.274 0 4.547-.003 4.764-.014.61-.029.964-.076 1.354-.177a3.769 3.769 0 0 0 2.457-2.012c.244-.504.369-.994.425-1.706.013-.155.017-2.628.017-5.097 0-2.47-.006-4.938-.018-5.093h.001Zm-2.38 7.841c-.033.708-.145 1.19-.308 1.613a3.26 3.26 0 0 1-.767 1.177c-.37.37-.74.597-1.177.767-.422.165-.907.277-1.614.31-.709.031-.934.04-2.74.04-1.805 0-2.03-.009-2.74-.04-.707-.033-1.19-.145-1.612-.31a3.259 3.259 0 0 1-1.177-.767c-.37-.37-.597-.74-.767-1.177-.165-.422-.276-.905-.309-1.613-.032-.709-.04-.935-.04-2.74 0-1.806.008-2.032.04-2.74.032-.708.144-1.192.309-1.614a3.26 3.26 0 0 1 .767-1.177c.37-.37.74-.597 1.177-.766.422-.164.905-.277 1.613-.308.708-.032.935-.04 2.738-.04h.003c1.803 0 2.03.008 2.738.04.707.031 1.19.144 1.614.308.438.17.807.396 1.177.766s.597.74.767 1.177c.163.422.275.906.309 1.613.031.71.04.936.04 2.74 0 1.805-.009 2.032-.04 2.741Z"
      />
      <defs>
        <radialGradient
          id="SocialInstagrama"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -17.8393 16.592 0 7.781 22.386)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FD5" />
          <stop offset=".1" stop-color="#FD5" />
          <stop offset=".5" stop-color="#FF543E" />
          <stop offset="1" stop-color="#C837AB" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramb"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1.56512 7.81915 -32.23086 6.45148 -.015 4.298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3771C8" />
          <stop offset=".128" stop-color="#3771C8" />
          <stop offset="1" stop-color="#60F" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramc"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -17.8393 16.592 0 7.781 22.386)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FD5" />
          <stop offset=".1" stop-color="#FD5" />
          <stop offset=".5" stop-color="#FF543E" />
          <stop offset="1" stop-color="#C837AB" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramd"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1.56512 7.81915 -32.23086 6.45148 -.015 4.298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3771C8" />
          <stop offset=".128" stop-color="#3771C8" />
          <stop offset="1" stop-color="#60F" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="SocialInstagrame"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -17.8393 16.592 0 7.781 22.386)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FD5" />
          <stop offset=".1" stop-color="#FD5" />
          <stop offset=".5" stop-color="#FF543E" />
          <stop offset="1" stop-color="#C837AB" />
        </radialGradient>
        <radialGradient
          id="SocialInstagramf"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(1.56512 7.81915 -32.23086 6.45148 -.015 4.298)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3771C8" />
          <stop offset=".128" stop-color="#3771C8" />
          <stop offset="1" stop-color="#60F" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const SocialTikTok = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        d="M20.1 3H3.9a.9.9 0 0 0-.9.9v16.2a.9.9 0 0 0 .9.9h16.2a.9.9 0 0 0 .9-.9V3.9a.9.9 0 0 0-.9-.9Zm-2.953 7.852a3.214 3.214 0 0 1-2.987-1.436v4.944a3.654 3.654 0 1 1-3.654-3.654c.076 0 .15.007.226.011v1.8a1.86 1.86 0 1 0-.226 3.708 1.91 1.91 0 0 0 1.944-1.84l.018-8.399h1.723a3.208 3.208 0 0 0 2.956 2.864v2.002Z"
      />
    </svg>
  );
};

export const ProfileUploadPlaceHolder = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 46 46"
      {...props}
    >
      <rect width="40" height="40" x="3" y="3" fill="#F2F4F7" rx="20" />
      <rect
        width="40"
        height="40"
        x="3"
        y="3"
        stroke="#F9FAFB"
        stroke-width="6"
        rx="20"
      />
      <g clip-path="url(#ProfileUploadPlaceHoldera)">
        <path
          stroke="#475467"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.667"
          d="M26.333 26.333 23 23m0 0-3.333 3.333M23 23v7.5m6.992-2.175A4.167 4.167 0 0 0 28 20.5h-1.05a6.666 6.666 0 1 0-11.45 6.083"
        />
      </g>
      <defs>
        <clipPath id="ProfileUploadPlaceHoldera">
          <path fill="#fff" d="M0 0h20v20H0z" transform="translate(13 13)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ProfilePlaceOlder = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <rect width="48" height="48" fill="#CAC2FF" rx="24" />
      <g filter="url(#ProfilePlaceOldera)">
        <g clip-path="url(#ProfilePlaceOlderb)">
          <rect width="48" height="48" fill="#CAC2FF" rx="24" />
          <g filter="url(#ProfilePlaceOlderc)" shape-rendering="crispEdges">
            <ellipse
              cx="24"
              cy="45.6"
              fill="url(#ProfilePlaceOlderd)"
              rx="19.2"
              ry="14.4"
            />
            <path
              stroke="url(#ProfilePlaceOldere)"
              d="M42.7 45.6c0 3.784-2.044 7.247-5.424 9.782C33.896 57.917 29.204 59.5 24 59.5c-5.204 0-9.896-1.583-13.277-4.118C7.343 52.847 5.3 49.384 5.3 45.6s2.044-7.248 5.423-9.782C14.104 33.283 18.797 31.7 24 31.7c5.204 0 9.897 1.583 13.276 4.118 3.38 2.535 5.424 5.998 5.424 9.782Z"
            />
          </g>
          <g filter="url(#ProfilePlaceOlderf)" shape-rendering="crispEdges">
            <circle cx="24" cy="19.2" r="9.6" fill="url(#ProfilePlaceOlderg)" />
            <circle
              cx="24"
              cy="19.2"
              r="9.1"
              stroke="url(#ProfilePlaceOlderh)"
            />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient
          id="ProfilePlaceOlderd"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 28.8 -38.4 0 24 31.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="ProfilePlaceOldere"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 28.8 -38.4 0 24 31.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="ProfilePlaceOlderg"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 19.2 -19.2 0 24 9.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="ProfilePlaceOlderh"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 19.2 -19.2 0 24 9.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter
          id="ProfilePlaceOldera"
          width="48"
          height="56"
          x="0"
          y="-8"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.431292 0 0 0 0 0.248526 0 0 0 0 0.951474 0 0 0 0.24 0" />
          <feBlend in2="shape" result="effect1_innerShadow_108_64128" />
        </filter>
        <filter
          id="ProfilePlaceOlderc"
          width="46.4"
          height="44.8"
          x=".8"
          y="23.2"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.431292 0 0 0 0 0.248526 0 0 0 0 0.951474 0 0 0 0.24 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_108_64128"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_108_64128"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_108_64128" />
        </filter>
        <filter
          id="ProfilePlaceOlderf"
          width="27.2"
          height="35.2"
          x="10.4"
          y="1.6"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.431292 0 0 0 0 0.248526 0 0 0 0 0.951474 0 0 0 0.24 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_108_64128"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_108_64128"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_108_64128" />
        </filter>
        <clipPath id="ProfilePlaceOlderb">
          <rect width="48" height="48" fill="#fff" rx="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LogoWithConnect = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 43 47"
      {...props}
    >
      <g filter="url(#LogoWithConnecta)">
        <rect width="40" height="40" fill="#6E3FF3" rx="20" />
        <rect width="40" height="40" fill="#fff" fillOpacity=".1" rx="20" />
        <path
          fill="url(#LogoWithConnectb)"
          fillOpacity=".88"
          stroke="url(#LogoWithConnectc)"
          d="m21.311 5.056 2.104.562-2.132 7.929a6.91 6.91 0 0 0-2.242-.048l2.27-8.443Zm8.75 4.239-5.702 5.682a6.853 6.853 0 0 0-1.954-1.12l6.117-6.096 1.539 1.534ZM17.782 13.8a6.85 6.85 0 0 0-1.968 1.063l-2.235-8.31 2.104-.562 2.1 7.81Zm-6.304 18.544L9.94 30.81l5.488-5.469a6.883 6.883 0 0 0 1.874 1.2l-5.823 5.803Zm12.84 1.77L22.324 26.7a6.85 6.85 0 0 0 1.961-1.09l2.136 7.942-2.103.562Zm9.793-18.367-7.698 2.056a6.826 6.826 0 0 0-1.15-1.937l8.285-2.212.563 2.093Zm-7.342 3.333 8.174 2.182-.563 2.094-7.592-2.028a6.867 6.867 0 0 0-.02-2.248Zm-20.88 5.277 7.59-2.027a6.806 6.806 0 0 0 1.007 1.975L6.452 26.45l-.563-2.093Zm10.795 10.024 1.993-7.414a6.912 6.912 0 0 0 2.235.072l-2.125 7.904-2.103-.562Zm14.11-4.302-5.487-5.47c.476-.575.86-1.23 1.128-1.942l5.899 5.878-1.54 1.534Zm-17.593-9.063-8.144-2.174.563-2.094 7.697 2.056a6.836 6.836 0 0 0-.116 2.212Zm.507-3.436-6.042-6.02 1.54-1.534 5.7 5.682a6.834 6.834 0 0 0-1.198 1.873Z"
        />
      </g>
      <path
        fill="url(#LogoWithConnectd)"
        stroke="#fff"
        stroke-width=".605"
        d="M42.697 37.072c0 4.846-3.896 8.77-8.697 8.77-4.801 0-8.698-3.924-8.698-8.77 0-4.845 3.897-8.77 8.698-8.77s8.697 3.925 8.697 8.77Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M33.865 42.07a.378.378 0 0 0 .358-.003l1.784-.961c.506-.272.902-.576 1.211-.93a4.175 4.175 0 0 0 1.032-2.77l-.02-3.347a.911.911 0 0 0-.625-.854l-3.319-1.123a.937.937 0 0 0-.615.004l-3.306 1.162a.913.913 0 0 0-.614.863l.02 3.344a4.176 4.176 0 0 0 1.07 2.76c.312.348.712.648 1.223.915l1.8.94Zm-.473-3.934a.378.378 0 0 0 .268.106.379.379 0 0 0 .267-.11l1.949-1.938a.366.366 0 0 0-.003-.523.383.383 0 0 0-.534.003l-1.684 1.673-.69-.668a.383.383 0 0 0-.534.003.366.366 0 0 0 .004.524l.957.93Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="LogoWithConnectb"
          x1="20"
          x2="20"
          y1="4.445"
          y2="51.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".313" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="LogoWithConnectc"
          x1="74.914"
          x2="-16.623"
          y1="-71.066"
          y2="3.193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="LogoWithConnectd"
          x1="34"
          x2="34"
          y1="28"
          y2="46.145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E23F6" />
          <stop offset="1" stopColor="#4A09C0" />
        </linearGradient>
        <filter
          id="LogoWithConnecta"
          width="40"
          height="44"
          x="0"
          y="-4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0" />
          <feBlend in2="shape" result="effect1_innerShadow_94_32932" />
        </filter>
      </defs>
    </svg>
  );
};

export const SocialGoogle = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M10.15 8.64v2.9h4.12a3.46 3.46 0 0 1-1.54 2.26l2.49 1.89a7.26 7.26 0 0 0 2.28-5.52 8.4 8.4 0 0 0-.14-1.53h-7.2Zm-6.83-2a7.29 7.29 0 0 0 0 6.72l2.55-1.93A4.41 4.41 0 0 1 5.62 10c0-.5.1-.97.25-1.43L3.32 6.64Z"
        fill="#fff"
      />
      <path
        d="M10.15 5.49c1.13 0 2.13.38 2.93 1.11l2.2-2.14a7.43 7.43 0 0 0-5.13-1.96 7.66 7.66 0 0 0-6.83 4.14l2.55 1.94a4.56 4.56 0 0 1 4.28-3.1Zm-4.29 5.94-.56.42-1.98 1.51a7.67 7.67 0 0 0 6.83 4.14 7.4 7.4 0 0 0 5.07-1.81l-2.49-1.9c-.68.46-1.55.73-2.58.73a4.56 4.56 0 0 1-4.28-3.09Z"
        fill="#fff"
      />
    </svg>
  );
};

export const SocialApple = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.77 22.77"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M15.77 0h.16c.13 1.6-.48 2.8-1.23 3.67-.73.87-1.73 1.7-3.35 1.58-.1-1.59.5-2.7 1.25-3.56A5.4 5.4 0 0 1 15.77 0zM20.67 16.72v.04a13.25 13.25 0 0 1-1.9 3.66c-.72 1-1.6 2.33-3.19 2.33-1.36 0-2.27-.88-3.67-.9-1.48-.03-2.3.73-3.65.92h-.47c-1-.14-1.8-.93-2.38-1.64a14.39 14.39 0 0 1-3.3-8.27v-1.02c.1-2.49 1.3-4.5 2.9-5.48.85-.52 2.02-.96 3.31-.77.56.09 1.12.28 1.62.47.47.18 1.06.5 1.62.48.38 0 .75-.2 1.13-.34 1.12-.4 2.21-.87 3.66-.65a5.07 5.07 0 0 1 3.72 2.22 4.78 4.78 0 0 0-2.43 4.74 4.9 4.9 0 0 0 3.03 4.2z" />
    </svg>
  );
};

export const LogoSVG = (props: any) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 193 40"
      {...props}
    >
      <g filter="url(#a)">
        <rect width="40" height="40" rx="20" fill="#6E3FF3" />
        <rect width="40" height="40" rx="20" fill="#fff" fillOpacity=".1" />
        <path
          d="m21.31 5.06 2.1.56-2.13 7.93a6.92 6.92 0 0 0-2.24-.05l2.27-8.44Zm8.75 4.23-5.7 5.69a6.85 6.85 0 0 0-1.95-1.12l6.11-6.1 1.54 1.53ZM17.78 13.8c-.71.25-1.38.6-1.97 1.06l-2.23-8.3 2.1-.57 2.1 7.81Zm-6.3 18.54-1.54-1.53 5.49-5.47c.55.5 1.18.9 1.87 1.2l-5.82 5.8Zm12.84 1.77-2-7.4a6.85 6.85 0 0 0 1.97-1.1l2.13 7.94-2.1.56Zm9.8-18.36-7.7 2.05a6.82 6.82 0 0 0-1.16-1.93l8.29-2.21.56 2.09Zm-7.35 3.33 8.17 2.18-.56 2.1-7.6-2.03a6.87 6.87 0 0 0-.01-2.25ZM5.89 24.36l7.59-2.03a6.8 6.8 0 0 0 1 1.98l-8.03 2.14-.56-2.1Zm10.8 10.02 1.99-7.41a6.9 6.9 0 0 0 2.23.07l-2.12 7.9-2.1-.56Zm14.1-4.3-5.48-5.47c.47-.58.86-1.23 1.13-1.94l5.9 5.88-1.55 1.53ZM13.2 21.02l-8.14-2.18.56-2.1 7.7 2.06a6.84 6.84 0 0 0-.12 2.22Zm.5-3.44-6.03-6.02 1.54-1.53 5.7 5.68c-.5.55-.9 1.18-1.2 1.87Z"
          fill="url(#b)"
          fillOpacity=".88"
          stroke="url(#c)"
        />
      </g>
      <path
        d="M47.86 31V14.2h5.1l4.16 11.78h.3l4.16-11.78h5.1V31h-3.82V20.88h-.34L58.82 31h-3.1l-3.7-10.12h-.34V31h-3.82Zm20.17 0V14.2h14.14v3.26H72.01v3.68h9.8v2.88h-9.8v3.7h10.16V31H68.03Zm15.5 0V14.2h5.1l4.17 11.78h.3l4.16-11.78h5.1V31h-3.82V20.88h-.34L94.5 31h-3.1l-3.7-10.12h-.34V31h-3.82Zm20.18 0V14.2h14.14v3.26h-10.16v3.68h9.8v2.88h-9.8v3.7h10.16V31h-14.14Zm15.5 0V14.2h14.13v3.34H123.2v3.96h9.58v3.02h-9.58V31h-3.98Zm31.59 0h-3.96l-2.76-5h-5.42v5h-3.98V14.2h8.82c4.5 0 6.88 2.1 6.88 6.02a5.42 5.42 0 0 1-2.86 4.98l3.28 5.8Zm-12.14-13.46v5.4h4.62c2.02 0 3.14-.92 3.14-2.7 0-1.78-1.12-2.7-3.14-2.7h-4.62ZM151.78 31V14.2h3.98V31h-3.98Zm14.23.56c-5.44 0-9.2-3.68-9.2-8.96 0-5.28 3.76-8.96 9.2-8.96 3.68 0 7.46 1.64 8.28 6.58h-3.82c-.72-2.16-2.38-3.12-4.46-3.12-2.98 0-5.26 2.26-5.26 5.5 0 3.22 2.28 5.5 5.26 5.5 2.08 0 3.74-.96 4.46-3.14h3.82c-.82 4.96-4.56 6.6-8.28 6.6ZM188.2 31l-1.04-2.82h-8.28L177.83 31h-4.12l6.5-16.8h5.6l6.52 16.8h-4.14Zm-8.2-5.84h6.04l-2.64-7.18h-.76l-2.64 7.18Z"
        fill="#0A0D14"
      />
      <defs>
        <linearGradient
          id="b"
          x1="20"
          y1="4.44"
          x2="20"
          y2="51.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".31" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="74.91"
          y1="-71.07"
          x2="-16.62"
          y2="3.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter
          id="a"
          x="0"
          y="-4"
          width="40"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0" />
          <feBlend in2="shape" result="effect1_innerShadow_3_4405" />
        </filter>
      </defs>
    </svg>
  );
};

export const DashBoardSVG = (props: any) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
      <path d="M10.3 5.1V1.4c0-.3 0-.5.2-.6.2-.2.4-.3.7-.3h5.4c.3 0 .5 0 .6.3.2.1.3.3.3.6v3.7c0 .3 0 .5-.3.6-.1.2-.3.3-.6.3h-5.5c-.2 0-.4 0-.6-.3a.9.9 0 0 1-.3-.6ZM.4 8.6V1.4c0-.3 0-.5.3-.6.1-.2.3-.3.6-.3h5.4c.3 0 .5 0 .7.3.2.1.3.3.3.6v7.2c0 .3-.1.5-.3.6a1 1 0 0 1-.7.3H1.4c-.3 0-.5 0-.6-.3a.9.9 0 0 1-.3-.6Zm9.8 8V9.4c0-.3 0-.5.2-.6.2-.2.4-.3.7-.3h5.4c.3 0 .5 0 .6.3.2.1.3.3.3.6v7.2c0 .3 0 .5-.3.6-.1.2-.3.3-.6.3H11c-.2 0-.4 0-.6-.3a.9.9 0 0 1-.3-.6Zm-9.8 0v-3.7c0-.3 0-.5.3-.6.1-.2.3-.3.6-.3h5.4c.3 0 .5 0 .7.3.2.1.3.3.3.6v3.7c0 .3-.1.5-.3.6a1 1 0 0 1-.7.3H1.4c-.3 0-.5 0-.6-.3a.9.9 0 0 1-.3-.6ZM2 8h4.3V2H2v6Zm9.8 8H16v-6h-4.3v6Zm0-11.5H16V2h-4.3v2.5ZM2 16h4.3v-2.5H2V16Z" />
    </Icon>
  );
};

export const DropDown = (props: any) => {
  return (
    <Icon
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.35321 3.97516L0.949621 1.57157C0.656877 1.27883 0.591549 0.943869 0.753637 0.566691C0.915108 0.188897 1.20385 0 1.61985 0H6.3808C6.7968 0 7.08554 0.188897 7.24701 0.566691C7.4091 0.943869 7.34377 1.27883 7.05103 1.57157L4.64744 3.97516C4.555 4.06761 4.45485 4.13694 4.347 4.18316C4.23914 4.22938 4.12359 4.2525 4.00033 4.2525C3.87706 4.2525 3.76151 4.22938 3.65365 4.18316C3.5458 4.13694 3.44565 4.06761 3.35321 3.97516Z"
        fill="#ABB0BA"
      />
    </Icon>
  );
};

export const SettingsIcon = (props: any) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4999 19.5H8.47494C8.25828 19.5 8.06661 19.425 7.89994 19.275C7.73327 19.125 7.63328 18.9333 7.59994 18.7L7.29994 16.45C7.03327 16.3667 6.76261 16.2417 6.48794 16.075C6.21261 15.9083 5.95827 15.7333 5.72494 15.55L3.64994 16.45C3.43327 16.5333 3.22094 16.5417 3.01294 16.475C2.80427 16.4083 2.63327 16.275 2.49994 16.075L0.999941 13.45C0.883275 13.25 0.849941 13.0373 0.899941 12.812C0.949941 12.5873 1.05827 12.4083 1.22494 12.275L3.04994 10.9C3.01661 10.75 2.99594 10.6 2.98794 10.45C2.97927 10.3 2.97494 10.15 2.97494 10C2.97494 9.86667 2.97927 9.725 2.98794 9.575C2.99594 9.425 3.01661 9.26667 3.04994 9.1L1.22494 7.725C1.05827 7.59167 0.949941 7.41267 0.899941 7.188C0.849941 6.96267 0.883275 6.75 0.999941 6.55L2.49994 3.95C2.61661 3.75 2.78327 3.61667 2.99994 3.55C3.21661 3.48333 3.42494 3.49167 3.62494 3.575L5.72494 4.45C5.95827 4.26667 6.21261 4.096 6.48794 3.938C6.76261 3.77933 7.03327 3.65 7.29994 3.55L7.59994 1.3C7.63328 1.06667 7.73327 0.875 7.89994 0.725C8.06661 0.575 8.25828 0.5 8.47494 0.5H11.4999C11.7333 0.5 11.9333 0.575 12.0999 0.725C12.2666 0.875 12.3666 1.06667 12.3999 1.3L12.6999 3.55C12.9999 3.66667 13.2706 3.79567 13.5119 3.937C13.7539 4.079 13.9999 4.25 14.2499 4.45L16.3749 3.575C16.5749 3.49167 16.7793 3.48333 16.9879 3.55C17.1959 3.61667 17.3666 3.75 17.4999 3.95L18.9999 6.55C19.1166 6.75 19.1499 6.96267 19.0999 7.188C19.0499 7.41267 18.9416 7.59167 18.7749 7.725L16.9249 9.125C16.9583 9.29167 16.9749 9.44167 16.9749 9.575V10C16.9749 10.1333 16.9706 10.2707 16.9619 10.412C16.9539 10.554 16.9333 10.7167 16.8999 10.9L18.7249 12.275C18.9083 12.4083 19.0249 12.5873 19.0749 12.812C19.1249 13.0373 19.0833 13.25 18.9499 13.45L17.4499 16.05C17.3333 16.25 17.1666 16.3833 16.9499 16.45C16.7333 16.5167 16.5166 16.5083 16.2999 16.425L14.2499 15.55C13.9999 15.75 13.7459 15.925 13.4879 16.075C13.2293 16.225 12.9666 16.35 12.6999 16.45L12.3999 18.7C12.3666 18.9333 12.2666 19.125 12.0999 19.275C11.9333 19.425 11.7333 19.5 11.4999 19.5ZM9.99994 13C10.8333 13 11.5416 12.7083 12.1249 12.125C12.7083 11.5417 12.9999 10.8333 12.9999 10C12.9999 9.16667 12.7083 8.45833 12.1249 7.875C11.5416 7.29167 10.8333 7 9.99994 7C9.16661 7 8.45827 7.29167 7.87494 7.875C7.29161 8.45833 6.99994 9.16667 6.99994 10C6.99994 10.8333 7.29161 11.5417 7.87494 12.125C8.45827 12.7083 9.16661 13 9.99994 13ZM9.99994 11.5C9.58327 11.5 9.22927 11.354 8.93794 11.062C8.64594 10.7707 8.49994 10.4167 8.49994 10C8.49994 9.58333 8.64594 9.22933 8.93794 8.938C9.22927 8.646 9.58327 8.5 9.99994 8.5C10.4166 8.5 10.7706 8.646 11.0619 8.938C11.3539 9.22933 11.4999 9.58333 11.4999 10C11.4999 10.4167 11.3539 10.7707 11.0619 11.062C10.7706 11.354 10.4166 11.5 9.99994 11.5ZM8.99994 18H10.9749L11.3249 15.325C11.8416 15.1917 12.3083 15 12.7249 14.75C13.1416 14.5 13.5499 14.1833 13.9499 13.8L16.4249 14.85L17.4249 13.15L15.2499 11.525C15.3333 11.2583 15.3876 11 15.4129 10.75C15.4376 10.5 15.4499 10.25 15.4499 10C15.4499 9.73333 15.4376 9.47933 15.4129 9.238C15.3876 8.996 15.3333 8.75 15.2499 8.5L17.4249 6.85L16.4499 5.15L13.9249 6.2C13.5916 5.85 13.1916 5.53733 12.7249 5.262C12.2583 4.98733 11.7916 4.79167 11.3249 4.675L10.9999 2H9.02494L8.67494 4.675C8.17494 4.79167 7.70827 4.975 7.27494 5.225C6.84161 5.475 6.42494 5.79167 6.02494 6.175L3.54994 5.15L2.57494 6.85L4.72494 8.45C4.64161 8.7 4.58327 8.95 4.54994 9.2C4.51661 9.45 4.49994 9.71667 4.49994 10C4.49994 10.2667 4.51661 10.525 4.54994 10.775C4.58327 11.025 4.64161 11.275 4.72494 11.525L2.57494 13.15L3.54994 14.85L6.02494 13.8C6.40827 14.1833 6.81661 14.5 7.24994 14.75C7.68327 15 8.15827 15.1917 8.67494 15.325L8.99994 18Z"
        fill="#5C6370"
      />
    </Icon>
  );
};

export const Hamburger = (props: any) => {
  return (
    <Icon
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 12C0.716667 12 0.479333 11.904 0.288 11.712C0.0960001 11.5207 0 11.2833 0 11C0 10.7167 0.0960001 10.4793 0.288 10.288C0.479333 10.096 0.716667 10 1 10H17C17.2833 10 17.5207 10.096 17.712 10.288C17.904 10.4793 18 10.7167 18 11C18 11.2833 17.904 11.5207 17.712 11.712C17.5207 11.904 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479333 6.904 0.288 6.712C0.0960001 6.52067 0 6.28333 0 6C0 5.71667 0.0960001 5.479 0.288 5.287C0.479333 5.09567 0.716667 5 1 5H17C17.2833 5 17.5207 5.09567 17.712 5.287C17.904 5.479 18 5.71667 18 6C18 6.28333 17.904 6.52067 17.712 6.712C17.5207 6.904 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479333 1.90433 0.288 1.713C0.0960001 1.521 0 1.28333 0 1C0 0.716667 0.0960001 0.479 0.288 0.287C0.479333 0.0956668 0.716667 0 1 0H17C17.2833 0 17.5207 0.0956668 17.712 0.287C17.904 0.479 18 0.716667 18 1C18 1.28333 17.904 1.521 17.712 1.713C17.5207 1.90433 17.2833 2 17 2H1Z"
        fill="#5C6370"
      />
    </Icon>
  );
};
