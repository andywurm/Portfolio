export interface Projects {
    projectName: string,
    projectLogo: string,
    projectImg: string,
    projectDate: string,
    projectWebsite?: string,
    projectRepository?: string,
    projectDescription: string,
    projectTech: string,
    status: string
}

const projects: Projects[] = [
    {
        projectName: "Flxlease",
        projectLogo: "flxlogo.png",
        projectImg: "FLX.png",
        projectDate: "July 2023 - Now",
        projectWebsite: "https://flxlease.com/",
        projectDescription: "Discover a new way to rent using flexible housing options.",
        projectTech: "React, TypeScript, HTML/CSS, GraphQL",
        status: 'Present'
    }
    ,
    {   
        projectName: "Let's Play Reviews",
        projectLogo: "controller.png",
        projectImg: "LPRSite.png",
        projectDate: "May 2023 - Now",
        projectWebsite: "https://letsplayreviews.onrender.com/",
        projectRepository: "https://github.com/andywurm/LetsPlayReviews",
        projectDescription: "Discover, rank and review your favorite games conveniently in a single location.",
        projectTech: "React, TypeScript, HTML/CSS, Django, Python",
        status: 'On Hold'
    },
    // {
    //     projectName: "Quoted",
    //     projectLogo: "quotes.png",
    //     projectImg: "QuotedMobile.png",
    //     projectDate: "June 2023",
    //     projectWebsite: "https://tapplychallenge.web.app/",
    //     projectRepository: "https://github.com/andywurm/TapplyChallenge",
    //     projectDescription: "(View on Mobile) A mobile app that allows users to view and post quotes.",
    //     projectTech: "Next.js, TypeScript, HTML/CSS, Firebase",
    //     status: '2023'
    // },
    {
        projectName: "Up To Skate",
        projectLogo: "skater.png",
        projectImg: "skateSite.png",
        projectDate: "Sep 2022 - Mar 2023",
        projectWebsite: "https://uptoskate.onrender.com/",
        projectRepository: "https://github.com/andywurm/UpToSkate",
        projectDescription: "Users can easily access a comprehensive hub that houses an array of figure skating information, including skater profiles, upcoming events, and past results. This centralized platform serves as the ultimate destination for all figure skating enthusiasts, providing a convenient experience for accessing a wealth of relevant information.",
        projectTech: "React, TypeScript, HTML/CSS, Node.js, Express.js, Sequelize, PostgreSQL",
        status: '2023'
    },
    {
        projectName: "Drama Tracker",
        projectLogo: "DramaTrack.png",
        projectImg: "DramaSite.png",
        projectDate: "Feb - May 2022",
        projectWebsite: "https://dramatracker.onrender.com/",
        projectRepository: "https://github.com/andywurm/DramaTracker",
        projectDescription: "Empowers users to effortlessly track their viewing progress of Japanese shows and movies, whether watched, in progress, or planned for the future. Users can delve into detailed information about the content and seamlessly curate their desired lists for each show or movie.",
        projectTech: "React, JavaScript, HTML/CSS, Node.js, Express.js, PostgreSQL, Sequelize",
        status: "2022"
    },
    {
        projectName: "Hobbies Hub",
        projectLogo: "HHLogo.png",
        projectImg: "HHub.png",
        projectDate: "Oct - December 2021",
        projectRepository: "https://github.com/lbcmp/Hobby-Hub",
        projectDescription: "Fosters meaningful connections by bringing together individuals who share common hobbies and interests.",
        projectTech: "React, JavaScript, HTML/CSS",
        status: "2021"
    },
    {
        projectName: "Hey! Say! JUMP!",
        projectLogo: "HSJLogo.png",
        projectImg: "HSJsite.png",
        projectDate: "June - July 2021",
        projectRepository: "https://github.com/andywurm/HeySayJUMPWebsite",
        projectDescription: "Served as an engaging promotional platform for the group Hey! Say! JUMP!, enabling fans to stay updated on their favorite member while also offering the opportunity to explore and 'acquire' exclusive merchandise.",
        projectTech: "JavaScript, HTML/CSS",
        status: "2021"
    }
]

export default projects