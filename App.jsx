import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Question from "./components/Question";
import Results from "./components/Results";
import UserForm from "./components/UserForm";
import { UserProvider } from "./components/UserProvider";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);

  // 🔹 Preguntas
  const questions = useMemo(
    () => [
      {
        question: "What's your favorite color?",
        options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
      },
    ],
    []
  );

  // 🔹 Diccionario elements con useMemo
  const elements = useMemo(
    () => ({
      "Red 🔴": "Fire",
      "Blue 🔵": "Water",
      "Green 🟢": "Earth",
      "Yellow 🟡": "Air",
    }),
    []
  );

  const keywords = useMemo(
    () => ({
      Fire: "fire",
      Water: "water",
      Earth: "earth",
      Air: "air",
    }),
    []
  );

  // 🔹 Función para calcular el elemento
  const determineElement = useCallback(
    (answers) => {
      const counts = {};
      answers.forEach((answer) => {
        const el = elements[answer];
        counts[el] = (counts[el] || 0) + 1;
      });
      return Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
    },
    [elements]
  );

  // 🔹 Funciones
  function handleAnswer(answer) {
    setAnswers((prev) => [...prev, answer]);
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  function handleUserFormSubmit(name) {
    console.log("User name submitted:", name);
  }

  async function fetchArtwork(keyword) {
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`
    );
    const data = await res.json();
    if (data.objectIDs?.length > 0) {
      const artRes = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[0]}`
      );
      const artData = await artRes.json();
      setArtwork(artData);
    }
  }

  // 🔹 Efecto para determinar resultado
  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      fetchArtwork(keywords[selectedElement]);
    }
  }, [currentQuestionIndex, answers, determineElement, keywords, questions.length]);

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm onSubmit={handleUserFormSubmit} />} />
        <Route
          path="/quiz"
          element={
            currentQuestionIndex < questions.length ? (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <Results element={element} artwork={artwork} />
            )
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
