import request from "supertest";
import app from "../src/server";

describe("Testes para o endpoint /tarefas", () => {
    beforeAll(async () => {
        await app.ready();
    });


    afterAll(async () => {
        await app.close();
    });

    it("Deve retornar uma lista de tarefas", async () => {
        const response = await request(app.server).get("/tarefas");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    }, 10000);
});
