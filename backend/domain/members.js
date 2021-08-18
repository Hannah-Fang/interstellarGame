class User {
  constructor( email, password, name, nickname, gender, phone, birthday, address) {
    // this.id = 0
    this.email = email
    this.password = password
    this.name = name
    this.nickname = nickname
    this.gender = gender
    this.phone = phone
    this.birthday = birthday
    this.address = address
  }

  // 註冊
  addUserSQL() {
    let sql = `INSERT INTO members(userEmail, userPwd) \
                   VALUES('${this.email}', '${this.password}')`
    return sql
  }

  // login用
  getUserByEmailAndPasswordSQL() {
    let sql = `SELECT * FROM members WHERE userEmail = '${this.email}' AND userPwd = '${this.password}' LIMIT 0,1`
  return sql
  }

  // get 拿取會員資料
  static getUserByIdSQL(id){
    let sql = `SELECT * FROM members WHERE userId =  ${id}`
    return sql
  }

  // 更新會員資料
  updateUserByIdSQL(id) {
    // console.log(`pwd received = ${this.address}`)
    let sql = `UPDATE members \
               SET userEmail = '${this.email}', userName = '${this.name}', userNickname = '${this.nickname}', userGender = '${this.gender}',userPhone = '${this.phone}',userBirthday = '${this.birthday}', userAddress = '${this.address}' \
               WHERE userId =  ${id}`
               
    console.log(sql)
    return sql
  }

  // 更新會員密碼
  updatePwdByIdSQL(id) {
    let sql = `UPDATE members \
               SET userPwd = '${this.password}' \
               WHERE userId =  ${id}`
    return sql
  }
    
  // get 會員訂單
  static getUserOrderByIdSQL(id) {
    let sql = `SELECT orders.orderId, orders.created_at, orders.orderPrice, orders.orderStatus FROM orders JOIN users ON orders.userId = users.id WHERE users.id = ${id}`
    // `SELECT * FROM members WHERE userId =  ${id}`
    return sql
  }
  


  // get 會員 我的最愛
  static getUserFavlistByIdSQL(id) {
    let sql = `SELECT items.itemName, items.itemImg, items.itemPrice FROM favlist LEFT JOIN items ON favlist.itemId=items.itemId WHERE favlist.userId = ${id}`
    console.log(sql)
    return sql
  }

  // get 會員 我的優惠券
  static getUserCouponByIdSQL(id) {
    let sql = ` SELECT voucher.voucherName, voucher.voucherPrice, discount.created_at , discount.discountUse FROM discount LEFT JOIN voucher ON voucher.voucherId=discount.voucherId WHERE discount.userId = ${id}`
    console.log(sql)
    return sql
  }
  

}


  
  //export default User
  module.exports = User
  