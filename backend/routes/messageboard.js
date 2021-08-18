const express = require("express");
const router = express.Router();

const { promisePool } = require("../database/db.connect");

router.post("/", async (req, res) => {
  try {
    let addMessageSQL = `INSERT INTO message(memberId, storeId, content, replyId) 
    VALUES ('${req.body.memberId}','${req.body.storeId}','${req.body.newPost}','${req.body.replyId}')`;

    const [row, fields] = await promisePool.query(addMessageSQL);
    const insertId = { id: row.insertId };

    res.json(insertId);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:storeId", async (req, res) => {
  try {
    // 篩選所有樓主留言 replyId = 0 表示樓主
    let findMessageFromSQL =
      req.params.storeId == 0
        ? `SELECT mes.messageId,
        mes.storeId,
        mes.content,
        mes.replyId,
        mes.updated_at,
        userId,
        userImg,
        userNickname
        FROM message AS mes
        LEFT JOIN message AS rep
        ON mes.replyId = rep.memberId
        INNER JOIN members 
        ON members.userId = mes.memberId
        WHERE mes.replyId = 0`
        : `SELECT mes.messageId,
        mes.storeId,
        mes.content,
        mes.replyId,
        mes.updated_at,
        userId,
        userImg,
        userNickname
        FROM message AS mes
        LEFT JOIN message AS rep
        ON mes.replyId = rep.memberId
        INNER JOIN members 
        ON members.userId = mes.memberId
        WHERE mes.replyId = 0 AND mes.storeId = ${req.params.storeId} `;

    const [messageData] = await promisePool.query(findMessageFromSQL);

    // 篩選所有回文
    let findReplyFromSQL = `SELECT mes.messageId,
    mes.content,
    mes.replyId,
    mes.updated_at,
    userId,
    userImg,
    userNickname
    FROM message AS mes
    LEFT JOIN message AS rep
    ON mes.messageId = rep.replyId
    INNER JOIN members 
    ON members.userId = mes.memberId
    WHERE mes.replyId != 0`;

    const [replyData] = await promisePool.query(findReplyFromSQL);

    for (let i = 0; i < messageData.length; i++) {
      messageData[i].replys = [];
      for (let j = 0; j < replyData.length; j++) {
        if (replyData[j].replyId === messageData[i].messageId) {
          messageData[i].replys.push(replyData[j]);
        }
      }
    }

    res.json(messageData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
