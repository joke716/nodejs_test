
// 코드 빌드 순서
// 1. 위에서 아래
// 2. = 을 기준으로 오른쪽에서 왼쪽으로 치환
// 3. . 은 하위 메소드를 호출하는 방법
// 4. () 함수들의 모음을 표시한다.
// 5. , 는 그리고 라고 해석한다.

const express = require('express')
const app = express()

const PORT = 5000

app.listen(PORT, console.log('Server started'))

