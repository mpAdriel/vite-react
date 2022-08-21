const LinkTool = ({ href, src, classNameImg, alt, text }) => {
  return (
    <a
      className='card shadow-default border-0 p-4 overflow-hidden d-flex-center'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <img src={src} className={`logo ${classNameImg}`} alt={alt} />
      <div className='mt-4 fs-4'>{text}</div>
    </a>
  );
};

export default LinkTool;
