import { Usuario } from "./usuario";

export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor() {}

    public agregar(usuario: Usuario) {
        this.lista.push(usuario)
        return usuario;
    }

    public actualizarNombre(id: string, nombre: string) {
        for(let usuario of this.lista) {
            if (usuario.id == id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("---Actualizando usuario---");
    }

    public getLista() {
        return this.lista;
    }

    public getUsuario(id: string) {
        return this.lista.find(usuario => {
            return usuario.id === id
        });
    }

    public getUsauriosEnSala(sala: string) {
        return this.lista.filter(usuario => {
            return usuario.sala === sala;
        })
    }

    public borrarUsuario(id: string) {
        const tempUser = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id;
        })
        return tempUser;
    }

}