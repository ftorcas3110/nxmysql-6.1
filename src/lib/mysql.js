import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: "clave-123",
        port: 3306,
        database: 'proveedores'
    }
})