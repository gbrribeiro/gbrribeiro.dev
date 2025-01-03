import { ProjectViewModel } from "../models/ProjectViewModel";

export const Projects: ProjectViewModel[] = [
    new ProjectViewModel(
        "1",
        "Portfolio",
        "My Portfolio made entirely in .NET MVC.",
        "/assets/portfolio-img.png",
        "https://github.com/gbrribeiro/gbrribeiro.dev",
        "https://gbrribeiro.dev"
    ),
    new ProjectViewModel(
        "2",
        "Lar Tech",
        "Lar .NET REST API made for a hiring challenge.",
        "/assets/lar-logo.jpg",
        "https://github.com/gbrribeiro/lar-tech",
        undefined
    ),
    new ProjectViewModel(
        "3",
        "Arduino Automated Irrigation System",
        "Arduino Automated Irrigation System made for a college project.",
        "/assets/flutter-screen.png",
        "https://github.com/gbrribeiro/uniwater_super",
        undefined
    )
];