import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.707772408416!2d77.34294296367392!3d28.604159871706845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5110992b491%3A0x2af7233273358e30!2sSector%2055%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1688391718890!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{border:"0"}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="home"
      ></iframe>
      <div className="container">
        <div  className="contact-form">
          <form  className="contact-inputs" action="https://formspree.io/f/xyyqgkdk" method="POST">
            <input
            style={{borderRadius:"12px"}}
              type="text"
              name="usename"
              placeholder="Username"
              required
              autoComplete="off"
            />

            <input
            style={{borderRadius:"12px"}}
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <textarea
            style={{borderRadius:"12px"}}
              name="Message"
              cols="30"
              placeholder="Enter the message"
              required
              autoComplete="off"
              rows="10"
            ></textarea>
            <input style={{borderRadius:"12px"}} type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
