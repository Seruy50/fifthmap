import React from 'react';
import './App.css'
import map from './map.jpg'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map}  alt="noMap" ></img>
    <Village /* 4*/typeOfMarker='red' top={8} left={4} currentInfo={currentInfo} id={1}/>
    <Village /* 5*/typeOfMarker='red' top={10} left={21} currentInfo={currentInfo} id={2}/>
    <Village /* 7*/typeOfMarker='yellow' top={19} left={68} currentInfo={currentInfo} id={3}/>
    <Village /* 8*/typeOfMarker='red' top={21} left={72} currentInfo={currentInfo} id={4}/>
    <Village /* 12*/typeOfMarker='red' top={13} left={1} currentInfo={currentInfo} id={5}/>

    <Village /* 18*/typeOfMarker='red' top={18} left={31} currentInfo={currentInfo} id={6}/>
    <Village /* 21*/typeOfMarker='black' top={22} left={62} currentInfo={currentInfo} id={7}/>
    <Village /* 35*/typeOfMarker='red' top={22} left={6} currentInfo={currentInfo} id={8}/>
    <Village /* 37*/typeOfMarker='red' top={22} left={15} currentInfo={currentInfo} id={9}/>
    <Village /* 38*/typeOfMarker='red' top={22} left={22} currentInfo={currentInfo} id={10}/>

    <Village /* 45*/typeOfMarker='red' top={25} left={62} currentInfo={currentInfo} id={11}/>
    <Village /* 46*/typeOfMarker='yellow' top={27} left={73} currentInfo={currentInfo} id={12}/>
    <Village /* 55*/typeOfMarker='red' top={30} left={9} currentInfo={currentInfo} id={13}/>
    <Village /* 57*/typeOfMarker='red' top={32} left={29} currentInfo={currentInfo} id={14}/>
    <Village /* 62*/typeOfMarker='red' top={35} left={62} currentInfo={currentInfo} id={15}/>

    <Village /*71 */typeOfMarker='red' top={34} left={15} currentInfo={currentInfo} id={16}/>
    <Village /*73*/typeOfMarker='red' top={39} left={77} currentInfo={currentInfo} id={17}/>
    <Village /* 79*/typeOfMarker='red' top={37} left={11} currentInfo={currentInfo} id={18}/>
    <Village /* 80*/typeOfMarker='red' top={40} left={6} currentInfo={currentInfo} id={19}/>
    <Village /*81 */typeOfMarker='red' top={37} left={18} currentInfo={currentInfo} id={20}/>

    <Village /* 83*/typeOfMarker='red' top={39} left={21} currentInfo={currentInfo} id={21}/>
    <Village /* 86*/typeOfMarker='black' top={38} left={55} currentInfo={currentInfo} id={22}/>
    <Village /* 96*/typeOfMarker='red' top={46} left={14} currentInfo={currentInfo} id={23}/>
    <Village /* 97*/typeOfMarker='red' top={46} left={26} currentInfo={currentInfo} id={24}/>
    <Village /* 98*/typeOfMarker='red' top={47} left={32} currentInfo={currentInfo} id={25}/>

    <Village /* 100*/typeOfMarker='red' top={47} left={63} currentInfo={currentInfo} id={26}/>
    <Village /* 106*/typeOfMarker='red' top={50} left={2} currentInfo={currentInfo} id={27}/>
    <Village /* 107*/typeOfMarker='red' top={50} left={15} currentInfo={currentInfo} id={28}/>
    <Village /* 109*/typeOfMarker='yellow' top={52} left={32} currentInfo={currentInfo} id={29}/>
    <Village /* 110*/typeOfMarker='red' top={54} left={44} currentInfo={currentInfo} id={30}/>

    <Village /* 111*/typeOfMarker='red' top={57} left={51} currentInfo={currentInfo} id={31}/>
    <Village /* 121*/typeOfMarker='red' top={55} left={7} currentInfo={currentInfo} id={32}/>
    <Village /* 123*/typeOfMarker='red' top={56} left={25} currentInfo={currentInfo} id={33}/>
    <Village /* 124*/typeOfMarker='red' top={56} left={33} currentInfo={currentInfo} id={34}/>
    <Village /* 126*/typeOfMarker='red' top={61} left={48} currentInfo={currentInfo} id={35}/>

    <Village /* 127*/typeOfMarker='yellow' top={62} left={69} currentInfo={currentInfo} id={36}/>
    <Village /* 143*/typeOfMarker='red' top={61} left={13} currentInfo={currentInfo} id={37}/>
    <Village /* 144*/typeOfMarker='red' top={62} left={18} currentInfo={currentInfo} id={38}/>
    <Village /* 145*/typeOfMarker='red' top={62} left={25} currentInfo={currentInfo} id={39}/>
    <Village /* 146*/typeOfMarker='red' top={64} left={33} currentInfo={currentInfo} id={40}/>

    <Village /*147 */typeOfMarker='red' top={64} left={43} currentInfo={currentInfo} id={41}/>
    <Village /* 149*/typeOfMarker='red' top={69} left={63} currentInfo={currentInfo} id={42}/>
    <Village /* 161*/typeOfMarker='red' top={65} left={4} currentInfo={currentInfo} id={43}/>
    <Village /* 162*/typeOfMarker='red' top={65} left={11} currentInfo={currentInfo} id={44}/>
    <Village /* 163*/typeOfMarker='red' top={67} left={16} currentInfo={currentInfo} id={45}/>
    
    <Village /*166 */typeOfMarker='red' top={70} left={45} currentInfo={currentInfo} id={46}/>
    <Village /* 176*/typeOfMarker='red' top={73} left={36} currentInfo={currentInfo} id={47}/>
    <Village /* 196*/typeOfMarker='red' top={76} left={8} currentInfo={currentInfo} id={48}/>
    <Village /* 199*/typeOfMarker='red' top={76} left={27} currentInfo={currentInfo} id={49}/>
    <Village /* 200*/typeOfMarker='red' top={78} left={33} currentInfo={currentInfo} id={50}/>

    <Village /* 218*/typeOfMarker='red' top={82} left={22} currentInfo={currentInfo} id={51}/>
    <Village /* 220*/typeOfMarker='red' top={84} left={61} currentInfo={currentInfo} id={52}/>
    <Village /* 232*/typeOfMarker='red' top={87} left={44} currentInfo={currentInfo} id={53}/>
    
    
  </div>
}

function Village({top, left, typeOfMarker, currentInfo, id}){
    
    let village = villages.filter(item => item.id === id);
    let name = village[0].name.props.children[0]; 
 
    console.log(name);
    

    return <div style={{top: top + '%', left: left + '%'}}>
      <span className={typeOfMarker + ' villagesSpan'} style={{top: top + '%', left: left + '%'}}  onClick={() => currentInfo(id)}></span>
      <span className="nameOfVillage" style={{top: top - 0.66 + '%', left: left + 1.60 + '%'}}>{name}</span>
    </div>
  }
