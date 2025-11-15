import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { useTheme } from "../../stores/useTheme";

function SkillCard({ category, icon, skills }) {

    const { theme } = useTheme();

    return (
        <div className={`p-6 rounded-2xl shadow-md ${theme === "dark" ? "bg-[#0A0A0A]" : "bg-white"} hover:shadow-xl transition-all duration-300 border-t border-orange-300`}>
            <div className="flex items-center gap-3 mb-6">
                <div className={`${theme === "dark" && "text-white"} w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary`}>
                    {icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" && "text-white"}`}>{category}</h3>
            </div>

            <div className="space-y-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className={`${theme === "dark" && "text-gray-200"} font-medium text-sm`}>{skill.name}</span>
                            <span className={`text-xs text-gray-500 font-medium ${theme === "dark" && "text-[#afb1b9]"}`}>
                                {skill.level}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className={`${theme === "dark" ? "bg-[#fb8500]" : "bg-[#ff9822de]"} h-2 rounded-full transition-all duration-500`}
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills_Card() {
    const { theme } = useTheme();
    const skillCategories = [
        {
            category: "Frontend",
            icon: <Code2 className="w-6 h-6" />,
            skills: [
                { name: "React.js", level: 75 },
                { name: "JavaScript", level: 85 },
                { name: "Tailwind CSS", level: 90 },
                { name: "State Management", level: 75 },
            ],
        },
        {
            category: "Backend",
            icon: <Database className="w-6 h-6" />,
            skills: [
                { name: "Node.js & Express", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "RESTful APIs", level: 75 },
                { name: "Authentication & Security", level: 70 },
            ],
        },
        {
            category: "Tools & Practices",
            icon: <Wrench className="w-6 h-6" />,
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "Postman", level: 65 },
                { name: "VS Code", level: 70 },
                { name: "Code Review & Testing", level: 70 },
            ],
        },
    ];

    return (
        <section className={`${theme === "dark" ? "bg-[#1d1d1d50]" : "bg-gray-50"} py-20 px-4 id="skills"`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" && "text-[#dbebdd]"} `} >
                        Tech Stack
                    </h2>
                    <p className={`${theme === "dark" ? "text-[#adb5bd]" : "text-gray-600"} text-lg max-w-2xl mx-auto lg:w-full`}>

                        skill with line-graph are mentioned below, still trying to make skills some more better
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category) => (
                        <SkillCard key={category.category} {...category} />
                    ))}
                </div>
            </div>
        </section >
    );
}
