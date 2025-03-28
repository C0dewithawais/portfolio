function Home() {
  return (
    <section id="home">
      <img src="Awais(2).jpg" alt="" />
      <div className="info-box ">
        <h1>
          <span className="animate-on-scroll animate__fadeIn">
            Hello, I'm Awais
          </span>
        </h1>
        <h3 className="animate-on-scroll animate__fadeInDown">
          <span>Software engineer </span> based in Pakistan
        </h3>
        <p className="animate-on-scroll animate__fadeInDown">
          Passionate about building scalable and efficient software solutions.
          With a strong background in full-stack development, I turn ideas into
          reality through clean code and innovative problem-solving.
        </p>
      </div>
      <div className="btn-box">
        <div className="btn animate-on-scroll animate__lightSpeedInRight">
          Hire Me
        </div>
        <div className="btn animate-on-scroll animate__lightSpeedInRight ">
          Contact Me
        </div>
      </div>
    </section>
  );
}
export default Home;
