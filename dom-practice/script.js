var main = document.querySelector("main");
var users = [
  {
    fullName: "Aarav Sharma",
    image: "https://i.pravatar.cc/300?img=12",
    profession: "Frontend Developer",
    description: "Passionate frontend developer who loves building interactive and responsive websites.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    fullName: "Aditya Mishra",
    image: "https://i.pravatar.cc/300?img=11",
    profession: "Software Engineer",
    description: "Software engineer passionate about solving problems and building efficient applications.",
    tags: ["Java", "Python", "DSA", "Git"]
  },
  {
    fullName: "Kavya Sharma",
    image: "https://i.pravatar.cc/300?img=48",
    profession: "Product Designer",
    description: "Product designer focused on creating meaningful digital products with simple user experiences.",
    tags: ["Figma", "Wireframing", "Prototyping", "UI/UX"]
  },
  {
    fullName: "Vikram Desai",
    image: "https://i.pravatar.cc/300?img=14",
    profession: "Cybersecurity Analyst",
    description: "Security enthusiast helping organizations protect their systems, networks, and digital information.",
    tags: ["Networking", "Linux", "Ethical Hacking", "Security"]
  },
  {
    fullName: "Riya Malhotra",
    image: "https://i.pravatar.cc/300?img=46",
    profession: "Fashion Designer",
    description: "Fashion designer who enjoys experimenting with colors, fabrics, and modern clothing styles.",
    tags: ["Fashion", "Illustration", "Styling", "Creativity"]
  },
  {
    fullName: "Dev Patel",
    image: "https://i.pravatar.cc/300?img=17",
    profession: "DevOps Engineer",
    description: "DevOps engineer interested in automation, cloud infrastructure, and deployment workflows.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    fullName: "Simran Kaur",
    image: "https://i.pravatar.cc/300?img=41",
    profession: "Business Analyst",
    description: "Business analyst who connects business goals with technology-driven solutions.",
    tags: ["Excel", "SQL", "Analytics", "Communication"]
  },
  {
    fullName: "Karan Malhotra",
    image: "https://i.pravatar.cc/300?img=18",
    profession: "Game Developer",
    description: "Game developer passionate about creating interactive games and immersive experiences.",
    tags: ["Unity", "C#", "Game Design", "3D"]
  },
  {
    fullName: "Pooja Agarwal",
    image: "https://i.pravatar.cc/300?img=43",
    profession: "HR Manager",
    description: "People-focused HR professional who enjoys building positive workplace cultures and strong teams.",
    tags: ["Recruitment", "Leadership", "Management", "Communication"]
  },
  {
    fullName: "Aryan Verma",
    image: "https://i.pravatar.cc/300?img=52",
    profession: "Cloud Engineer",
    description: "Cloud engineer interested in designing reliable, scalable, and secure cloud infrastructure.",
    tags: ["Azure", "AWS", "Cloud Computing", "Linux"]
  },
  {
    fullName: "Diya Kapoor",
    image: "https://i.pravatar.cc/300?img=33",
    profession: "Video Editor",
    description: "Video editor who loves turning raw footage into engaging visual stories.",
    tags: ["Premiere Pro", "After Effects", "Editing", "Motion Graphics"]
  },
  {
    fullName: "Ananya Gupta",
    image: "https://i.pravatar.cc/300?img=49",
    profession: "Content Creator",
    description: "Creative content creator who loves sharing knowledge, lifestyle tips, and inspiring stories.",
    tags: ["Instagram", "YouTube", "Video Editing", "Storytelling"]
  },
  {
    fullName: "Rohan Kapoor",
    image: "https://i.pravatar.cc/300?img=60",
    profession: "Data Analyst",
    description: "Data enthusiast who transforms complex datasets into meaningful insights and reports.",
    tags: ["Python", "SQL", "Excel", "Power BI"]
  },
  {
    fullName: "Meera Joshi",
    image: "https://i.pravatar.cc/300?img=45",
    profession: "Digital Marketer",
    description: "Digital marketing professional passionate about growing brands through creative strategies.",
    tags: ["SEO", "Social Media", "Google Ads", "Marketing"]
  },
  {
    fullName: "Arjun Malhotra",
    image: "https://i.pravatar.cc/300?img=68",
    profession: "App Developer",
    description: "Mobile app developer who enjoys creating smooth and user-friendly mobile experiences.",
    tags: ["Flutter", "Dart", "Firebase", "Android"]
  },
  {
    fullName: "Ishita Rao",
    image: "https://i.pravatar.cc/300?img=32",
    profession: "Photographer",
    description: "Professional photographer who loves capturing beautiful moments and telling stories through pictures.",
    tags: ["Photography", "Lightroom", "Editing", "Creativity"]
  },
  {
    fullName: "Priya Verma",
    image: "https://i.pravatar.cc/300?img=47",
    profession: "UI/UX Designer",
    description: "Creative designer focused on creating beautiful and user-friendly digital experiences.",
    tags: ["Figma", "UI Design", "UX Research", "Prototyping"]
  },
  {
    fullName: "Rahul Mehta",
    image: "https://i.pravatar.cc/300?img=13",
    profession: "Backend Developer",
    description: "Backend developer interested in building scalable applications and managing databases.",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },
  {
    fullName: "Sneha Patel",
    image: "https://i.pravatar.cc/300?img=44",
    profession: "Graphic Designer",
    description: "Visual storyteller who enjoys creating unique branding and engaging digital designs.",
    tags: ["Photoshop", "Illustrator", "Canva", "Branding"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://i.pravatar.cc/300?img=15",
    profession: "Full Stack Developer",
    description: "Tech enthusiast who enjoys developing complete web applications from frontend to backend.",
    tags: ["JavaScript", "React", "Node.js", "MySQL"]
  }
];


var sum = '';
users.forEach(function(elem){
  sum = sum +`<div class="card">
        <img
          src="${elem.image}"
          alt=""
        />
        <h2>${elem.fullName}</h2>
        <h4>${elem.profession}</h4>
        <p>
          ${elem.description}
        </p>
      </div>`;
  
})


var c1 = Math.floor(Math.random()*256);
var c2 = Math.floor(Math.random()*256);
var c3 = Math.floor(Math.random()*256);

main.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
main.innerHTML=sum;