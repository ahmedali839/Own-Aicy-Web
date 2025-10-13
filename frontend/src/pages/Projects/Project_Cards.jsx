// import { ExternalLink, Github, Star } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   liveUrl?: string;
//   githubUrl?: string;
//   stars?: number;
// }

// function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, stars }: ProjectCardProps) {
//   return (
//     <Card className="overflow-hidden hover-elevate transition-all duration-300 group">
//       {/* Project Image */}
//       <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
//         <div className="w-full h-full flex items-center justify-center text-muted-foreground">
//           <div className="text-center p-8">
//             <Code2 className="w-16 h-16 mx-auto mb-2 opacity-30" />
//             <p className="text-sm opacity-50">Project Screenshot</p>
//           </div>
//         </div>

//         {/* Overlay Buttons */}
//         <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//           {liveUrl && (
//             <Button 
//               size="sm" 
//               className="gap-2 hover-elevate active-elevate-2"
//               onClick={() => console.log(`Live demo: ${liveUrl}`)}
//               data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
//             >
//               <ExternalLink className="w-4 h-4" />
//               Live Demo
//             </Button>
//           )}
//           {githubUrl && (
//             <Button 
//               size="sm" 
//               variant="secondary"
//               className="gap-2 hover-elevate active-elevate-2"
//               onClick={() => console.log(`GitHub: ${githubUrl}`)}
//               data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
//             >
//               <Github className="w-4 h-4" />
//               Code
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Project Info */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-semibold">{title}</h3>
//           {stars && (
//             <div className="flex items-center gap-1 text-sm text-muted-foreground">
//               <Star className="w-4 h-4 fill-primary text-primary" />
//               <span>{stars}</span>
//             </div>
//           )}
//         </div>

//         <p className="text-muted-foreground mb-4 line-clamp-2">
//           {description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {technologies.map((tech) => (
//             <Badge 
//               key={tech} 
//               variant="secondary" 
//               className="text-xs"
//             >
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </div>
//     </Card>
//   );
// }

// // Import icon for placeholder
// import { Code2 } from "lucide-react";

// export default function Projects() {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Full-featured online shopping platform with real-time inventory, payment integration, and admin dashboard. Handles 10k+ daily users.",
//       image: "/projects/ecommerce.jpg",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/ecommerce",
//       stars: 234,
//     },
//     {
//       title: "Task Management App",
//       description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
//       image: "/projects/taskmanager.jpg",
//       technologies: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/taskmanager",
//       stars: 156,
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Analytics dashboard for social media metrics with data visualization, automated reporting, and API integrations.",
//       image: "/projects/dashboard.jpg",
//       technologies: ["React", "Express", "Chart.js", "AWS"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/dashboard",
//       stars: 89,
//     },
//     {
//       title: "AI Content Generator",
//       description: "AI-powered content creation tool using GPT-4 for generating blogs, social posts, and marketing copy with SEO optimization.",
//       image: "/projects/ai-tool.jpg",
//       technologies: ["TypeScript", "OpenAI API", "MongoDB", "Docker"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/ai-tool",
//       stars: 312,
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white" id="projects">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Showcasing real-world applications built with modern technologies and best practices
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <ProjectCard key={project.title} {...project} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button 
//             size="lg" 
//             variant="outline"
//             className="gap-2 hover-elevate active-elevate-2"
//             onClick={() => console.log('View all projects clicked')}
//             data-testid="button-view-all-projects"
//           >
//             <Github className="w-5 h-5" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }






















// import { ExternalLink, Github, Star, Code2 } from "lucide-react";
// import { Card } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";
// import { Badge } from "../../components/ui/badge";

// function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, stars }) {
//   return (
//     <Card className="overflow-hidden hover-elevate transition-all duration-300 group">
//       {/* Project Image */}
//       <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
//         <div className="w-full h-full flex items-center justify-center text-muted-foreground">
//           <div className="text-center p-8">
//             <Code2 className="w-16 h-16 mx-auto mb-2 opacity-30" />
//             <p className="text-sm opacity-50">Project Screenshot</p>
//           </div>
//         </div>

//         {/* Overlay Buttons */}
//         <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
//           {liveUrl && (
//             <Button
//               size="sm"
//               className="gap-2 hover-elevate active-elevate-2"
//               onClick={() => console.log(`Live demo: ${liveUrl}`)}
//               data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
//             >
//               <ExternalLink className="w-4 h-4" />
//               Live Demo
//             </Button>
//           )}
//           {githubUrl && (
//             <Button
//               size="sm"
//               variant="secondary"
//               className="gap-2 hover-elevate active-elevate-2"
//               onClick={() => console.log(`GitHub: ${githubUrl}`)}
//               data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
//             >
//               <Github className="w-4 h-4" />
//               Code
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* Project Info */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-semibold">{title}</h3>
//           {stars && (
//             <div className="flex items-center gap-1 text-sm text-muted-foreground">
//               <Star className="w-4 h-4 fill-primary text-primary" />
//               <span>{stars}</span>
//             </div>
//           )}
//         </div>

//         <p className="text-muted-foreground mb-4 line-clamp-2">
//           {description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {technologies.map((tech) => (
//             <Badge
//               key={tech}
//               variant="secondary"
//               className="text-xs"
//             >
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default function Project() {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Full-featured online shopping platform with real-time inventory, payment integration, and admin dashboard. Handles 10k+ daily users.",
//       image: "data:image/jpeg;base64,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",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/ecommerce",
//       stars: 234,
//     },
//     {
//       title: "Task Management App",
//       description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUimgYiR7KGZSbOspAhJ5YQLcMwABmDdk_tA&s",
//       technologies: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/taskmanager",
//       stars: 156,
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Analytics dashboard for social media metrics with data visualization, automated reporting, and API integrations.",
//       image: "/projects/dashboard.jpg",
//       technologies: ["React", "Express", "Chart.js", "AWS"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/dashboard",
//       stars: 89,
//     },
//     {
//       title: "AI Content Generator",
//       description: "AI-powered content creation tool using GPT-4 for generating blogs, social posts, and marketing copy with SEO optimization.",
//       image: "/projects/ai-tool.jpg",
//       technologies: ["TypeScript", "OpenAI API", "MongoDB", "Docker"],
//       liveUrl: "https://demo.example.com",
//       githubUrl: "https://github.com/example/ai-tool",
//       stars: 312,
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white" id="projects">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Showcasing real-world applications built with modern technologies and best practices
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <ProjectCard key={project.title} {...project} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button
//             size="lg"
//             variant="outline"
//             className="gap-2 hover-elevate active-elevate-2"
//             onClick={() => console.log('View all projects clicked')}
//             data-testid="button-view-all-projects"
//           >
//             <Github className="w-5 h-5" />
//             View All Projects on GitHub
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


























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
              console.log("clicke dfdsffdffdfdfdf")
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
