// complex real examples based on combination of array and object

const profiles = [
    {
        firstName: "Vihaan",
        lastName: "Mehta",
        age: 28,
        experience: 6,
        skills: ["TypeScript", "CI/CD"],
        position: "Automation Tester",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 29,
        experience: 11,
        skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
        position: "Technical Lead",
    },
    {
        firstName: "Vihaan",
        lastName: "Deshmukh",
        age: 32,
        experience: 1,
        skills: ["Python", "TypeScript"],
        position: "Software Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Pandey",
        age: 31,
        experience: 14,
        skills: ["Python", "Cypress"],
        position: "Systems Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Deshmukh",
        age: 25,
        experience: 1,
        skills: ["Java", "Playwright", "JavaScript", "SQL"],
        position: "Systems Engineer",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 33,
        experience: 3,
        skills: ["JavaScript", "Java", "Docker", "TypeScript"],
        position: "Full-Stack Developer",
    },
    {
        firstName: "Pranav",
        lastName: "Joshi",
        age: 24,
        experience: 2,
        skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
        position: "Data Analyst",
    },
    {
        firstName: "Rohan",
        lastName: "Nayak",
        age: 24,
        experience: 10,
        skills: ["JavaScript", "GitHub Actions", "Playwright"],
        position: "Backend Developer",
    },
    {
        firstName: "Arjun",
        lastName: "Nayak",
        age: 36,
        experience: 4,
        skills: ["Java", "Playwright", "Docker"],
        position: "Systems Engineer",
    },
    {
        firstName: "Vikram",
        lastName: "Joshi",
        age: 34,
        experience: 1,
        skills: ["python"],
        position: "Full-Stack Developer",
    },
];


// i want to get the name of persons who have cypress skill in there profile

profiles.forEach((el, index, arr) => {
    // console.log(el)
    if (el.skills.includes("Cypress")) {
        console.log(`${el.firstName} ${el.lastName}`)
    }
})


//  i want the data of all the person who has experince greATER 3 years 


let above3 = profiles.filter((el,index,arr)=>{
    return el.experience>3
})

console.log(above3)

above3.forEach((el,index,arr)=>{
    console.log(el.firstName +" "+ el.lastName)
})




