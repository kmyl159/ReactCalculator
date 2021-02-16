import React,{useState} from 'react';
import './calc.css'


export default function CalcBtns(){
  const [data,setData] = useState("");

  const calcNums = [];
  const nums = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0','00','000'];
  nums.forEach(item =>{
    calcNums.push(
      <button onClick={e=>{setData(data+e.target.value)}}
      value={item}
      className='num'
      key={item}>
      {item}
      </button>
      )
    });
    
  const calcSinals = [];
  const sinals = ['+', '-', '*', '/','.'];
  sinals.forEach(sinal=>{
    calcSinals.push(
      <button onClick={e =>{
          if(
            (sinals.indexOf(data.substr(data.length - 1,data.length)) > -1)
            || (data.substr(data.length - 1,data.length) === '') 
          ){
            setData(data)
          }else{
            setData(data +e.target.value)
          }
        }
      } 
      value={sinal} key={sinal}
      >
        {sinal}
      </button>
    )
  });

  function Clear() {
    setData(data.substr(0,data.length - 1))
  }
  function AC(){
    setData("")
  }
  function Equalitate(){
    try{
      setData(
        String(eval(data)).length > 3 &&
          String(eval(data)).includes(".") 
            ? String(eval(data).toFixed(4))
              : String(eval(data))


      )
    }catch(err){
      console.log(err)
    }
  }

    return (
      <div className='calculadora'>
        <div className="campo" value={data}>
        {data}
        </div>
        <div className="row">
          <div className="row-column">
            <div className="numeros">
              <button className="btn-apagar" onClick={()=>Clear()}>
              Clear
              </button>
              <button className="btn-apagar" onClick={()=>AC()}>
              AC
              </button>
              {calcNums}
              </div>
            </div>
          <div className="column" >
            <div className="operadores">
              {calcSinals}
              <button className='equal' onClick={()=>Equalitate()}>
                =
              </button>
            </div>
            </div>
          </div>
      </div>
    );
}