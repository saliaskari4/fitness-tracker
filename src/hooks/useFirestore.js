import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, query, where, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const useFirestore = (collectionName) => {
  const addDocument = async (data) => {
    await addDoc(collection(db, collectionName), data);
  };

  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
  };

  return { addDocument, deleteDocument };
};