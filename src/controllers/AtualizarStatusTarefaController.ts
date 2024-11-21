import { FastifyRequest, FastifyReply } from "fastify";
import { AtualizarStatusTarefaService } from "../services/AtualizarStatusTarefaService";

class AtualizarStatusTarefaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const atualizarStatusTarefaService = new AtualizarStatusTarefaService();

        try {
            const tarefaAtualizada = await atualizarStatusTarefaService.execute(id);
            reply.send(tarefaAtualizada);
        } catch (error) {
            reply.status(404).send({ error: "Tarefa não encontrada ou erro ao atualizar" });
        }
    }
}

export { AtualizarStatusTarefaController };
