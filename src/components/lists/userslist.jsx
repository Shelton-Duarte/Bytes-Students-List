import React, { useState } from "react";
import { users as initialUsers } from "../data/users.js";
import { PlusCircleIcon, MinusCircleIcon, InformationCircleIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

export const ListsUsers = () => {
  const [users, setUsers] = useState(initialUsers); // Estado para armazenar os usuários
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newStudentName, setNewStudentName] = useState(''); // Estado para o nome do novo estudante
  const [editMode, setEditMode] = useState(false); // Estado para controlar o modo de edição
  const [editUserId, setEditUserId] = useState(null); // Estado para o ID do usuário em modo de edição

  // Função para adicionar um novo estudante
  const addNewStudent = () => {
    if (newStudentName.trim() === '') {
      alert('Por favor, insira o nome do novo estudante.');
      return;
    }

    const newStudent = {
      id: users.length + 1, // Simples simulação de ID único
      name: newStudentName.trim(),
      linkLabel: newStudentName.trim(), // Apenas para exemplo, pode ser modificado
      linkUrl: '#', // Exemplo de link URL
    };

    // Encontrar a posição correta para inserir o novo aluno na lista ordenada alfabeticamente
    const updatedUsers = [...users, newStudent].sort((a, b) => a.linkLabel.localeCompare(b.linkLabel));

    setUsers(updatedUsers);
    setNewStudentName('');
  };

  // Função para atualizar o nome de um estudante existente
  const updateStudentName = (userId, newName) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, name: newName } : user
    );
    setUsers(updatedUsers);
    setEditMode(false);
    setEditUserId(null);
  };

  // Função para filtrar os usuários com base no termo de busca
  const filteredUsers = users.filter((user) =>
    user.linkLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para editar um estudante existente
  const editStudent = (user) => {
    setEditMode(true);
    setEditUserId(user.id);
    setNewStudentName(user.name);
  };

  // Função para cancelar a edição de um estudante
  const cancelEdit = () => {
    setEditMode(false);
    setEditUserId(null);
    setNewStudentName('');
  };

  // Função para remover um estudante da lista
  const removeUser = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  // Função para adicionar um estudante à lista de selecionados
  const addUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
  };

  // Função para remover um estudante da lista de selecionados
  const removeSelectedUser = (user) => {
    const updatedUsers = selectedUsers.filter((u) => u !== user);
    setSelectedUsers(updatedUsers);
  };

  return (
    <div style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px'}} className="font-normal container mx-auto py-8">
      {/* Barra de pesquisa */}
      <div className="relative w-full mb-4">
        <input
          type="text"
          placeholder="Pesquisar usuário..."
          className="text-white bg-purple-bytes w-full max-w-full rounded-md shadow-sm px-3 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-2 text-green-bytes rounded-full"
          onClick={() => setEditMode(true)}
        >
          <PlusCircleIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Formulário para adicionar novo estudante */}
      {editMode && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nome do novo estudante"
            className="text-white bg-purple-bytes w-full max-w-full rounded-md shadow-sm px-3 py-2"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
          />
          <div className="flex mt-2">
            <button
              className="mr-2 px-4 py-2 bg-green-bytes text-white rounded-md font-semibold hover:bg-white hover:text-green-bytes"
              onClick={addNewStudent}
            >
              Adicionar
            </button>

            <button
              className="font-semibold px-4 py-2 bg-gray-300 text-green-bytes rounded-md hover:bg-green-bytes hover:text-white"
              onClick={cancelEdit}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Lista de usuários */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user, index) => (
          <div key={index} className="bg-purple-bytes p-4 shadow-md rounded-md">
            <div className="flex justify-between items-center">
              <a href={user.linkUrl} className="text-white">{user.linkLabel}</a>
              <div className="flex items-center space-x-4">
                <button
                  className="text-green-500 hover:text-green-600"
                  onClick={() => removeUser(user)}
                >
                  <MinusCircleIcon className="h-5 w-5" />
                </button>
                
                <Link to={`/lists${user.linkUrl}`}>
                  <button
                    className="text-green-bytes hover:text-green-600"
                  >
                    <InformationCircleIcon className="h-5 w-5" />
                  </button>
                </Link >
                
              </div>
            </div>
            {/* Renderização do formulário de edição */}
            {editMode && editUserId === user.id && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Novo nome"
                  className="text-purple-bytes w-full max-w-full rounded-md shadow-sm px-3 py-2"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                />
                <div className="flex mt-2">
                  <button
                    className="mr-2 px-4 py-2 bg-green-bytes text-white rounded-md hover:bg-green-600"
                    onClick={() => updateStudentName(user.id, newStudentName)}
                  >
                    Atualizar
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    onClick={cancelEdit}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
