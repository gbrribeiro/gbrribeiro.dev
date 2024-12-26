import * as uuid from 'uuid';

export class ProjectViewModel {
    id: string;
    code: string;
    name: string;
    description: string;
    imageUrl: string;
    gitHubUrl: string;
    url?: string;

    constructor(code: string, name: string, description: string, imageUrl: string, gitHubUrl: string, url?: string) {
        this.id = uuid.v4();
        this.code = code;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.gitHubUrl = gitHubUrl;
        this.url = url;
    }
}