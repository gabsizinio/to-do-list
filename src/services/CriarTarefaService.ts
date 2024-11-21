import prismaClient from "../prisma";

interface CreateTarefasProps {
    titulo: string;
}

class CriaTarefaService {
    async execute({ titulo }: CreateTarefasProps) {
        // console.log("ROTA FOI CHAMADA");
        if (!titulo) {
            throw new Error("Preencha todos os campos")
        }

        const tarefa = await prismaClient.tarefa.create({
            data: {
                titulo
            }
        })

        return tarefa
    }
}

export { CriaTarefaService }