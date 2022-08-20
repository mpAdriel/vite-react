const LinkTool = ({
  href,
  src,
  classNameContainer,
  classNameImg,
  alt,
  text,
}) => {
  return (
    <a
      className={`card shadow-default border-0 p-4 overflow-hidden d-flex-center ${classNameContainer}`}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <img src={src} className={`logo ${classNameImg}`} alt={alt} />
      <div className=''>{text}</div>
    </a>
  );
};

export default LinkTool;
