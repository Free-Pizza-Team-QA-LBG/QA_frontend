import Heroes from './Heroes';


const Landing = () => {
  return (
    <div className="home-container">
      <Heroes
        title="Free Pizza Team"
        subtitle="QA-LBG"
        imageUrl="/Hero.jpg" 
        linkUrl="/employees"   
        managersLink="/managers" 
      />
   
    </div>
  );
};

export default Landing;
