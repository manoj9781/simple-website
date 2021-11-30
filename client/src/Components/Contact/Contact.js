import React, {useState, useEffect} from 'react';
import './contact.css';

function Contact() {

  const [userData, setUserData] = useState({
  });
  const aboutPage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.Error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    aboutPage();
  }, []);




  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSGAC4LKtQVBbuA-WBhEv2imWAgcuZVrpCg&usqp=CAU"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 978-1742575</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhPTSZF3KF09ZFstxHOpeWKzJgw2wlgq6yw&usqp=CAU"
                  alt="Email pic"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">manoj@gmail.com</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJ0vh9_E8szMjh5Slv7KRHtGTmRcbVAazJw&usqp=CAU"
                  alt="Address Pic"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Pahgwara, Punjab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get In Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="true"
                      value={userData.name}
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required="true"
                      value={userData.email}
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      required="true"
                      value={userData.phone}
                    />
                  </div>
                  <div className="contact_form_content mt-4">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      className="text_field contact_form_message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className=" button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
