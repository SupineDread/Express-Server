import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Ok!'
    })
})

router.post('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: `Esto es test: ${req.body.test}`
    })
})

router.post('/mensajes/:id', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: `Estos son los parametros: ${req.params.id}`
    })
})

export default router;