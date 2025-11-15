import React from 'react'
import Skills_Card from './skill-card'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { ExternalLink, ScanSearch } from 'lucide-react'
import { useTheme } from '../../stores/useTheme'

const About = () => {

  const resumeUrl = "/ahmed-cv-updated.pdf"

  const { theme } = useTheme()

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
      <div className={`${theme === "dark" ? "bg-[#0a0a0afb]" : ""}`}>
        <div className={`container flex justify-center items-center mx-auto py-2 px-2`}>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="text-center sm:text-left">
              {/* <section> */}
              <section className="max-w-6xl mx-auto px-5 py-20 text-center">
                <h3 className={`${theme === "dark" ? "text-[#FFFFFF]" : "text-gray-700"} text-lg md:text-xl leading-relaxed text-center sm:mx-0 max-w-4xl`}>
                  Big Welcome from <span className={` font-mono ${theme === "dark" ? "text-orange-400" : "text-orange-500"} `}>AICY </span>  to you,
                  I'm <span className={`${theme === "dark" ? "text-orange-400" : "text-orange-500"} font-mono font-semibold`}>Ahmed Yar</span>.
                  I'm from Isl, Pakistan. My coding journey began when I used to come back from college and start learning and writing code at home.
                  I started with <span className="font-medium">HTML</span> and now I am a{" "}
                  <span className={`${theme === "dark" ? "text-orange-400" : "text-orange-500"} font-semibold font-mono `}>Full Stack MERN Developer</span>.
                  Currently, I am seeking opportunities in a{" "}
                  <span className="font-medium">reputed software company</span> for an internship or entry-level role — to grow, solve real-world problems, and work with kindness and passion.

                </h3>

                <p className={`mt-6 ${theme === "dark" ? "text-[#cccccc]" : "text-gray-500"} text-sm md:text-base text-center`}>
                  More information is mentioned below.
                </p>
              </section>
            </div>
            <div className="px-4 py-2 mx-auto text-center">
              <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <div className="flex text-center justify-center gap-4">

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

        <Skills_Card />
      </div>
    </>
  )
}

export default About
