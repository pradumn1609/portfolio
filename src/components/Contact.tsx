import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:pradumnpathak1609@gmail.com',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/pradumn1609',
      color: 'bg-slate-800 hover:bg-slate-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com', // temporary until you set profile
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project or opportunity in mind?  
            Feel free to reach out — I usually respond quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Let’s Work Together
            </h3>

            <p className="text-slate-700 font-medium mb-4">
              📧 Email me directly at:{' '}
              <a
                href="mailto:pradumnpathak1609@gmail.com"
                className="text-blue-600 hover:underline"
              >
                pradumnpathak1609@gmail.com
              </a>
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you need a web developer for a project, help with a feature,
              or want to collaborate, I’m open to discussions and new opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg text-white ${link.color} transition-all duration-300 hover:scale-105 shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none"
                  placeholder="Briefly describe your project..."
                />
              </div>

              <p className="text-sm text-slate-500">
                This form is for initial contact. I’ll reply via email.
              </p>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:bg-green-600"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Submitted
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
