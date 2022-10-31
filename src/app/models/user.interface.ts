export interface userInterface {
    id?: string;
    nombreUser: string;
    apellidoUser: string;
    edadUser: number;
    emailUser: string;
    passwordUser: string;
    idUser: string;
    typeUser: 'cliente' | 'admin',
}