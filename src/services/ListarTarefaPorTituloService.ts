import prismaClient from "../prisma";

class ListarTarefaPorTituloService {
    async execute(titulo: string) {
        const tarefa = await prismaClient.tarefa.findFirst({
            where: { titulo },
        });

        return tarefa;
    }
}

export { ListarTarefaPorTituloService };
