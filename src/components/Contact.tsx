import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_atoevge",        
        "template_uei4sku",       
        e.currentTarget,
        "DIC4ePpsa9iNZwJnC"    
      )
      .then(
        () => {
          setSubmitted(true);
          e.currentTarget.reset();
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project or opportunity? Let’s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Details
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:pradumnpathak1609@gmail.com"
                className="flex items-center gap-4 p-4 bg-red-500 text-white rounded-lg hover:scale-105 transition"
              >
                <Mail /> pradumnpathak1609@gmail.com
              </a>

              <a
                href="https://github.com/pradumn1609"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-slate-800 text-white rounded-lg hover:scale-105 transition"
              >
                <Github /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/pradumnpathak"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
              >
                <Linkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <form onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:bg-green-600"
            >
              {submitted ? (
                <>
                  <CheckCircle /> Message Sent!
                </>
              ) : (
                <>
                  <Send /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
