import React from 'react';
import "../App.css";


const Contact = () => {
      return (
  
        <section id="contact">
          <h2>Contact Me</h2>
          <div id="form">
            <form method="post" action="index.html">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <textarea name="comment" id="comment" cols={30} rows={10} placeholder="Message" defaultValue={""} />
              <input id="send-btn" type="submit" defaultValue="Send Message" />
            </form>
          </div>
        </section>
      );
}
export default Contact;
