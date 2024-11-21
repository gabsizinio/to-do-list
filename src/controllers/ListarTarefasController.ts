import { FastifyRequest, FastifyReply } from "fastify";
import { ListarTarefasService } from "../services/ListarTarefasService";

class ListarTarefasController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listarTarefasService = new ListarTarefasService();

        const tarefas = await listarTarefasService.execute();

        reply.send(tarefas)
    }
}

export { ListarTarefasController }
