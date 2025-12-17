import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Video, Coffee, Mail } from "lucide-react";
import { send, init } from "@emailjs/browser";

const projects = [
  {
    title: "Traffic Violation Detection System",
    description:
      "A computer vision-based system that automatically detects traffic violations such as triple riding, helmet absence, and red-light jumping from CCTV footage using deep learning and OpenCV. The model performs object detection and classification to assist traffic authorities in enforcing road safety.",
    image: "\\src\\assets\\traffic_violation_detection.png",
    github: "https://github.com/mythrhyth/traffic-violation-detection",
    demo: "https://youtu.be/owq0NMS5mEo", 
    coffee: "https://www.buymeacoffee.com/mythrhyth",
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "YOLO", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }, 
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  }
,
  {
    title: "Hybrid RAG",
    description:
      "A Retrieval-Augmented Generation (RAG) system that combines vector and keyword-based search for enhanced information retrieval.",
    image: "https://via.placeholder.com/400x250?text=Hybrid+RAG",
    github: "https://github.com/mythrhyth/hybrid-rag",
    demo: "https://youtu.be/demo-link",
    coffee: "https://www.buymeacoffee.com/mythrhyth",
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "LangChain", logo: "https://langchain.com/images/og-image.png" },
      { name: "FAISS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/faiss/faiss-original.svg" },
      { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
    ],
  },
  {
    title: "Medical Center Website for university with intranet deployment",
    description:
      "A comprehensive website for a university medical center, featuring appointment scheduling, health resources, and intranet deployment for staff communication.",
    image: "\\src\\assets\\image.png",
    demo: "https://youtu.be/VDxDI-JHkk8",
    requestCode: true, 
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
      {
        name: "Saiful Shaown",
        profile: "https://github.com/mdsaifulshaown",
        avatar: "https://avatars.githubusercontent.com/u/148055446?v=4",
      },
      {
        name: "Kunal Kumar",
        profile: "https://github.com/kunal",
        avatar: "https://avatars.githubusercontent.com/u/4?v=4",
      },
    ],
    tech: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Hallucination Detection System",
    description:
      "A research-driven project using hallucination injection and reasoning benchmarking to detect reasoning hallucinations in LLMs.",
    image: "\\src\\assets\\HALLUCINATION_DETECTION.png",
    github: "https://github.com/mythrhyth/hallucination-detection",
    demo: "https://youtube.com/shorts/8poxQailL80",
    coffee: "https://www.buymeacoffee.com/mythrhyth",
    requestCode: true,
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
      {
        name: "Ishwor Raj Pokhrel",
        profile: "https://github.com/Ishwor-git",
        avatar: "https://avatars.githubusercontent.com/u/65589785?v=4",
      },
    ],
    tech: [
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
    ],
  },
  {
    title: "Stock Price Prediction App",
    description:
      "Predicts real-time stock movements using ML models integrated with a Streamlit dashboard.",
    image: "https://via.placeholder.com/400x250?text=Stock+App",
    github: "https://github.com/mythrhyth/stock-predictor",
    demo: "https://youtu.be/demo-link",
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Numpy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    ],
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "An automated attendance system using facial recognition technology built with OpenCV and Python.",
    image: "https://via.placeholder.com/400x250?text=Face+Recognition+App",
    github: "https://github.com/mythrhyth/face-recognition-attendance",
    demo: "https://youtu.be/demo-link",
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/yourusername",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "face_recognition", logo: "https://avatars.githubusercontent.com/u/7553045?s=200&v=4" },
    ],
  },
  {
    title: "Brain Tumor Detection",
    description:
      "A medical imaging project that detects brain tumors from MRI scans using deep learning techniques.",
    image: "https://via.placeholder.com/400x250?text=Brain+Tumor+Detection",
    github: "https://github.com/mythrhyth/brain-tumor-detection",
    demo: "https://youtu.be/demo-link",
    coffee: "https://www.buymeacoffee.com/mythrhyth", // ☕ added
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
    ],
  },
  {
    title: "Community Forum Platform",
    description:
      "A full-stack community forum platform with user authentication, post creation, and real-time discussions.",
    image: "https://via.placeholder.com/400x250?text=Community+Forum",
    github: "https://github.com/mythrhyth/community-forum",
    demo: "https://youtu.be/demo-link",
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "JWT", logo: "https://cdn.iconscout.com/icon/free/png-256/json-web-token-226053.png" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    title: "Mobile App for Personal Loan Management",
    description:
      "A mobile application that helps users manage personal loans, track payments, and calculate interest.",
    image: "https://via.placeholder.com/400x250?text=Loan+Management+App",
    github: "https://github.com/mythrhyth/loan-management-app",
    demo: "https://youtu.be/demo-link",
    contributors: [
      {
        name: "Rhythm Bhetwal",
        profile: "https://github.com/mythrhyth",
        avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
      },
    ],
    tech: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Expo", logo: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
  title: "LSTM Story Generator",
  description:
    "An AI-powered story and poem continuation app built using LSTM networks. It generates creative continuations of user prompts and is deployed with a Streamlit interface for easy interaction.",
  image: "\\src\\assets\\LSTM_STORY.png",
  github: "https://github.com/mythrhyth/story_generator",
  demo: "https://youtu.be/he4Y3QM78BM",
  coffee: "https://www.buymeacoffee.com/mythrhyth", // optional
  contributors: [
    {
      name: "Rhythm Bhetwal",
      profile: "https://github.com/mythrhyth",
      avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
    },
  ],
  tech: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  ],
},
{
  title: "Alien Invasion Game",
  description:
    "A 2D space shooting game built using Python's Pygame library. The player controls a spaceship that must defend Earth from waves of invading aliens. The game features smooth controls, increasing difficulty levels, collision detection, and score tracking.",
  image: "\\src\\assets\\alien_invasion.png",
  github: "https://github.com/mythrhyth/alien-invasion",
  demo: "https://www.youtube.com/watch?v=aewbo9MOZjc", // Replace with real gameplay demo if available
  coffee: "https://www.buymeacoffee.com/mythrhyth",
  contributors: [
    {
      name: "Rhythm Bhetwal",
      profile: "https://github.com/mythrhyth",
      avatar: "https://avatars.githubusercontent.com/u/100419159?v=4",
    },
  ],
  tech: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OOP", logo: "https://cdn-icons-png.flaticon.com/512/6489/6489547.png" },
    { name: "Game Design", logo: "https://cdn-icons-png.flaticon.com/512/924/924915.png" },
  ],
}

];


