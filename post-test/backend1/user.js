const Pool = require("pg").Pool;
const pool = new Pool({
    host: process.env.DB2_HOST,
    database: process.env.DB2_NAME,
    user: process.env.DB2_USER,
    password: process.env.DB2_PASSWORD,
    port: 5432,
});

const getUsers = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM users", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

const createUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body;
        pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [name, email],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        `A new user has been added: ${JSON.stringify(results.rows[0])}`
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

const deleteUser = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query(
            "DELETE FROM users WHERE id = $1",
            [id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`user deleted with ID: ${id}`);
            }
        );
    });
};

const updateUser = (id, body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body;
        pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(`User updated: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser
};