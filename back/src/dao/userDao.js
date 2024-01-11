const { pool } = require("../../../노드/database");

exports.insertUser = async function (email, password, nickname) {
  try {
    //DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      //쿼리
      const insertUserQuery =
        "INSERT INTO Users (email, password, nickname) values (?, ?, ?);";
      const insertUserParams = [email, password, nickname];

      const [row] = await connection.query(insertUserQuery, insertUserParams);
      return row;
    } catch (err) {
      console.error(` ### insertUser Query error ### \n ${err}`);
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(` ### insertUser DB error ### \n ${err} `);
    return false;
  }
};

exports.selectUserByEmail = async function (email) {
  try {
    //DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      //쿼리
      const selectUserByEmailQuery = "SELECT * FROM Users WHERE email=?;";
      const selectUserByEmailParams = [email];

      const [row] = await connection.query(
        selectUserByEmailQuery,
        selectUserByEmailParams
      );
      return row;
    } catch (err) {
      console.error(` ### selectUserByEmail Query error ### \n ${err}`);
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(` ### selectUserByEmail DB error ### \n ${err} `);
    return false;
  }
};

exports.selectUser = async function (email, password) {
  try {
    //DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      //쿼리
      const selectUserQuery = "SELECT * FROM Users WHERE email=?;";
      const selectUserParams = [email];

      const [row] = await connection.query(selectUserQuery, selectUserParams);
      return row;
    } catch (err) {
      console.error(` ### selectUser Query error ### \n ${err}`);
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(` ### selectUser DB error ### \n ${err} `);
    return false;
  }
};

exports.selectNicknameByUserIdx = async function (userIdx) {
  try {
    //DB 연결 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      //쿼리
      const selectNicknameByUserIdxQuery =
        "SELECT * FROM Users WHERE userIdx=?;";
      const selectNicknameByUserIdxParams = [userIdx];

      const [row] = await connection.query(
        selectNicknameByUserIdxQuery,
        selectNicknameByUserIdxParams
      );
      return row;
    } catch (err) {
      console.error(` ### selectNicknameByUserIdx Query error ### \n ${err}`);
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(` ### selectNicknameByUserIdx DB error ### \n ${err} `);
    return false;
  }
};
