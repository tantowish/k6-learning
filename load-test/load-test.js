import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
    stages: [
        {duration: '5m', target:200},
        {duration: '20m', target:200},
        {duration: '5m', target:0}
    ]
}

const randomAlfabet = ()=>{
    const alfabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alfabet.length);
    const randomIndex2 = Math.floor(Math.random() * alfabet.length);
    return alfabet[randomIndex]+alfabet[randomIndex2];
}


export default function () { 
    let res = http.get(`https://blogpost-portofolio.my.id/posts?search=${randomAlfabet()}`)
    check(res, {'status was 200': r=> r.status ==200})
    sleep(1)
 }