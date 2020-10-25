import React, { useState }  from 'react';
import Card from 'react-bootstrap/Card'

export default function SearchPoster() {
    let check;
    const [result, setResult] = useState('');
    const posterData = [
        {
            poster: "Green Parrot #2211",
            post: "The lockdown has changed a lot of things. I'm feeling at a loss of what to do. First off, my schedule had to be changed entirely and it's causing me a lot of stress to adjust.",
            tag: "Emotional Distress"
        },
        {
            poster: "Pink Flamingo #3245",
            post: "It's getting hard for me to sleep every day. Nowadays, just the thought of going to bed stresses me out. I would lie in bed, and even if I'm exhausted, my brain just won't shut down.",
            tag: "Mental Illness"
        },
        {
            poster: "White Monkey #8794",
            post: "Recently, it's been stressful at home. I'm currently the only working parent and the loss of benefits have definitely made things harder. I don't know what to tell the kids.",
            tag: "Financial Difficulties"      
        },
    ];
    const [term, setTerm] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        checkData();        
    }

    const checkData = () => {
        //alert(term);
        const findMatch = (p) => p.poster === term;
        check = posterData.some(findMatch);
        //alert(check);
        if(check){
            let index = posterData.findIndex(findMatch);
            setResult(DisplayCard(posterData[index]));
        }else{
            setResult("No Results Found.");
        }
        setTerm('');
    }

    const DisplayCard = (term) => {
      console.log(term);
      return(
        <Card border="dark" style={{ width: '20rem' }}>
            <Card.Header>{term.tag}</Card.Header>
            <Card.Body>
                <Card.Title>{term.poster}</Card.Title>
                <Card.Text>{term.post}</Card.Text>
                <Card.Link href="#">See Responses.</Card.Link>
            </Card.Body>
      </Card>
      );
    }

    return (
        <React.Fragment>
            <div style={{padding: "35px"}}>
                <h1 className="main-font">Search A Post</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="search"></label>
                        <input type="text" class="form-control" value={term} id="search" placeholder="search a poster" onChange={(e) => {setTerm(e.target.value); console.log(term);}}></input>
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