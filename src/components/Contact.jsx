function Contact(){
    return(
      <section id="contact" class="animate-on-scroll animate__bounceInUp">
      <h1 class="header"><span>Contact</span></h1>
      <form action="#">
        <div class="input-box">
          <span>Full Name</span>
          <input type="text" placeholder="Enter Your Full Name" />
        </div>
        <div class="input-box">
          <span>Your Email</span>
          <input type="text" placeholder="Enter Your Email" />
        </div>
        <div class="input-box">
          <span>Your Message</span>
          <input type="text" placeholder="Enter Your Message" />
        </div>
        <div class="btn">Submit</div>
      </form>
    </section>
    )
  }
  export default Contact