import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import { routes } from "./routes";

const app = Fastify({ logger: true });


app.register(jwt, {
    secret: "chave",
});

app.register(cors, {
    origin: "*",
});


app.decorate("authenticate", async function (request: any, reply: any) {
    try {
        await request.jwtVerify();
    } catch (err) {
        reply.status(401).send({ error: "Não autorizado" });
    }
});


app.register(routes);


app.post("/login", async (request, reply) => {
    const { username, password } = request.body as { username: string; password: string };

    if (username === "admin" && password === "123456") {
        const token = app.jwt.sign({ username });
        reply.send({ token });
    } else {
        reply.status(401).send({ error: "Credenciais inválidas" });
    }
});

export default app

if (require.main === module) {
    const start = async () => {
        try {
            await app.listen({ port: 3333 });
            console.log("Servidor rodando na porta 3333");
        } catch (err) {
            app.log.error(err);
            process.exit(1);
        }
    };

    start();
}

