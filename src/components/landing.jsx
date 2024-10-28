import Heroes from './Heroes';


const Landing = () => {
  return (
    <div className="home-container">
      <Heroes
        title="Free Pizza Team"
        subtitle="QA-LBG"
        imageUrl="/Hero.jpg" 
        linkUrl="/second-page"  
      />
   
    </div>
  );
};

export default Landing;
