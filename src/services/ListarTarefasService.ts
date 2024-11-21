import prismaClient from "../prisma";

class ListarTarefasService {
    async execute() {
        const tarefas = await prismaClient.tarefa.findMany()

        return tarefas;
    }
}

export { ListarTarefasService }