import React from 'react'

function Contact() {
  return (
    <div className='form-div'>
      <form action='https://formspree.io/f/myyayajq' method='POST'>
        <label>
          Your email:
          <input type='email' name='email' />
        </label>
        <label>
          Your message:
          <textarea name='message'></textarea>
        </label>

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