export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) init(publicKey);
  }, []);

  const handleCodeClick = (proj) => {
    if (proj.requestCode) {
      setSelectedProject(proj);
      setShowModal(true);
    } else if (proj.github) {
      window.open(proj.github, "_blank");
    }
  };

  const handleSendEmailRequest = async () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const toEmail = "rhythmbhetwal77@gmail.com";
    const projectTitle = selectedProject?.title || "Project";
    const body = `Hi Rhythm,\n\nI would like to request access to the code for your project: ${projectTitle}.\n\nThank you!`;

    if (serviceId && templateId && publicKey) {
      setSending(true);
      try {
        const templateParams = {
          to_email: toEmail,
          project_title: projectTitle,
          message: body,
        };
        await send(serviceId, templateId, templateParams, publicKey);
        setSendStatus("sent");
        setTimeout(() => {
          setShowModal(false);
          setSendStatus(null);
        }, 1200);
      } catch (err) {
        setSendStatus("error");
      } finally {
        setSending(false);
      }
    } else {
      const mailto = `mailto:${toEmail}?subject=${encodeURIComponent("Request for Code Access")}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    }
  };

  return (
    <section id="projects" className="w-11/12 max-w-5xl mx-auto py-16">
      <h2 className="text-3xl text-pink-300 mb-8 font-semibold text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#0b0b0b] to-[#131313] rounded-2xl shadow-md p-4 hover:shadow-lg hover:shadow-pink-400/25 transition-transform transform hover:-translate-y-1 mx-auto md:w-3/4 lg:w-2/3 md:min-h-56"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <img
                src={proj.image ? proj.image.replace(/\\\\/g, "/") : "https://via.placeholder.com/400x250?text=No+Image"}
                alt={proj.title || "Project image"}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://via.placeholder.com/400x250?text=Image+Not+Found";
                }}
                className="w-full md:w-36 lg:w-40 h-56 md:h-64 object-cover object-center rounded-lg flex-shrink-0"
              />

              <div className="flex-1">
                <h3 className="text-xl text-pink-300 font-semibold mb-2">
                  {proj.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm">{proj.description}</p>

                {/* Tech Stack as pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech?.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-[#0f0f0f] border border-gray-800 text-gray-200 text-xs px-2 py-1 rounded-full"
                    >
                      <img src={tech.logo} alt={tech.name} className="w-4 h-4 rounded-sm" />
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center -space-x-2">
                    {proj.contributors?.map((person, index) => (
                      <a
                        key={index}
                        href={person.profile}
                        target="_blank"
                        rel="noreferrer"
                        title={person.name}
                      >
                        <img
                          src={person.avatar}
                          alt={person.name}
                          className="w-8 h-8 rounded-full border-2 border-[#0b0b0b] hover:scale-110 transition-transform"
                        />
                      </a>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleCodeClick(proj)}
                      className="flex items-center gap-2 bg-transparent border border-pink-400 text-pink-300 px-3 py-1 rounded-lg text-sm hover:bg-pink-400 hover:text-black transition"
                    >
                      <Github size={16} /> Code
                    </button>

                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-pink-400 text-black px-3 py-1 rounded-lg text-sm hover:bg-pink-300 transition"
                      >
                        <Video size={16} /> Demo
                      </a>
                    )}

                    {proj.coffee && (
                      <a
                        href={proj.coffee}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm hover:opacity-90 transition"
                      >
                        <Coffee size={14} /> Buy
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Email Request */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-[#1e1e1e] p-6 rounded-2xl w-11/12 max-w-md shadow-lg text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-pink-300 text-xl font-semibold mb-3">
                Request Access to Code
              </h3>
              <p className="text-gray-300 mb-4">
                The code for <span className="text-pink-400">{selectedProject?.title}</span> is private.  
                Please send an email request to get access.
              </p>
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={handleSendEmailRequest}
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 bg-pink-400 text-black px-4 py-2 rounded-xl font-medium hover:bg-pink-300 transition disabled:opacity-60"
                >
                  <Mail size={18} />
                  {sending ? "Email sending" : "Send Email"}
                </button>

                {sendStatus === "sent" && (
                  <span className="text-sm text-green-400">Email sent</span>
                )}

                {sendStatus === "error" && (
                  <span className="text-sm text-red-400">Failed to send. Try mail client.</span>
                )}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="block mx-auto mt-4 text-gray-400 hover:text-pink-300 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
