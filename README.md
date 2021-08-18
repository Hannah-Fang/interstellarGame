# 資料夾Tree

# 更新版 20210713 
- 前端資料夾架構

```
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src                                         #詳細見下圖
│   ├── App.js
│   ├── components                              #共用元件
│   ├── hooks                                   #custom hooks
│   ├── index.js
│   └── pages                                   #放大家分別的資料夾
│       ├── reservations                        #預約
│       ├── member                              #會員
│       ├── game                                #遊戲
│       ├── cart                                #購物車
│       ├── items                               #商品
│       ├── message                             #留言板
│       ├── About.js                            #關於我們
│       └── Homepage.js                         #首頁的頁面元件(如果需要 再建成另個資料夾)
└── yarn.lock
```

<br>


- 前端資料夾src架構
```
.
├── App.js                                      #放大家的index元件
├── components                                  #共用元件
│   ├── Breadcrumbs.js
│   ├── Button.js
│   ├── Footer.js
│   └── Navbar.js
├── hooks                                       #我寫的custom hooks 回傳當前螢幕寬度
│   └── useScreen.js
├── index.js
├── pages                                       #每個功能一個資料夾
│   ├── About.js
│   ├── Homepage.js                             #首頁的頁面元件(如果需要 再建成另個資料夾)
│   ├── cart                                    #購物車
│   │   └── CartIndex.js
│   ├── game                                    #遊戲
│   │   └── GameIndex.js
│   ├── items                                   #商品
│   │   └── ItemIndex.js
│   ├── member                                  #會員
│   │   └── MemberIndex.js
│   ├── message                                 #留言板
│   │   └── MessageIndex.js
│   └── reservations                            #預約
│       ├── ReservationIndex.js
│       ├── components
│       │   ├── Button.js                       #這個其實已經算是共用元件了
│       │   ├── SelectButton.js
│       │   ├── boardingPass
│       │   │   ├── BoardingPass.js
│       │   │   ├── BoardingPassMobile.js
│       │   │   ├── BoardingPassPc.js
│       │   │   ├── boardingPass.css
│       │   │   └── boardingPassMobile.css
│       │   ├── button.css
│       │   ├── calendar
│       │   │   ├── DatePicker.js
│       │   │   └── datePicker.css
│       │   ├── peopleSelect
│       │   │   ├── PeopleButtonMobile.js
│       │   │   ├── PeopleRadioButton.js
│       │   │   ├── PeopleSelect.js
│       │   │   └── peopleRadioButton.css
│       │   ├── stepCards
│       │   │   ├── Carousel.js
│       │   │   ├── StepCard.css
│       │   │   └── StepCard.js
│       │   ├── storeInfo
│       │   │   ├── Store.js
│       │   │   ├── StoreInfo.js
│       │   │   ├── TimeButton.js
│       │   │   ├── store.css
│       │   │   └── timeButton.css
│       │   └── storeSelectButtons
│       │       ├── StoreSelectButtons.js
│       │       └── storeSelect.css
│       ├── images
│       │   ├── allStore.svg
│       │   ├── astronaut.svg
│       │   ├── boardingPass.png
│       │   ├── boardingPassMobile.png
│       │   ├── boardingPassStamp.png
│       │   ├── boardingPassStampMobile.png
│       │   ├── daanStore.svg
│       │   ├── flat.svg
│       │   ├── pricing.png
│       │   ├── songShanStore.svg
│       │   ├── step1.png
│       │   ├── step2.png
│       │   ├── step3.png
│       │   └── step4.png
│       ├── index.js
│       ├── orderData.js
│       ├── pages
│       │   ├── BookingConfirm.js
│       │   ├── BookingProcess.js
│       │   ├── BookingStep.js
│       │   ├── BookingSuccess.js
│       │   ├── bookingConfirm.css
│       │   ├── bookingProcess.css
│       │   └── bookingStep.css
│       ├── stepData.js
│       └── storeData.js
└── styles
    └── global.scss

```
<br>
- 後端資料夾架構 記得要自己加個.env檔案

```
.
├── app.js                                          #import自己的route到這
├── bin
│   └── www                                         #設定port
├── controllers
│   ├── booking.js                                  #未來會把route裡面的function拆到這
├── database
│   ├── db.connect.js
│   └── seeds                                       #for seeding database
│       └── reservations.js                         #add 100 booking records to db
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── booking.js                                  #預約
│   ├── index.js                                    #對應到下面的normal route: 首頁、關於我們、會員登入etc
│   ├── cart.js                                     #對應到下面的cart route
│   ├── coupon.js                                   #折價卷 下面還沒列 
│   ├── items.js                                    #對應到下面的商品route
│   ├── message.js                                  #對應到留言板route
│   └── user.js                                     #對應到下面的會員中心route
├── views                                           #這個來亂的 應該不會用到
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
└── yarn.lock

```

<br/>
<br/>

# 後端路由REST API (參考用 預約目前已確定)

```
-------------------------------------------------------------------------
Normal Routes
-------------------------------------------------------------------------
[Method]  [Route]                       [Notes]
GET       /                             首頁
GET       /About                        關於我們
GET       /login                        Request user login page
POST      /login                        login user
GET       /register                     Request register form
POST      /register                     註冊 user

-------------------------------------------------------------------------
Users Route
-------------------------------------------------------------------------
[Method]  [Route]                       [Notes]
GET       /users/:id                    會員資料頁面
PATCH     /users/:id                    更改會員資料
GET       /users/:id/edit               Request the user edit page
GET       /users/:id/like               秀會員的最愛清單
POST      /users/:id/like               加到最愛清單

#購物車相關
GET	      /users/:id/orders	            會員訂單紀錄一覽
GET	      /users/:id/orders/:orderid	單筆訂單查詢

#預約相關
GET	      /users/booking	            會員預約紀錄一覽
GET	      /users/booking/:id    	    查詢單筆預約詳情
DELETE	  /users/booking/:id	        取消預約

-------------------------------------------------------------------------
Products Route
-------------------------------------------------------------------------
[Method]  [Route]
GET       /products                     取得所有商品
GET       /products/:id                 單一商品細節頁面(或query string)
GET       /products?id=	
GET		  /product?cat=	                類別&頁數用query string
GET		  /product?page=	

-------------------------------------------------------------------------
Cart Route                        購物車我不太確定ＱＱ!
-------------------------------------------------------------------------
[Method]  [Route]
GET	      /orders	              購物車內容 
POST      /orders	              加到購物車
GET	      /checkout	              request下訂單表單
POST	  /checkout	              送出訂單資料

-------------------------------------------------------------------------
Reservation Route
-------------------------------------------------------------------------
[Method]  [Route]
GET       /booking/steps              預約流程介紹
GET       /booking                    預約介面
POST	  /booking	                  送出預約資料
GET	      /booking/success/:id	      預約成功頁面

#會員相關
GET	      /users/booking	            會員預約紀錄一覽
GET	      /users/booking/:id    	    查詢單筆預約詳情
DELETE	  /users/booking/:id	        取消預約


-------------------------------------------------------------------------
chatboard Route
-------------------------------------------------------------------------
[Method]  [Route]




```

