export interface IsendFile {
    message: string;
    data: {
        fileName: string;
        fileHash: string;
        peers: string[];
    };
}
