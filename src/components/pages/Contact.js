import '../../styles/Contact.css';
function Contact(){
  return(
    <>
    <div className="contact-container">
      <h2>📧Contact Me📞</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

      <form className="contact-form">
       <span>Name :</span> <input type="text" name="name" placeholder="Your Name" required />
        <br/>

        <span>Email :</span> <input type="email" name="email" placeholder="Your Email" required />
        <br/>
        <span>Message :</span> <br/><textarea name="message" placeholder="Your Message" cols="30" rows="3" required></textarea>
        <br/>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">

        <a href="mailto:rdbhand308@gmail.com"><img src={`${process.env.PUBLIC_URL}/images/email.png`} alt="email"></img></a>
        <a href="https://linkedin.com/in/rameshwar-bhand-35b980269"><img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="gfg"></img></a>
        <a href="https://github.com/rdbhand"><img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="github"></img></a>
        <a href="https://www.codechef.com/users/rdbhand308"><img src={`${process.env.PUBLIC_URL}/images/codechef.png`} alt="codechef"></img></a>
        <a href="https://www.geeksforgeeks.org/user/rdbhan3y3v/"><img src={`${process.env.PUBLIC_URL}/images/gfg.png`} alt="gfg"></img></a>
        
      </div>
    </div>
    </>
  );
}

export default Contact;