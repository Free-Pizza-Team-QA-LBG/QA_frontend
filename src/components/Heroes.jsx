const Heroes = ({ title = "QA-LBG", subtitle, imageUrl, linkUrl, managersLink }) => {
    return (
      <div className="relative h-[92vh] w-full overflow-hidden flex items-center justify-center text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
        <video className="absolute top-0 left-0 w-full h-[120%] object-cover z-0" autoPlay loop muted playsInline>
          <source src="/freepizza.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 max-w-[80%] mx-auto">
          <h1 className="text-5xl font-playfair font-extrabold uppercase tracking-wide mb-4 shadow-lg">
            {title}
          </h1>
          <p className="text-2xl font-roboto font-light mb-8">{subtitle}</p>
          <div className="mb-10">
          <a 
            href={linkUrl} 
            className="bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300"
          >
            Employees
          </a>
          </div>
          <a 
            href={managersLink} 
            className="bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300"
          >
            Managers
          </a>
        </div>
      </div>
    );
  };
  
  export default Heroes;
  