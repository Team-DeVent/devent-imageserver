![head](./head.png)

# devent-imageserver
이미지 서버

## To-Do

* [x] 이미지 업로드
* [x] 업로드 제한
* [ ] 사용자 권한에 따른 업로드 제한
* [ ] 도커 배포 적용


## 실행

**의존성 설치**

```
npm install
```
**실행**

```
npm run start
```


## 요청


<pre><code><span class="color-bg-accent-emphasis color-fg-on-emphasis rounded-1 px-2 py-1" style="text-transform: uppercase">post</span> /api/images</code></pre>

**Headers**

| Key | Value | Description |
| --- | --- | --- |
| x-access-token | {{JWT TOKEN}} | registration.js의 콜백주소로 요청될 토큰 |

**Body**

| Key | Value | Description |
| --- | --- | --- |
| image | {{FROM DATA}} | 폼 데이터 이미지 파일 |

## 응답


**성공 (예시)**
<pre>
{
    "status": 1,
    "filename": "1644997335705.png",
    "filesize": 184914
}
</pre>

**실패**
<pre>
{
    "status": 0
}
</pre>

## 파일 주소

```
http://host.host/file/{filename}
```