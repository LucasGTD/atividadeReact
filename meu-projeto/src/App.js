import React from 'react';
import './App.css';

function Header() {
  return (
    <div>
      <h1>
        Minha Rotina
      </h1>
    </div>
  )
}

function Paragrafo1() {
  return (
    <div>
      <p>

        Minha rotina diária começa cedo, por volta das 6:00, quando me levanto, tomo <b>café da manhã</b> e vou para a academia. Depois de um treino de uma hora,
        passo a manhã e parte da tarde <b>estudando ou trabalhando</b> com meu pai. Após um breve almoço, continuo as atividades até o final da tarde. No final do dia,
        me preparo e vou para a faculdade,
        onde assisto às aulas até as 22:00. Ao voltar para casa, janto, relaxo e me preparo para dormir, pronto para começar tudo de novo no dia seguinte.
      </p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <img src='https://christianosantos.com/files/cs1/avatar-homem.jpg'></img>
      <img src='https://christianosantos.com/files/cs1/avatar-mulher.jpg'></img>
      <Paragrafo1 />
      <p>entre em contato:</p>
            <section>
                <h1>Contatos</h1>
                <p><b>Email:</b> esh166luq12@gmail.com</p>
                <p><b>Facebook:</b> <a>lucas Gabriel</a></p>
            </section>
      <video width="320" height="240" controls autoPlay loop>
        <source src="https://www.w3schools.com/tags/movie.mp4" />
      </video>
      <br />
      <audio controls autoPlay loop>
        <source src=" https://christianosantos.com/files/cs1/musica02.mp3" type="audio/mpeg" />
      </audio>
      <br />
      <i>Well, Whatever, Nervermind.. - Kurt Kobain</i>
    </div>
  );
}

export default App;
