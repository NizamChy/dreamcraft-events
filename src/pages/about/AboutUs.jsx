

const AboutUs = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600">
              Welcome to DreamCraft Events, where we turn your dreams into unforgettable memories. Led by Nizam, a visionary in the world of event management, our dedicated team is passionate about creating extraordinary experiences for lifes most cherished occasions. Our vision is to make your social events a true reflection of your individuality and style.
            </p>
            <p className="mt-4 text-gray-600">
              DreamCraft Events specializes in a diverse array of social events, including weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers. We are committed to excellence, creativity, and personalized service, ensuring that every event we undertake is a masterpiece of artistry and precision.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="mt-10 md:mt-0">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/yYtcj7d/wedding.png"  
                alt="Image 1"
                className="rounded-full h-40 w-40 md:h-64 md:w-64 object-cover"
              />
            </div>
            <div className="flex justify-center mt-6">
              <img
                src="https://i.ibb.co/QpY0y6R/engagement.png"
                alt="Image 2"
                className="rounded-full h-40 w-40 md:h-64 md:w-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
