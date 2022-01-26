import React, { useEffect, useState } from 'react';

// components
import Search from '../../components/Search';
import SideBar from '../../components/Sidebar';
import Table from '../../components/Table';

export default function HomePage() {
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(null);

  const url: string = 'https://61f11ea3072f86001749f030.mockapi.io/questions'

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data');
        }
        return response.json();
      })
      .then((data) => setQuestions(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleDelete = async (id: number | undefined) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      const newQuestions = questions.filter((question) => question.id !== id);
      setQuestions(newQuestions);
    }

    const success = await response.json();

    if (success) {
      alert('Deleted successfully');
    }
  };

  const filteredQuestions = questions.filter((question) =>
    question.text.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <SideBar />
      <main>
        <div className="container">
          <h1>All questions</h1>
          {error && <div>{error}</div>}
          <Search handleChange={(e) => setKeyword(e.currentTarget.value)} />
          <Table questions={filteredQuestions} handleDelete={handleDelete} />
        </div>
      </main>
    </>
  );
}
