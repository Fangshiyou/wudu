import queryString from 'query-string'
let rootUrl="https://www.fastmock.site/mock/aec9dca59966574a589bb82241e3e783/api";

let myFetch={
    get(url,queryParams){
        if(queryParams){
            url=rootUrl+url+"?"+queryString.stringify(queryParams)
        }else{
            url=rootUrl+url;
        }
        return fetch(url)
            .then((res)=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,
            {method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
            }
        )
        .then((res)=>res.json())
    }
}

export {myFetch};
