import { ExternalLink, Github, Star, Code2 } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, stars }) {


  return (
    <Card className={`overflow-hidden font-inter hover:shadow-lg transition-all duration-300 group`}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center p-8">
              <Code2 className="w-16 h-16 mx-auto mb-2 opacity-30" />
              <p className="text-sm opacity-50">Project Screenshot</p>
            </div>
          </div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {liveUrl && (
            <Button
              size="sm"
              className="gap-2 hover:shadow-md"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="secondary"
              className="gap-2 hover:shadow-md"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className={`flex items-start justify-between mb-3`}>
          <h3 className="text-xl font-semibold text-[#292E39]">{title}</h3>
          {stars && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-[#EA580B] text-orange-500" />
              <span>{stars}</span>
            </div>
          )}
        </div>

        <p className="text-muted-foreground font- mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Project() {
  const projects = [
    {
      title: "WhatsApp Clone",
      description: "WhatsApp-likely Clone Full Stack MERN project designed with Socket.io to manage messages, reactions and online/offline status real-time. ",
      image: "/whatsapp_image_01.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Twillo", "SendGrid"],
      liveUrl: "https://whatsapp-clone-mern-seven.vercel.app/",
      githubUrl: "https://github.com/ahmedali839/Project-WhatsApp-Clone-MERN-stack/",
      stars: 234,
    },
    {
      title: "Manager's Dashboard App",

      description:
        "Branch Manager dashboard not just todo list, it Actually flow the record of each employer between frontend and backend and store data permanently in MongoDB.",
      image:
        "/manager_dashboard_01.jpg",
      technologies: ["Express.js", "API Integration", "jsonwebtoken", "public & private account", "React.js", "MongoDB", "Tailwind",],
      liveUrl: "https://managment-dashboard-mern.vercel.app/",
      githubUrl: "https://github.com/ahmedali839/Managment-Dashboard-Project/",
      stars: 156,
    },
    {
      title: "Uber Clone",
      description:
        "Uber clone for mobile users, used google Map Api for live tracking and location suggestions to role based access either Rider or Public.",
      image: "/Untitled design (2).png", // must be inside public/projects/
      technologies: ["React", "Node.js", "Google Map API", "Authentication"],
      liveUrl: "https://uber-clone-mern-stack.vercel.app/",
      githubUrl: "https://github.com/ahmedali839/Project-Uber-Clone-MERN-Stack",
      stars: 89,
    },
    {
      title: "Coming soon...",
      description:
        "Social Media account analytic tracker which will tell you the real-time ,  7-day/monthly analytics of your account.",
      image: "/data-analytics 1.png", // must be inside public/projects/
      technologies: ["Node.js", "Express", "MongoDB"],
      // liveUrl: "https://demo.example.com",
      // githubUrl: "https://github.com/example/ai-tool",
      stars: 1,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#292E39]">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:shadow-md"
            onClick={() => {
              window.open("https://github.com/ahmedali839/", "_blank")
            }}>
            <Github className="w-5 h-5" />
            View All Projects on Github
          </Button>
        </div>
      </div>
    </section>
  );
}
