// 思路
// 返回一个promise 使用resolve接收最后的 数据列表dataList
// 递归调用next 当请求次数大于等于maxNum 停止调用 如果小于时 则继续调用
// 使用请求列表 保存每次的请求url与对应结果 
// 请求时 将请求次数加一 请求成功返回数据后 请求次数减一 用于记录请求次数
// 每次调用成功后 再次调用 添加新的请求 当请求次数为0 并且 urls列表为0时 则表示全部请求完毕
// 将reqList 中保存的数据全部取出 并保存到dataList中 resolve(dataList)返回

let index = 0;
const axios = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url + `/?username=${++index}&password=${index}`);
        },1000)
    })
}

function multiRequest(urls,maxNum){
    return new Promise((resolve,reject)=>{
        const reqList = {};
        const dataList = [];
        let stackIndex = 0;
        const next = () => {
            if(stackIndex > maxNum || urls.length <= 0) return;
            let path = urls.splice(0,1);
            stackIndex ++;
            console.log(path,"开始了")
            axios(path).then(res=>{
                stackIndex --;
                console.log(path,"结束了")
                reqList[path] = res;
                if(stackIndex === 0 && urls.length === 0){
                    for(let i in reqList){
                        dataList.push(reqList[i]);
                    }
                    resolve(dataList);
                }else{
                    next();
                }
            })
        }
        // 递归循环
        while(stackIndex < maxNum){
            next();
        }
    })
}

// 学习大佬的方法
// http://js.jsrun.net/SYLKp/edit
function multiRequest2(urls,maxNum){
    let length = urls.length;
    let reqList = []; // 临时存储请求个数 
    let dataList = [];// 存储promise的请求的promise
    const next = () => {
        if(urls.length <= 0) return Promise.resolve();
        let path = urls.splice(0,1);
        console.log(path,"开始")
        let req = Promise.resolve(axios(path)); // 请求
        dataList.push(req);
        // 用于存储临时得请求的promise
        let reqs = req.then(()=>{
            // 当执行完毕时会调用 该方法将请求从reqList中删除
            reqList.splice(0,1);
            console.log(path,"结束")
        });
        reqList.push(reqs);
        // 实现next可以继续调用 提供默认值
        let r = Promise.resolve();
        // 当reqList.length 大于规定时 使用Promise的方式race删除第一个执行完毕的请求
        if(reqList.length >= maxNum){
            //也就是说删除对应得请求
            r = Promise.race(reqList);
        }
        // 继续向下调用
        return r.then(()=>next());
    }
    // 执行next 返回一个promise 通过Promise.all 执行dataList
    return next().then(()=>Promise.all(dataList));
}
multiRequest(["/url1","/url2","/url3","/url4","/url5","/url6"],3).then(data=>{
    console.log(data);
})
multiRequest2(["/url1","/url2","/url3","/url4","/url5","/url6"],2).then(data=>{
    console.log(data);
})