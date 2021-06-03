import React, { useState } from 'react';
import styles from './App.module.scss';
import QuoteList from './components/quoteList/QuoteList';
import AddQuote from './components/addQuote/AddQuote';
import { Quote } from './components/quote/OneQuote';
import ToolBar from './components/toolBar/ToolBar';

const mockQuotes: Quote[] = [
  {
    id: 1,
    content:
      '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison',
    isHighlight: false,
  },
  {
    id: 2,
    content: '“If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',
    isHighlight: false,
  },
  {
    id: 3,
    content: '“The big lesson in life, baby, is never be scared of anyone or anything.”– Frank Sinatra',
    isHighlight: false,
  },
  {
    id: 4,
    content: '“Turn your wounds into wisdom.” — Oprah Winfrey',
    isHighlight: false,
  },
  {
    id: 5,
    content: '“Everything negative – pressure, challenges – is all an opportunity for me to rise.” — Kobe Bryant',
    isHighlight: false,
  },
];

export function App(): JSX.Element {
  const [quotes, setQuotes] = useState<Quote[]>(mockQuotes);
  const [showForm, setShowForm] = useState<boolean>(false);

  const addQuote = (content: string) => {
    const newId = (quotes[quotes.length - 1].id as number) + 1;
    const isHighlight = false;
    setQuotes((prevQuotes) => [...prevQuotes, { id: newId, content, isHighlight }]);
  };

  const updateQuote = (updatedQuote: Quote) => {
    const newQuote = quotes.map((quote) => (quote.id === updatedQuote.id ? updatedQuote : quote));
    setQuotes(newQuote);
  };

  const deleteQuotes = () => {
    const newQuotes = quotes.filter((quote) => !quote.isHighlight);
    setQuotes(newQuotes);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {showForm && <AddQuote addQuote={addQuote} toggleForm={toggleForm} />}
        <QuoteList quotes={quotes} updateQuote={updateQuote} />
      </div>

      <ToolBar deleteQuotes={deleteQuotes} showForm={showForm} toggleForm={toggleForm} />
    </div>
  );
}
