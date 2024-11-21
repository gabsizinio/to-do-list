import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import { CriarTarefaController } from "./controllers/CriaTarefaController"
import { ListarTarefasController } from "./controllers/ListarTarefasController"
import { ListarTarefaPorTituloController } from "./controllers/ListarTarefaPorTituloController"
import { AtualizarStatusTarefaController } from "./controllers/AtualizarStatusTarefaController"


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/criatarefa", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CriarTarefaController().handle(request, reply)
    })

    fastify.get("/tarefas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListarTarefasController().handle(request, reply)
    })


    fastify.get("/tarefas/:titulo", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListarTarefaPorTituloController().handle(request, reply);
    })

    fastify.patch("/tarefas/:id/status", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AtualizarStatusTarefaController().handle(request, reply);
    })

}