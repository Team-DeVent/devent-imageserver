import registration from '../config/registration.js';
import request from 'request';


const check = (req, res, next) => {
  try {  
    let token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).json({status:0,msg:"토큰 실종"})
    }

    const options = {
      uri: registration.deventblog.callback, 
      method: 'GET',
      headers: { "x-access-token": `${token}` },
      json:true
    }
    
    request.get(options, function(err,httpResponse,body){ 
      console.log(httpResponse, body)
      if (body.status == 1) {
        next()
      } else {
        return res.status(401).json({status:0,msg:"증명 실패"})
      }
    })

  
  } catch (error) {
    res.status(401).json({status:0,msg:"증명 에러", err:error})
  }
}

export { check };
