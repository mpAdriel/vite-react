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
      className={`card shadow-xl flex justify-between items-center p-4 overflow-hidden flex-col md:flex-row ${classNameContainer}`}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <img src={src} className={`logo ${classNameImg}`} alt={alt} />
      <div className='text-gray-700 font-monospace mt-4 md:mr-4 md:mt-0'>
        {text}
      </div>
    </a>
  );
};

export default LinkTool;
