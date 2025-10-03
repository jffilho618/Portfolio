export type Projects = {
    name: string;
    description: string;
    imageurl: string | string[]; // Suporta uma imagem ou array de imagens
    role: string;
    technologies: string;
    deploy: string;
    github: string;
}