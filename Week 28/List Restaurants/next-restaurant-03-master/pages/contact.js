export default function Contact() {
  return (
    <>
      <h3>Enter your name</h3>
      <input type="text" placeholder="Name..."></input>
      <h3>Enter your email</h3>
      <input type="text" placeholder="Email..."></input>
      <h3>Message:</h3>
      <textarea id="message" placeholder="Message..."></textarea>
      <br />
      <button
        onClick={() => {
          var message = document.getElementById("message");
          alert("Message sent");
          message.value = "";
        }}
      >
        Send
      </button>
    </>
  );
}
