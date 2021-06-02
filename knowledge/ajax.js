// 数据请求

/**
 * 原生请求
 */
let xmlHttp = new XMLHttpRequest();//XMLHttpRequest浏览器接口
xmlHttp.open("post","http://localhost:3000");//初始化
xmlHttp.setRequestHeader("Content-Type","application/json");//设置请求头
xmlHttp.send(JSON.stringify({// 发送请求
  mobile,
  password
}))
xmlHttp.onreadystatechange = function(){
  if(xmlHttp.readyState ===4 && xmlHttp.status == 200){
    console.log(xmlHttp.responseText)
  }
}