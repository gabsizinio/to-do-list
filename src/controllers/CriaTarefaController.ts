import { FastifyRequest, FastifyReply } from "fastify";
import { CriaTarefaService } from "../services/CriarTarefaService";

//O controller é o que é chamado pela rota

//O service é chamado pelo controller pra lidar com o BD
class CriarTarefaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { titulo } = request.body as { titulo: string };

        //console.log(titulo)


        const tarefaService = new CriaTarefaService()

        const tarefa = await tarefaService.execute({ titulo })

        reply.send(tarefa)
    }
}

export { CriarTarefaController }
