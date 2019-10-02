import { Socket } from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConcetados = new UsuariosLista();

export const conectarCliente = (cliente: Socket) => {
    const usuario  = new Usuario(cliente.id);
    usuariosConcetados.agregar(usuario);
}

export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        usuariosConcetados.borrarUsuario(cliente.id);
    });
}

export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (payload: any) => {
        io.emit('mensaje-nuevo', payload);
    });
}

export const configurarUsuario = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('configurar-usuario', (payload: {nombre: string}, callback: Function) => {
        usuariosConcetados.actualizarNombre(cliente.id, payload.nombre);
        callback({
            ok: true,
            msg: `Usuario ${payload.nombre} configurado`
        });
    });
}
