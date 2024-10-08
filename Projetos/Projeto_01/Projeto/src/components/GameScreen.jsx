import { useState, useRef } from 'react'
import './GameScreen.css'

const GameScreen = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palava:</h1>
      <h3 className="tip">
        Dica sobre a Palavra: {pickedCategory}
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (guessedLetters.includes(letter) ?
         ( <span key={i} className="Letter">{letter}</span>) : 
         ( <span key={i} className="blankSquare"></span>)
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name='letter' maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default GameScreen