import React, { useState }  from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function PosterDataDashboard() {
  let check;
  const [result, setResult] = useState('');
  const usData = ['450000', '320000', '405000', '1009000', '321000'];
  const posterData = [
        {
            state: "New York",
            loss: 92000,
            fin: 45000,
            mental: 31200,
            emotional: 54000,
            other: 13000
        },
        {
          state: "North Carolina",
          loss: 120000,
            fin: 50000,
            mental: 212000,
            emotional: 60000,
            other: 50000
        },
        {
          state: "Washington",
          loss: 90000,
            fin: 50000,
            mental: 42000,
            emotional: 330400,
            other: 12000      
        },
  ];
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    checkData();
    //setResult('');
    //alert(term);
  }

  const checkData = () => {
      //alert(term);
      const findMatch = (p) => p.state === term;
      check = posterData.some(findMatch);
      //alert(check);
      if(check){
        let index = posterData.findIndex(findMatch);
        setResult(barGraphs(posterData[index]));
      }else{
        setResult("No Results Found.");
      }
      setTerm('');
  }

  

  const barGraphs = (state) => {
    console.log("HERE!!")
    let calLoss = (state.loss/usData[0] * 100).toFixed(2);
    let calFin = (state.fin/usData[1] * 100).toFixed(2);
    let calMental = (state.mental/usData[2] * 100).toFixed(2);
    let calEmo = (state.emotional/usData[3] * 100).toFixed(2);
    let calOth = (state.other/usData[4] * 100).toFixed(2);
    
    
    return(
      <div>
        <h3 className="main-font">{state.state}</h3>
        <p className="secondary-font">Experiencing Loss</p>
        <ProgressBar style={{fontWeight: "bold", fontSize: "2em", margin: "20px", width: "80vw", height: "50px"}} variant="success" now={calLoss} label={`${calLoss}%`} />
        <p className="secondary-font">Financial Difficulties</p>
        <ProgressBar style={{fontWeight: "bold", fontSize: "2em", margin: "20px", width: "80vw", height: "50px"}} variant="info" now={calFin} label={`${calFin}%`}/>
        <p className="secondary-font">Mental Illness</p>
        <ProgressBar style={{fontWeight: "bold", fontSize: "2em", margin: "20px", width: "80vw", height: "50px"}} variant="warning" now={calMental} label={`${calMental}%`}/>
        <p className="secondary-font">Emotional Distress</p>
        <ProgressBar style={{fontWeight: "bold", fontSize: "2em", margin: "20px", width: "80vw", height: "50px"}} variant="danger" now={calEmo} label={`${calEmo}%`}/>
        <p className="secondary-font">Other</p>
        <ProgressBar style={{fontWeight: "bold", fontSize: "2em", margin: "20px", width: "80vw", height: "50px"}} variant="dark" now={calOth} label={`${calOth}%`}/>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div style={{padding: "35px"}}>
        <h1 className="main-font">Poster Data</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="search"></label>
            <input type="text" value={term} class="form-control" id="search" placeholder="search a state" onChange={(e) => {setTerm(e.target.value)}}></input>
          </div>
          <button type="button" class="main-font" type="submit" value="Submit"
          style={{width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(96.23deg, #7B81EC 0%, #C957FE 100%)", color: "white", textAlign: "center"}}>
            Search.
          </button>
        </form>
        <div style={{marginTop: "25px"}}>{result}</div>
      </div>
    </React.Fragment>
  );
}