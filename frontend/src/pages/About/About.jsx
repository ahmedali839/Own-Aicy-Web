import React from 'react'
import Skills_Card from './skill-card'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { DotSquare, ExternalLink, Rows3, ScanSearch } from 'lucide-react'

const About = () => {

  const resumeUrl = "/ahmed_cv_updated.pdf"

  const showResume = () => {
    const resumeWindow = window.open(resumeUrl, "_blank")
    if (!resumeWindow) {
      alert("Popup blocked! Please allow popups for this site.")
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Ahmed_CV_Updated.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }



  return (
    <>
      <div>
        <div className="container flex justify-center items-center mx-auto py-2 px-2">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            {/* <section className="w-1/2 max-w-6xl mx-auto px-6 py-20 text-center"> */}
            <div className="text-center sm:text-left">
              {/* <section> */}
              <section className="max-w-6xl mx-auto px-5 py-20 text-center">
                <h3 className="text-lg md:text-xl text-gray-700 leading-relaxed text-center sm:mx-0 max-w-4xl">
                  Welcome to my personal page, my name is{" "}
                  <span className="text-orange-500 font-semibold">Ahmed Yar</span>.
                  I'm from ISL, Pakistan. My coding journey began when I used to come back from college and start learning and writing code at home.
                  I started with <span className="font-medium">HTML</span> and now I am a{" "}
                  <span className="text-orange-500 font-semibold">Full Stack MERN Developer</span>.
                  Currently, I am seeking opportunities in a{" "}
                  <span className="font-medium">reputed software company</span> for an internship or entry-level role — to grow, solve real-world problems, and work with kindness and passion.

                </h3>

                <p className="mt-6 text-gray-500 text-sm md:text-base text-center">
                  More information is mentioned below.
                </p>
                {/* </p> */}
              </section>
            </div>
            <div className="px-4 py-2 mx-auto text-center">
              {/* <div className="bg-gray-200 flex justify-center"> */}
              <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <div className="flex text-center justify-center gap-4">
                  {/* <a
                    // click={downloadResume}
                    href="/ahmed_cv_updated.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="justify-center text-center items-center px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-[#e85d04] transition-colors"
                  >
                  </a> */}

                  <Button
                    size="md"
                    className="px-4 py-2 gap-2 hover:shadow-md"
                    onClick={showResume}
                  >
                    <ScanSearch className='w-4 h-4' />
                    View Resume
                  </Button>


                  <Button
                    size="md"
                    className="gap-2 px-4 py-2 hover:shadow-md"
                    onClick={downloadResume}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Download Resume
                  </Button>

                </div>
              </section>
            </div>
          </div>
        </div>


        {/* Skills Section */}
        {/* <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML5", "CSS3", "TailwindCSS"].map(
              (skill, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
                >
                  <p className="font-medium text-gray-700">{skill}</p>
                </div>
              )
            )}
          </div>
        </section> */}

        <Skills_Card />
      </div>
    </>
  )
}

export default About










