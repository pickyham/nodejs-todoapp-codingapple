//서버를 띄우기 위한 기본 세팅(express 라이브러리)
const express = require('express');
const app = express(); // 객체를 만든다 //엄청 이해하고 쓸 필요는 없..!
// const bodyParser = require('body-parser');
// (업데이트사항) 2021년 이후로 설치한 프로젝트들은 body-parser 라이브러리가 express에 기본 포함이라 

// 따로 npm으로 설치할 필요가 없습니다. 

app.use(express.urlencoded({extended: true})) 

app.listen(8080, function(){ //서버띄울 포트번호, 띄운후 실행할 코드
    console.log('8080 안녕?!')
}); //express 가라사대, 이렇게 하면 서버를 열수가 있음

app.get('/', function(요청, 응답) { //하나만 쓰면 홈
    // 응답.send('/')
    응답.sendFile(__dirname + '/index.html')
})

app.get('/write', function(요청, 응답) { //하나만 쓰면 홈
    // 응답.send('/')
    응답.sendFile(__dirname + '/write.html')
})
// app.listen(8080, function(){

// })

// 어떤 사람이 /add 경로로 post 요청을 하면... 
// ?? 해주세요!
app.post('/add', function(요청,응답){ //꺼내 쓰려면 body-parser를 설치해야함
    응답.send('전송완료')
    console.log(요청.body.title)
    console.log(요청.body.date)
    //받은정보 저장해주세요!
})

