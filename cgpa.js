class cgpa {
    constructor(a,b,c,d,e,f,g,h) {
        this.first = a*1;
        this.second = b*1;
        this.third = c*1;
        this.fourth = d*1;
        this.fifth = e*1;
        this.sixth = f*1;
        this.seventh = g*1;
        this.eighth = h*1;

    }
    calculate() {
        const total = this.first + this.second + this.third + this.fourth + this.fifth + this.sixth + this.seventh + this.eighth;

        return total/8;
    }
    

}

let arr=[];

function myfunc(){

for(let i=0;i<8;i++){
arr[i]=document.getElementsByClassName('form-control')[i].value;
}

// const cg=new cgpa(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);
const cg=new cgpa(...arr);

let dis="Congratulations your cgpa is "+ cg.calculate();

document.getElementById('toshow').innerHTML=dis;
document.getElementById('toshow').style.display='block';

}
