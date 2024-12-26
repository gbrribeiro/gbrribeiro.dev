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
        "Lar REST API Challenge",
        "Lar REST API made for a hiring challenge.",
        "/assets/lar-logo.jpg",
        "https://github.com/gbrribeiro/lar-tech",
        undefined // Em TypeScript, usamos `undefined` para valores nulos.
    )
];