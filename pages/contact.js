
import { useState } from "react";
import { CONTACT_FORM_ENDPOINT } from "../config";

async function postContactForm(data) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response;
}

// This is a partially complete contact form, to show the basics of
// React useState to handle form data in a react app, which is a very common
// requirement. Notice how we listen to event handlers like in standard JavaScript
// And then we store our data using useState
// Also notice that useState, when initialized, returns an array of:
// i) the current state
// ii) a function to create a new state
// Pay attention to how both of these are used, as this is a simple example of
// The primary way of managing data/state in React
export default function ContactPage() {

  const [formData, setFormData] = useState({});
  const [formResponseStatus, setFormResponseStatus] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await postContactForm(formData);
    setFormResponseStatus(response.status);
  }

  function handleChange(event) {
    if (event.target.id === "form-name") {
      const name = event.target.value;
      setFormData(Object.assign(formData, { name }))
    }
    if (event.target.id === "form-email") {
      const email = event.target.value;
      setFormData(Object.assign(formData, { email }))
    }
    if (event.target.id === "form-comment") {
      const comment = event.target.value;
      setFormData(Object.assign(formData, { comment }))
    }
  }

  function handleSent(formResponseStatus) {
    const d = document.getElementById("form-msg");
    if (formResponseStatus === 200){
      d.textContent = "Your message has been deliverd";
    }
    else{
      d.textContent = "Something went wrong, Try again later";
    }
  }
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          
        </div>
        <div className="content">
          <div id="form-msg">Contact us for any feedback you have</div>
        {formResponseStatus ?
            <div>{handleSent(formResponseStatus)}</div> :
            <form onSubmit={handleSubmit}>
              <input id="form-name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
              <input id="form-email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
              <textarea id="form-comment" placeholder="Your comment" value={formData.comment} onChange={handleChange}></textarea>
              <button type="submit" id="form-button">Send</button>
            </form>
          }
        </div>
      </div>
    </div >
  )
}
