const urlGetCelebrities= 'https://nouamdtkz2.execute-api.us-east-2.amazonaws.com/prod';

const urlUpdateCelebrity = 'https://4s5qju9rpb.execute-api.us-east-2.amazonaws.com/update/';


export const getCelebrities= async()=>{
    const response = await fetch(urlGetCelebrities);
    const data = await response.json();
    const array= JSON.parse(data.data);
    return array;
}


export const updateCelebrity= async(id,positive,negative)=>{

    console.log(id,positive,negative);
    const response = await fetch(urlUpdateCelebrity,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:'post',
        body: JSON.stringify({
            key:id,
            positive:positive,
            negative:negative
    })});

    console.log(response);
    const data = await response.json();
    console.log(data)
    data.statusCode==200?alert("Voto enviado correctamente"):alert("Ocurrio un error al enviar el voto.");

}