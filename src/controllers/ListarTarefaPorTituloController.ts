import { FastifyRequest, FastifyReply } from "fastify";
import { ListarTarefaPorTituloService } from "../services/ListarTarefaPorTituloService";

class ListarTarefaPorTituloController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { titulo } = request.params as { titulo: string };

        const listarTarefaPorTituloService = new ListarTarefaPorTituloService();

        const tarefa = await listarTarefaPorTituloService.execute(titulo);

        if (!tarefa) {
            reply.status(404).send({ error: "Tarefa não encontrada" });
        } else {
            reply.send(tarefa);
        }
    }
}

export { ListarTarefaPorTituloController };
