import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCode, FaGithub, FaLinkedin } from "react-icons/fa"

export default function PersonalHomepage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <img src={"/Self_photo.jpg"} className="rounded-full "/>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Chenou Wu</h1>
            <p className="mt-4 text-xl text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
  <div className="px-6 py-8 sm:p-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-9">About Me</h2>
    <p className="text-lg text-gray-600 leading-relaxed">
      👋 Hello! I am a motivated and detail-oriented <strong className="text-gray-900">Full Stack Developer</strong> actively seeking new opportunities.  
      I have a strong foundation in <strong className="text-gray-900">React, Node.js, and modern CSS frameworks</strong>, with a passion for building 
      <strong className="text-gray-900"> scalable, responsive, and user-friendly </strong> applications.  
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mt-3">
      🚀 I thrive in collaborative environments and enjoy tackling complex challenges. My expertise includes 
      <strong className="text-gray-900"> front-end development, back-end architecture, API design, and database management</strong>.  
      I am always eager to learn and stay updated with the latest industry trends.
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mt-3">
      📩 Currently, I am open to <strong className="text-gray-900">full-time, contract, and freelance</strong> opportunities.  
      Feel free to connect with me to discuss how I can contribute to your team!
    </p>
  </div>
</div>


            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="mt-5">
                  <div className="flex items-center mt-2">
                    <FaUser className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">Chenou Wu</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaEnvelope className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">woo5656@outlook.com</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">Halifax, NS</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaGithub className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <a href="https://github.com/ChenouWu" className="text-blue-500 hover:underline">
                      github.com/chenouwu
                    </a>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaLinkedin className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <a href="https://www.linkedin.com/in/chenou-wu-8792aa28b/" className="text-blue-500 hover:underline">
                      linkedin.com/in/chenouwu
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
                <div className="mt-5">
                  <div className="flex items-center mt-2">
                    <FaCode className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">React, JavaScript, Express, Node.js</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaCode className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">JavaScript,HTML, CSS</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaCode className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">Tailwind CSS, SASS, Styled Components</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaCode className="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">Git, GitHub,</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

