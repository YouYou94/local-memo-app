import { useEffect, useState } from 'react';
import { Note, Template, Write } from '../components';

const NoteContainer = () => {
  const [note, setNote] = useState<Object>({});
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('note'))
      setNote(JSON.parse(localStorage.getItem('note') || ''));
  }, []);

  return (
    <Template>
      {isUpdate ? (
        <Write note={note} setNote={setNote} setIsUpdate={setIsUpdate} />
      ) : (
        <Note note={note} setNote={setNote} setIsUpdate={setIsUpdate} />
      )}
    </Template>
  );
};

export default NoteContainer;
