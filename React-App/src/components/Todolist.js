import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateTask } from '../slices/todoSlice';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(
      addTask({
        id: Date.now(),
        text,
        isBold: false,
        isItalic: false,
        isUnderlined: false,
      })
    );
    setText('');
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  const handleEditClick = (task) => {
    setEditId(task.id);
    setEditText(task.text);
    setIsBold(task.isBold);
    setIsItalic(task.isItalic);
    setIsUnderlined(task.isUnderlined);
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        id: editId,
        text: editText,
        isBold,
        isItalic,
        isUnderlined,
      })
    );
    setEditId(null);
    setEditText('');
    setIsBold(false);
    setIsItalic(false);
    setIsUnderlined(false);
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        padding: 2,
        borderRadius: 2,
        mt: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>To-Do List</Typography>

      {/* Add New Task */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      {/* Edit Task (when editId is not null) */}
      {editId && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
          <TextField
            label="Edit Task"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant={isBold ? 'contained' : 'outlined'}
              onClick={() => setIsBold(!isBold)}
            >
              Bold
            </Button>
            <Button
              variant={isItalic ? 'contained' : 'outlined'}
              onClick={() => setIsItalic(!isItalic)}
            >
              Italic
            </Button>
            <Button
              variant={isUnderlined ? 'contained' : 'outlined'}
              onClick={() => setIsUnderlined(!isUnderlined)}
            >
              Underline
            </Button>
          </Box>
          <Button variant="contained" onClick={handleUpdate}>
            Update Task
          </Button>
        </Box>
      )}

      {/* Task List */}
      {tasks.map((task) => (
        <Box
          key={task.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: task.isBold ? 'bold' : 'normal',
              fontStyle: task.isItalic ? 'italic' : 'normal',
              textDecoration: task.isUnderlined ? 'underline' : 'none',
            }}
          >
            {task.text}
          </Typography>
          <Box>
            <IconButton onClick={() => handleEditClick(task)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(task.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TodoList;
