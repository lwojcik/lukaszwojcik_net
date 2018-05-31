import React from 'react'

const MailLink = (props) => {
  const link = `mailto:${props.to}`;

  return (
    <a
      href={link}
      title={props.title}
    >
      {props.children}
    </a>
  );
};

export default MailLink
