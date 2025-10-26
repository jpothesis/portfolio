import React from "react";
import { Card } from "@/components/ui/card"; // ✅ keep if you're using shadcn/ui
// If not using shadcn, replace with your own Card component or a div with Tailwind classes

const timelineData = [
  {
    id: "1",
    type: "work",
    title: "Senior Frontend Engineer",
    organization: "Tech Company Inc.",
    period: "2023 - Present",
    description: "Leading frontend development and mentoring junior developers",
    details: [
      "Architected scalable React applications",
      "Improved performance by 40%",
      "Led team of 5 developers",
    ],
  },
  {
    id: "2",
    type: "education",
    title: "Master of Science in Computer Science",
    organization: "University of Technology",
    period: "2021 - 2023",
    description: "Specialized in Software Engineering and Web Technologies",
  },
  {
    id: "3",
    type: "work",
    title: "Full Stack Developer",
    organization: "Digital Solutions Ltd.",
    period: "2020 - 2023",
    description: "Developed and maintained full-stack web applications",
    details: [
      "Built 15+ production applications",
      "Implemented CI/CD pipelines",
      "Collaborated with design teams",
    ],
  },
  {
    id: "4",
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "State University",
    period: "2016 - 2020",
    description: "Graduated with honors, GPA: 3.8/4.0",
  },
  {
    id: "5",
    type: "work",
    title: "Junior Developer",
    organization: "StartUp Ventures",
    period: "2019 - 2020",
    description: "Contributed to frontend development and bug fixes",
    details: [
      "Learned modern web development practices",
      "Shipped 3 features",
    ],
  },
];

const Professional = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/30 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`relative md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-1.5 md:-translate-x-2 md:translate-y-6"></div>

                {/* Timeline Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="p-6 border border-gray-700 bg-gray-800/50 hover:shadow-blue-500/20 hover:shadow-lg transition-shadow duration-300 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.type === "work"
                            ? "bg-blue-600 text-white"
                            : "bg-purple-600 text-white"
                        }`}
                      >
                        {item.type === "work" ? "Work" : "Education"}
                      </span>
                      <span className="text-sm text-gray-400">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-blue-400 font-semibold mb-3">
                      {item.organization}
                    </p>
                    <p className="text-gray-300 mb-3">{item.description}</p>

                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
