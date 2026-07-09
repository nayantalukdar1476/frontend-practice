let users = [
  {
  image: "https://images.unsplash.com/photo-1783512528338-39681f25e27e?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  fullName: "Lucas Bennett",
  profession: "Cloud Engineer",
  tags: ["AWS", "Azure", "Kubernetes", "Terraform"],
  description:
    "Designs and manages scalable cloud infrastructure with a focus on reliability, automation, and cost optimization."
},
{
  image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
  fullName: "Mia Rodriguez",
  profession: "Software Tester",
  tags: ["QA", "Automation", "Selenium", "Jest"],
  description:
    "Ensures software quality through manual and automated testing, identifying bugs before products reach users."
},
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    fullName: "Ethan Carter",
    profession: "Frontend Developer",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Frontend developer passionate about building responsive, accessible, and user-friendly web applications.",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    fullName: "Sophia Williams",
    profession: "UI/UX Designer",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    description:
      "Creates clean, modern interfaces focused on usability and exceptional user experiences.",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    fullName: "James Anderson",
    profession: "Backend Developer",
    tags: ["Node.js", "Express", "MongoDB", "API"],
    description:
      "Builds scalable backend systems and REST APIs with a focus on performance and security.",
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
    fullName: "Olivia Brown",
    profession: "Data Scientist",
    tags: ["Python", "Machine Learning", "Pandas", "AI"],
    description:
      "Transforms raw data into meaningful insights using machine learning and statistical analysis.",
  },
  {
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600",
    fullName: "Daniel Martinez",
    profession: "DevOps Engineer",
    tags: ["Docker", "AWS", "CI/CD", "Linux"],
    description:
      "Automates deployment pipelines and manages cloud infrastructure for reliable software delivery.",
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    fullName: "Emma Johnson",
    profession: "Mobile App Developer",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    description:
      "Develops cross-platform mobile applications with smooth performance and modern UI.",
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    fullName: "Michael Harris",
    profession: "Cybersecurity Analyst",
    tags: ["Security", "Networking", "Risk"],
    description:
      "Protects organizations by identifying vulnerabilities and implementing strong security practices.",
  },
  {
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
    fullName: "Ava Thompson",
    profession: "Product Manager",
    tags: ["Agile", "Strategy", "Leadership", "Product"],
    description:
      "Coordinates cross-functional teams to deliver impactful products that solve real customer problems.",
  },
  {
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
    fullName: "William Scott",
    profession: "Full Stack Developer",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    description:
      "Builds complete web applications from intuitive frontend interfaces to scalable backend services.",
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    fullName: "Isabella Moore",
    profession: "Digital Marketing Specialist",
    tags: ["SEO", "Content", "Analytics", "Social Media"],
    description:
      "Helps brands grow online through data-driven marketing strategies and engaging content.",
  },
];

let main = document.querySelector("main");
let c1 = Math.floor(Math.random()*255);
let c2 = Math.floor(Math.random()*255);
let c3 = Math.floor(Math.random()*255);
main.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

let sum = "";
users.forEach(function (elem) {
  sum =
    sum +
    `<div>
        <img src=${elem.image}alt="">
        <h2>${elem.fullName}</h2>
        <h5>${elem.profession}</h5>
        <h6>${elem.tags}</h6>
        <p>${elem.description}</p>
      </div>`;

    });
    main.innerHTML = sum;
