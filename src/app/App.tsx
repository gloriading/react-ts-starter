import React, { useState, useEffect } from 'react';
import { ToolBar } from 'components';
import styles from './App.module.scss';
import QuoteList from './components/quoteList/QuoteList';
import AddQuote from './components/addQuote/AddQuote';
import { Quote } from './components/quote/OneQuote';
import { fetchQuotes, addQuote, deleteQuote, updateQuote } from './api/QuoteApi';

export function App(): JSX.Element {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const getQuotes = async () => {
      const fetchedQuotes = await fetchQuotes();
      setQuotes(fetchedQuotes);
    };

    getQuotes() as unknown as Quote[];
  }, []);

  const handleQuoteAdd = async (content: string) => {
    const newQuote = {
      isFav: false,
      isArchived: false,
      content,
      id: 0,
    };

    const res = await addQuote(newQuote);
    setQuotes((preQuotes) => [...preQuotes, res]);
  };

  const handleQuoteUpdate = async (updatedQuote: Quote) => {
    const res = await updateQuote(updatedQuote.id, updatedQuote);
    const newQuote = quotes.map((quote) => (quote.id === updatedQuote.id ? res : quote));
    setQuotes(newQuote);
  };

  const handleQuoteDelete = async (id: number) => {
    await deleteQuote(id);
    setQuotes((preQuotes) => preQuotes.filter((quote) => quote.id !== id));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {showForm && <AddQuote addQuote={handleQuoteAdd} toggleForm={toggleForm} />}
        <QuoteList quotes={quotes} handleQuoteDelete={handleQuoteDelete} handleQuoteUpdate={handleQuoteUpdate} />
      </div>

      <ToolBar showForm={showForm} toggleForm={toggleForm} />
    </div>
  );
}
