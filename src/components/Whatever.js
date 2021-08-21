import React, {useState} from 'react'
import './Whatever.css'

function Whatever() {
    const [tips,setTips] = useState([{tex:'there is no tip', id:1}]);
    const [sch,setSch] = useState([{tex:'the real schedule is inside your heart', id:1}]);
    const [tut,setTut] = useState([{tex:'BUET Tutorial', id: 1}]);
    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');
    const [inp3, setInp3] = useState('');

    var wee = () =>{
        if(inp1 === '') return;
        var a = {tex:inp1, id: Math.floor(Math.random()* 1000000)};
        setTips([...tips,a]);
        setInp1('');
    }
    var wee2 = () =>{
        if(inp2 === '') return;
        var a = {tex:inp2, id: Math.floor(Math.random()* 1000000)};
        setSch([...sch,a]);
        setInp2('');
    }
    var wee3 = () =>{
        if(inp3 === '') return;
        var a = {tex:inp3, id: Math.floor(Math.random()* 1000000)};
        setTut([...tut,a]);
        setInp3('');
    }
    var del = (id) =>{
        setTips(tips.filter(tip => tip.id!== id))
    }
    var del2 = (id) =>{
        setSch(sch.filter(sch => sch.id!== id))
    }
    var del3 = (id) =>{
        setTut(tut.filter(sch => sch.id!== id))
    }
    return (
        <div className='whatever'>
            <div className='what what1'>
                <h2>Tips of the day</h2>
                {tips.map(tip =>
                    <div className='weh'>
                        <p>{tip.tex}</p>
                        <button className="whatbut" onClick={()=>del(tip.id)}>delete</button>
                    </div>
                    )}
                <input type="text" value = {inp1} onChange = {(e) => setInp1(e.target.value)}  />
                <button className="whatbut2" onClick={() =>wee()} >hyaa</button>
            </div>
            <div className='what what2'>
                <h2>Test Schedule</h2>
                {sch.map(tip =>
                    <div className='weh'>
                        <p>{tip.tex}</p>
                        <button className="whatbut" onClick={()=>del2(tip.id)}>delete</button>
                    </div>
                    )}
                <input type="text" value={inp2} onChange = {(e) => setInp2(e.target.value)}/>
                <button onClick={() =>wee2()}>tou</button>
            </div>
            <div className='what what3'>
                <h2>My tutorials</h2>
                {tut.map(tip =>
                    <div className='weh'>
                        <p>{tip.tex}</p>
                        <button className="whatbut" onClick={()=>del3(tip.id)}>delete</button>
                    </div>
                    )}
                <input type="text"  value= {inp3} onChange = {(e) => setInp3(e.target.value)}/>
                <button  onClick={() =>wee3()}>sore</button>
            </div>
        </div>
    )
}

export default Whatever
