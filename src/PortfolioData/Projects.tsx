export interface Projects {
    projectName: string,
    projectLogo: string,
    projectImg: string,
    projectDate: string,
    projectWebsite?: string,
    projectRepository: string,
    projectDescription: string,
    projectTech: string,
    status: string
}

const projects: Projects[] = [
    {
        projectName: "Up To Skate",
        projectLogo: "skater.png",
        projectImg: "skateSite.png",
        projectDate: "Sep 2022 - Now",
        projectWebsite: "https://uptoskate.onrender.com/",
        projectRepository: "https://github.com/andywurm/UpToSkate",
        projectDescription: "Users can search and view skater information, upcoming events and past results. Thus all figure skating information is located all in one place.",
        projectTech: "React, TypeScript, HTML/CSS, Node.js, Express.js",
        status: 'Present'
    },
    {
        projectName: "Drama Tracker",
        projectLogo: "DramaTrack.png",
        projectImg: "DramaSite.png",
        projectDate: "Feb - May 2022",
        projectRepository: "https://github.com/andywurm/DramaTracker",
        projectDescription: "Allows users to track which Japanese shows or movies they have watched, are watching or plan to watch. The user is able to read up on the content, and decide which list they would like to add that show or movie to.",
        projectTech: "React, JavaScript, HTML/CSS, Node.js, Express.js",
        status: "2022"
    }
]

export default projects