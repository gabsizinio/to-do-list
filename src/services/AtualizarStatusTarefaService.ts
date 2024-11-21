import prismaClient from "../prisma";

class AtualizarStatusTarefaService {
    async execute(id: string) {
        const tarefa = await prismaClient.tarefa.update({
            where: { id },
            data: { status: true },
        });

        return tarefa;
    }
}

export { AtualizarStatusTarefaService };
